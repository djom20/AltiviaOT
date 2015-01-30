<?php
    $config = Config::singleton();

    //Folders' Direction
    $config->set('controllersFolder', 'Controllers/');
    $config->set('modelsFolder', 'Models/');
    $config->set('xmlFolder', 'Models/xml/');
    $config->set('wsFolder', 'Models/services/');
    $config->set('viewsFolder', 'Views/');
    $config->set('templatesFolder', 'Templates/');
    
    $config->set('Template', 'default.php');
    $config->set('Environment', 'production');
    $config->set('driver', 'mysql');

    //Vars URL
    switch ($config->get('Environment')) {
        case 'development':
            $config->set('BaseUrl', 'http://api.altiviaot.com/');
            $config->set('dbhost', 'localhost');
            $config->set('dbname', 'altiviao_brochure');
            $config->set('dbuser', 'altiviao_dbuser');
            $config->set('dbpass', 'q6td9.9fmq3');
            break;
        case 'production':
            $config->set('BaseUrl', 'http://api.altiviaot.com/');
            $config->set('dbhost', 'localhost');
            $config->set('dbname', 'altiviao_brochure');
            $config->set('dbuser', 'altiviao_dbuser');
            $config->set('dbpass', 'q6td9.9fmq3');
            break;
    }
    