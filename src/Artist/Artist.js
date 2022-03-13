/**
 * @file      Artist.js
 * @brief     This class is designed to manage an artist.
 * @author    Created by Nicolas.GLASSEY
 * @version   12-MAR-2022 - original (dedicated to RIA1 EVAL)
 */

const AgeException = require('AgeException.js');

module.exports = class Artist{

    //region private attributes
    #firstname;
    #lastname;
    #dateOfBirth;
    //endregion private attributes

    //region public methods
    /**
     * This method constructs an Artist object
     * @param firstname
     * @param lastname
     * @param dateOfBirth
     */
    constructor (firstname, lastname, dateOfBirth) {
        throw new Error();
    }

    /**
     * This getter returns the Artist'age
     */
    get age(){
        throw new Error();
    }

    /**
     * This method returns artist string
     * @param withAge : include age in the string if set to true
     * @returns "Firstname Lastname {Age}"
     * @exception throws AgeException if the private attribute age was not provided
     */
    toString(withAge = false){
        throw new Error();
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}

