using System;
using System.Collections.Generic;
using System.ComponentModel;

using EProductMain.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace App.Areas.Identity.Models.UserViewModels
{
  public class AddUserRoleModel
  {
    public AppUser user { get; set; }

    [DisplayName("Các role gán cho user")]
    public string[] RoleNames { get; set; }

    public List<IdentityRoleClaim<Guid>> claimsInRole { get; set; }
    public List<IdentityUserClaim<Guid>> claimsInUserClaim { get; set; }

  }
}