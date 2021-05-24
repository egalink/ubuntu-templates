/**
 * @NApiVersion 2.x
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 */
define([

    "N/log",
    "N/error",

], function (Log, Error) {

    'use strict';

    /**
     * Marks the beginning of the Map/Reduce process and generates input data.
     *
     * @typedef {Object} ObjectRef
     * @property {number} id - Internal ID of the record instance
     * @property {string} type - Record type id
     *
     * @return {Array|Object|Search|RecordRef} inputSummary
     * @since 2015.1
     */
    function getInputData () {
        //
        var collection = [];

        return collection;
    }

    /**
     * Executes when the map entry point is triggered and applies to each key/value pair.
     *
     * @param {MapSummary} context - Data collection containing the key/value pairs to process through the map stage
     * @since 2015.1
     */
    function map (context) {
        //
        // context = {
        //     "type" : "mapreduce.MapContext",
        //     "isRestarted" : false,
        //     "executionNo" : 1,
        //     "key" : "0",
        //     "value" : "{\"internalid\":\"1234567890\"}"
        // };

        var value = JSON.parse(context.value);

        context.write({ key: 0, value: value });
    }

    /**
     * Executes when the reduce entry point is triggered and applies to each group.
     *
     * @param {ReduceSummary} context - Data collection containing the groups to process through the reduce stage
     * @since 2015.1
     */
    function reduce (context) {
        //
        // {
        //     "type": "mapreduce.ReduceContext",
        //     "isRestarted": false,
        //     "executionNo": 1,
        //     "key": "0",
        //     "values": [
        //          "{\"internalid\":\"1234567890\"}",
        //          "{\"internalid\":\"1234567890\"}",
        //          "{\"internalid\":\"1234567890\"}",
        //     ]
        // }

        var values = context.values.map(function (value) { return JSON.parse(value) });

        context.write({ key: context.key, value: reduced });
    }

    /**
     * Executes when the summarize entry point is triggered and applies to the result set.
     *
     * @param {Summary} summary - Holds statistics regarding the execution of a map/reduce script
     * @since 2015.1
     */
    function summarize (summary) {
        //
        var collection = [];

        summary.output.iterator().each(function (key, value) {
            //
            collection.push(JSON.parse(value));
            return true;
        });

        // collection = [
        //          "{\"internalid\":\"1234567890\"}",
        //          "{\"internalid\":\"1234567890\"}",
        //          "{\"internalid\":\"1234567890\"}",
        //     ]        
    }

    return {
        getInputData: getInputData,
        map: map,
        reduce: reduce,
        summarize: summarize
    };
    
});
