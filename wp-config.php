<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'zeroum80_wp334' );

/** Database username */
define( 'DB_USER', 'zeroum80_wp334' );

/** Database password */
define( 'DB_PASSWORD', '(83vpg9.SR' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

//Configuração para usar dois dominios no mesmo site

if(strpos($_SERVER["HTTP_HOST"],'dranatalyademoura.com.br')===false){
define('WP_HOME','http://oftalmologistasaogoncalo.com.br');
define('WP_SITEURL','http://oftalmologistasaogoncalo.com.br');
}

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'lihxuqqz1u65mk5bb8zfnkvsejwfb4qzsl3x7am8sh2v32vqyobyxhcx5ze02tdw' );
define( 'SECURE_AUTH_KEY',  '0glofzjuth1olp4kwadrlnnjouaohu83kli9v0ulzjl8kxpexcftfryksovorqkg' );
define( 'LOGGED_IN_KEY',    '49esdqp7hpnfyoku0xillb59wqiqmgjoe2ifhckanx8z1z1xnfsrp8gcjtvvldj7' );
define( 'NONCE_KEY',        'fcazpa4oxxgcamlgcxvg0hul5oidrcn9fe9hjor22pllk1idibvn0dwjpmst37dj' );
define( 'AUTH_SALT',        '55dcreyqscszhwkla5be1awvbfzu7w1ejlaxbsat5zojjwugledgucla7pn0rdh9' );
define( 'SECURE_AUTH_SALT', 'hegm8d9hvcvboxjetzwkkfkfonz03psp2fl8gasiiex5h2dupvjs36689qwbv0rk' );
define( 'LOGGED_IN_SALT',   '7ybzorksb5isnzhbwif3glgjyborkdikj9rvatygtotkknnakozup5umvu7lku3o' );
define( 'NONCE_SALT',       'nabvspgzepr37j3cfbk8jeiavzbcoywjq4y5ulycvkg0tkrr6b8xl7uscizlrpvq' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpkr_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
