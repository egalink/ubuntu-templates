/**
 * Suitelet.js
 
 * Script Version 1.0.0
 *
 * A Script description...
 *
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define([

    "N/error",
    "N/log",

], function (Error, Log) {

    'use strict';
    
    /**
     * Encapsulation of the incoming request.
     * 
     * @type {ServerRequest}
     */
    var req;

    /**
     * Encapsulation of the Suitelet response.
     * 
     * @type {ServerResponse}
     */
    var res;

    /**
     * Definition of the Suitelet script trigger point.
     * 
     * @param {Object} context
     * @param {ServerRequest} context.request - Encapsulation of the incoming request
     * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
     * @Since 2015.2
     */
    function onRequest (context) {
        //
        req = context.request;
        res = context.response;

        return res.write("Hi!");
    }

	/**
     * @return {Object}
     */
    return {
        onRequest: onRequest
    };
});
