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
define('DB_NAME', 'serua_main');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', 'pwd');

/** Database hostname */
define('DB_HOST', '103.49.238.193:3306');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

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
define('AUTH_KEY',         'bidzp8srfilt0plcntupapjexunp8rgbvevi0rrwzbtpsykma9pfa2ao2trjrnj1');
define('SECURE_AUTH_KEY',  'qm5ulvbjdhmafs6lcv5mo95basbkvvwo4su6nzjgsnbpjihiueu6u7fevxg8b3gt');
define('LOGGED_IN_KEY',    'qfshgri4tbit35kfht2boxs766oqq5lc4o2t9eperiz6gm9cr33j4xffw4fs8lu4');
define('NONCE_KEY',        'lingwjj6o8kuitzofgd4dyfw2xlggcuro352qmap3xajjsxu6ro2swbxpgsw7iff');
define('AUTH_SALT',        'eebeme3xslzqzladikxlsg5pwoye63c2wr93qwvrfa28bzjqgd3zvtfhp736bnll');
define('SECURE_AUTH_SALT', 'ujhbhtuhnvu9aztzeoozyy6aqkvmim6ebst94d5xmcyfsunrijlwot07s17yizjq');
define('LOGGED_IN_SALT',   'qqyf4yicn3i6c51qxsiaowrq682g62yh2pw9kjhm2v3qzp5fik3z5q201zkuwcka');
define('NONCE_SALT',       'ljvvd80b2enduvjxamyeozqpbumhx6iunvq3xzxuzm5heiasbnihgkxgnzs3arpc');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpnr_';

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
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
