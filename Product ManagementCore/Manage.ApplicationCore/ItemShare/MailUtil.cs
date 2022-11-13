
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.ItemShare
{
    public class MailUtil
    {

        public static async Task SendMailLocal(string _from, string _to, string _object, string _json)
        {
            MailMessage message = new MailMessage(_from, _to, _object, _json);
            message.BodyEncoding = System.Text.Encoding.UTF8;
            message.SubjectEncoding = System.Text.Encoding.UTF8;
            message.IsBodyHtml = true;
            message.ReplyToList.Add(new MailAddress(_from));
            message.Sender = new MailAddress(_from);
            using var smtpClient = new SmtpClient("localhost");
            try
            {
                await smtpClient.SendMailAsync(message);
            }
            catch (Exception e)
            {

            }
        }
        public static async Task<string> SendGMail(string _from, string _to, string _object, string _json, string _gmail, string _passWord)
        {
            MailMessage message = new MailMessage(_from, _to, _object, _json);
            message.BodyEncoding = System.Text.Encoding.UTF8;
            message.SubjectEncoding = System.Text.Encoding.UTF8;
            message.IsBodyHtml = true;
            message.ReplyToList.Add(new MailAddress(_from));
            message.Sender = new MailAddress(_from);
            using var smtpClient = new SmtpClient("smtp.gmail.com");
            smtpClient.Port = 587;
            smtpClient.EnableSsl = true;
            smtpClient.Credentials = new NetworkCredential(_gmail, _passWord);
            try
            {
                await smtpClient.SendMailAsync(message);
                return "success!";
            }
            catch (Exception e)
            {
                return "fail! " + e.Message;
            }
        }
    }
    public class MailServices
    {
        MailConfig _MailConfig { get; set; }
        public MailServices(IOptions<MailConfig> mailConfig)
        {
            _MailConfig = mailConfig.Value;
        }
        public async Task<string> SendMail(MailContent mailContent)
        {
            try
            {
                var email = new MimeMessage();
                email.Sender = new MailboxAddress(_MailConfig.DisplayName, _MailConfig.Mail);
                email.From.Add(new MailboxAddress(_MailConfig.DisplayName, _MailConfig.Mail));
                email.To.Add(new MailboxAddress(mailContent.Name, mailContent.To));
                email.Subject = mailContent.Subject;
                var builder = new BodyBuilder();
                builder.HtmlBody = mailContent.Body;
                // builder.TextBody;
                // await  builder.Attachments.AddAsync("");
                email.Body = builder.ToMessageBody();
                using var smtp = new MailKit.Net.Smtp.SmtpClient();
                await smtp.ConnectAsync(_MailConfig.Host, _MailConfig.Port, MailKit.Security.SecureSocketOptions.StartTls);
                await smtp.AuthenticateAsync(_MailConfig.Mail, _MailConfig.PassWord);
                await smtp.SendAsync(email);
                smtp.Disconnect(true);
                return "Success!";

            }
            catch (Exception e)
            {
                return "Fail!" + e.Message;
            }

        }

    }
    public class MailConfig
    {
        public string Mail { get; set; }
        public string DisplayName { get; set; }
        public string PassWord { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
    }
    public class MailContent
    {
        public string Name { get; set; }
        public string To { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }

    }
}
