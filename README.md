## Typing Competition Platform 
### Dependencies
- PHP, MySQL and Apache. For Windows development XAMPP is recommended (FileZilla, Mercury and Tomcat not needed). Hosted on a LAMP server in production.
- PHPMailer installed with Composer.

### Installation
Create a `config.php` file in the `includes` folder following the given template:
```
<?php

return array(
    'servername' => 'localhost',
    'dBUsername' => 'admin',
    'dBPassword' => '',
    'dBName'     => 'typecomp',

    'allowedDomain' => 'example.com',

    'mailerUsername' => 'noreply@example.com',
    'mailerPassword' => '',
);
```

### Acknowledgments
- This project is an extension of the work of [@mitchpk](https://github.com/mitchpk) and [@archergs](https://github.com/archergs) (and I guess a younger me).
- Front-end originally a fork of [@anschwa](https://github.com/anschwa)'s ES6 Typing Test.
