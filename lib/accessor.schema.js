'use strict';



/**
 * @module majifix-account
 * @name Accessor
 * @description list of individuals that are allowed to access
 * account
 *
 * @see {@link https://github.com/CodeTanzania/majifix-jurisdiction}
 * @author lally elias <lallyelias87@mail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @public
 */


/* dependencies */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { env } = require('@codetanzania/majifix-common');


/* local constants */
const { DEFAULT_LOCALE } = env;
const SUB_DOCUMENT_OPTIONS =
  ({ _id: false, id: false, timestamps: true, emitIndexErrors: true });

/**
 * @name Accessor
 * @type {Schema}
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const Accessor = new Schema({
  /**
   * @name name
   * @description Name of the accessor
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  name: {
    type: String,
    trim: true,
    index: true,
    fake: {
      generator: 'name',
      type: 'findName'
    }
  },


  /**
   * @name phone
   * @description Valid mobile phone number of the accessor
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  phone: {
    type: String,
    trim: true,
    index: true,
    fake: {
      generator: 'phone',
      type: 'phoneNumber'
    }
  },

  /**
   * @name email
   * @description Valid email address of the accessor
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} lowercase - force lower-casing
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  email: {
    type: String,
    trim: true,
    lowercase: true,
    index: true,
    fake: {
      generator: 'phone',
      type: 'phoneNumber'
    }
  },

  /**
   * @name locale
   * @description Defines the accessor language, region and any
   * special variant preferences.
   *
   * Used to localize(format) account user interfaces.
   *
   * @type {object}
   * @see {@link https://en.wikipedia.org/wiki/Locale_(computer_software)}
   * @private
   * @since 0.1.0
   * @version 0.1.0
   */
  locale: {
    type: String,
    trim: true,
    default: DEFAULT_LOCALE,
    index: true
  },

  /**
   * @name verifiedAt
   * @description A date when accessor veriified
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} index - ensure database index
   * @property {object} fake - fake data generator options
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  verifiedAt: {
    type: Date,
    index: true,
    fake: {
      generator: 'date',
      type: 'soon'
    }
  },



}, SUB_DOCUMENT_OPTIONS);



/* export accessor schema */
module.exports = Accessor;