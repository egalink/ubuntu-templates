/**
 * 
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/record'], function (record) {

    'use strict';

    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} Context
     * @param {Record} Context.newRecord - New record
     * @param {string} Context.type - Trigger type
     * @param {Form} Context.form - Current form
     * @Since 2015.2
     */
    function beforeLoad (Context) {
        //
        if (Context.type !== Context.UserEventType.CREATE)
            return;

        var customerRecord = Context.newRecord;
    }

    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} Context
     * @param {Record} Context.newRecord - New record
     * @param {Record} Context.oldRecord - Old record
     * @param {string} Context.type - Trigger type
     * @Since 2015.2
     */
    function beforeSubmit (Context) {
        //
        if (Context.type !== Context.UserEventType.CREATE)
            return;

        var customerRecord = Context.newRecord;
    }

    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} Context
     * @param {Record} Context.newRecord - New record
     * @param {Record} Context.oldRecord - Old record
     * @param {string} Context.type - Trigger type
     * @Since 2015.2
     */
    function afterSubmit (Context) {
        //
        if (Context.type !== Context.UserEventType.CREATE)
            return;

        var customerRecord = Context.newRecord;
    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    };
});