// middleware/signaturePermissionMiddleware.js
const hasPermission = (req, res, next) => {

    // You might check the user's role or any other criteria here
    const allowedRoles = ['dean', 'registrar', 'departmentHead1', 'departmentHead2','departmentHead3', 'departmentHead4','departmentHead6', 'departmentHead7','departmentHead8', 'departmentHead9'];
  
    if (allowedRoles.includes(req.user.role)) {
      return next();
    }
  
    // If the user doesn't have permission, respond with a 403 Forbidden status
    res.status(403).json({ message: 'Permission denied' });
  };
  
  module.exports = { hasPermission };
  