// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const ValueInputHelp = require("../dist").ValueInputHelp;
const setup = require("./setup");

("use strict");

let VI;
beforeAll(async () => {
  const vi = await ValueInputHelp.new(setup.client, setup.shlpApi);
  return (VI = vi);
});

describe("CT Helps", () => {
  test("CT T16FB descriptor", async () => {
    expect.assertions(1);

    const desc = await VI.getShlpDescriptor({ type: "CT", name: "T16FB" });

    expect(desc).toMatchObject({
      "CT T16FB": {
        INTDESCR: {
          ISSIMPLE: "X",
          HOTKEY: "",
          SELMTYPE: "X",
          SELMETHOD: "T16FB",
          TEXTTAB: "T16FE",
          SELMEXIT: "",
          DIALOGTYPE: "D",
          DDLANGUAGE: "",
          DDTEXT: "",
          DIALOGINFO: "X",
          F4STATE: "",
          TABNAME: "",
          FIELDNAME: "",
          TITLE: "",
          HISTORY: "",
          HANDLE: 0,
          AUTOSUGGEST: "",
          FUZZY_SEARCH: "",
          FUZZY_SIMILARITY: "0.0",
        },
        SCRLENMAX: 19,
        SHLPOUTPUT: "FRGKE",
        ALLOUTPUTS: [],
        FIELDDESCR: [
          {
            TABNAME: "T16FB",
            FIELDNAME: "FRGKE",
            LANGU: "E",
            POSITION: 1,
            OFFSET: 6,
            DOMNAME: "FRGKE",
            ROLLNAME: "FRGKE",
            CHECKTABLE: "",
            LENG: 1,
            INTLEN: 2,
            OUTPUTLEN: 1,
            DECIMALS: 0,
            DATATYPE: "CHAR",
            INTTYPE: "C",
            REFTABLE: "",
            REFFIELD: "",
            PRECFIELD: "T16FB",
            AUTHORID: "",
            MEMORYID: "",
            LOGFLAG: "X",
            MASK: "",
            MASKLEN: "0000",
            CONVEXIT: "",
            HEADLEN: 3,
            SCRLEN1: 8,
            SCRLEN2: 13,
            SCRLEN3: 19,
            FIELDTEXT: "Release Indicator: Purchasing Document",
            REPTEXT: "Rel",
            SCRTEXT_S: "Release",
            SCRTEXT_M: "Release ind.",
            SCRTEXT_L: "Release indicator",
            KEYFLAG: "X",
            LOWERCASE: "",
            MAC: "",
            GENKEY: "",
            NOFORKEY: "",
            VALEXI: "",
            NOAUTHCH: "",
            SIGN: "",
            DYNPFLD: "X",
            F4AVAILABL: "",
            COMPTYPE: "E",
            LFIELDNAME: "FRGKE",
            LTRFLDDIS: "",
            BIDICTRLC: "",
            OUTPUTSTYLE: "00",
            NOHISTORY: "",
            AMPMFORMAT: "",
            TOPSHLPNAM: "",
            TOPSHLPFLD: "",
            PARVA: "",
            PARTXT: "",
          },
          {
            TABNAME: "T16FE",
            FIELDNAME: "FRGET",
            LANGU: "E",
            POSITION: 2,
            OFFSET: 8,
            DOMNAME: "TEXT30",
            ROLLNAME: "FRGET",
            CHECKTABLE: "",
            LENG: 30,
            INTLEN: 60,
            OUTPUTLEN: 30,
            DECIMALS: 0,
            DATATYPE: "CHAR",
            INTTYPE: "C",
            REFTABLE: "",
            REFFIELD: "",
            PRECFIELD: "T16FE",
            AUTHORID: "",
            MEMORYID: "",
            LOGFLAG: "",
            MASK: "",
            MASKLEN: "0000",
            CONVEXIT: "",
            HEADLEN: 30,
            SCRLEN1: 9,
            SCRLEN2: 11,
            SCRLEN3: 11,
            FIELDTEXT: "Description of Release Indicator",
            REPTEXT: "Description",
            SCRTEXT_S: "Descr.",
            SCRTEXT_M: "Description",
            SCRTEXT_L: "Description",
            KEYFLAG: "",
            LOWERCASE: "X",
            MAC: "",
            GENKEY: "",
            NOFORKEY: "",
            VALEXI: "",
            NOAUTHCH: "",
            SIGN: "",
            DYNPFLD: "X",
            F4AVAILABL: "",
            COMPTYPE: "E",
            LFIELDNAME: "FRGET",
            LTRFLDDIS: "",
            BIDICTRLC: "",
            OUTPUTSTYLE: "00",
            NOHISTORY: "",
            AMPMFORMAT: "",
            PARVA: "",
            PARTXT: "",
          },
        ],
      },
    });
  });

  test("CT T16FB", async () => {
    expect.assertions(5);

    const R = await VI.search({ type: "CT", name: "T16FB" }, []);

    expect(R.shlpoutput).toEqual("FRGKE");

    expect(R.maxrows_exceeded).toEqual(false);

    expect(R.headers).toEqual([
      {
        field: "FRGKE",
        len: 1,
        abaptype: "CHAR",
        title: "Rel",
        text_align: "left",
        position: "",
      },
      {
        field: "FRGET",
        len: 30,
        abaptype: "CHAR",
        title: "Description",
        text_align: "left",
        position: "",
      },
    ]);

    expect(R.search_result).toEqual([
      { FRGKE: "0", FRGET: "Changeable" },
      { FRGKE: "1", FRGET: "Changeable, but new release" },
    ]);

    expect(R.desc).toEqual([
      {
        TABNAME: "T16FB",
        FIELDNAME: "FRGKE",
        LANGU: "E",
        POSITION: "0001",
        OFFSET: "000006",
        DOMNAME: "FRGKE",
        ROLLNAME: "FRGKE",
        CHECKTABLE: "",
        LENG: "000001",
        INTLEN: "000002",
        OUTPUTLEN: "000001",
        DECIMALS: "000000",
        DATATYPE: "CHAR",
        INTTYPE: "C",
        REFTABLE: "",
        REFFIELD: "",
        PRECFIELD: "T16FB",
        AUTHORID: "",
        MEMORYID: "",
        LOGFLAG: "X",
        MASK: "",
        MASKLEN: "0000",
        CONVEXIT: "",
        HEADLEN: "03",
        SCRLEN1: "08",
        SCRLEN2: "13",
        SCRLEN3: "19",
        FIELDTEXT: "Release Indicator: Purchasing Document",
        REPTEXT: "Rel",
        SCRTEXT_S: "Release",
        SCRTEXT_M: "Release ind.",
        SCRTEXT_L: "Release indicator",
        KEYFLAG: "X",
        LOWERCASE: "",
        MAC: "",
        GENKEY: "",
        NOFORKEY: "",
        VALEXI: "",
        NOAUTHCH: "",
        SIGN: "",
        DYNPFLD: "X",
        F4AVAILABL: "",
        COMPTYPE: "E",
        LFIELDNAME: "FRGKE",
        LTRFLDDIS: "",
        BIDICTRLC: "",
        OUTPUTSTYLE: "00",
        NOHISTORY: "",
        AMPMFORMAT: "",
      },
      {
        TABNAME: "T16FE",
        FIELDNAME: "FRGET",
        LANGU: "E",
        POSITION: "0002",
        OFFSET: "000008",
        DOMNAME: "TEXT30",
        ROLLNAME: "FRGET",
        CHECKTABLE: "",
        LENG: "000030",
        INTLEN: "000060",
        OUTPUTLEN: "000030",
        DECIMALS: "000000",
        DATATYPE: "CHAR",
        INTTYPE: "C",
        REFTABLE: "",
        REFFIELD: "",
        PRECFIELD: "T16FE",
        AUTHORID: "",
        MEMORYID: "",
        LOGFLAG: "",
        MASK: "",
        MASKLEN: "0000",
        CONVEXIT: "",
        HEADLEN: "30",
        SCRLEN1: "09",
        SCRLEN2: "11",
        SCRLEN3: "11",
        FIELDTEXT: "Description of Release Indicator",
        REPTEXT: "Description",
        SCRTEXT_S: "Descr.",
        SCRTEXT_M: "Description",
        SCRTEXT_L: "Description",
        KEYFLAG: "X",
        LOWERCASE: "X",
        MAC: "",
        GENKEY: "",
        NOFORKEY: "",
        VALEXI: "",
        NOAUTHCH: "",
        SIGN: "",
        DYNPFLD: "X",
        F4AVAILABL: "",
        COMPTYPE: "E",
        LFIELDNAME: "FRGET",
        LTRFLDDIS: "",
        BIDICTRLC: "",
        OUTPUTSTYLE: "00",
        NOHISTORY: "",
        AMPMFORMAT: "",
      },
    ]);
  });

  test("CT T165R", async () => {
    expect.assertions(4);

    const shlpId = { type: "CT", name: "T165R" };

    const desc = await VI.getShlpDescriptor(shlpId);

    expect(desc).toMatchObject({
      "CT T165R": {
        INTDESCR: {
          ISSIMPLE: "X",
          HOTKEY: "",
          SELMTYPE: "",
          SELMETHOD: "T165R",
          TEXTTAB: "",
          SELMEXIT: "",
          DIALOGTYPE: "D",
          DDLANGUAGE: "",
          DDTEXT: "",
          DIALOGINFO: "X",
          F4STATE: "",
          TABNAME: "",
          FIELDNAME: "",
          TITLE: "",
          HISTORY: "",
          HANDLE: 0,
          AUTOSUGGEST: "",
          FUZZY_SEARCH: "",
          FUZZY_SIMILARITY: "0.0",
        },
        SCRLENMAX: 20,
        SHLPOUTPUT: "ABSGR",
        ALLOUTPUTS: [],
        FIELDDESCR: [
          {
            TABNAME: "T165R",
            FIELDNAME: "ABSGR",
            LANGU: "E",
            POSITION: 1,
            OFFSET: 6,
            DOMNAME: "NUMC02",
            ROLLNAME: "ABSGR",
            CHECKTABLE: "",
            LENG: 2,
            INTLEN: 4,
            OUTPUTLEN: 2,
            DECIMALS: 0,
            DATATYPE: "NUMC",
            INTTYPE: "N",
            REFTABLE: "",
            REFFIELD: "",
            PRECFIELD: "T165R",
            AUTHORID: "",
            MEMORYID: "",
            LOGFLAG: "X",
            MASK: "",
            MASKLEN: "0000",
            CONVEXIT: "",
            HEADLEN: 11,
            SCRLEN1: 10,
            SCRLEN2: 15,
            SCRLEN3: 20,
            FIELDTEXT: "Reason for Cancellation",
            REPTEXT: "Reas. Canc.",
            SCRTEXT_S: "Reas.Canc.",
            SCRTEXT_M: "Reas. for Canc.",
            SCRTEXT_L: "Reason for Canc.",
            KEYFLAG: "X",
            LOWERCASE: "",
            MAC: "",
            GENKEY: "",
            NOFORKEY: "",
            VALEXI: "",
            NOAUTHCH: "",
            SIGN: "",
            DYNPFLD: "X",
            F4AVAILABL: "",
            COMPTYPE: "E",
            LFIELDNAME: "ABSGR",
            LTRFLDDIS: "",
            BIDICTRLC: "",
            OUTPUTSTYLE: "00",
            NOHISTORY: "",
            AMPMFORMAT: "",
            TOPSHLPNAM: "",
            TOPSHLPFLD: "",
            PARVA: "",
            PARTXT: "",
          },
        ],
      },
    });

    const R = await VI.search(shlpId, []);

    expect(R.shlpoutput).toEqual("ABSGR");

    expect(R.maxrows_exceeded).toEqual(false);

    expect(R.headers).toEqual([
      {
        field: "ABSGR",
        len: 2,
        abaptype: "NUMC",
        title: "Reas. Canc.",
        text_align: "left",
        position: "",
      },
    ]);

    // _todo: corrupted in test system :-(
    // expect(R.headers).toEqual([
    //   ["ABSGR", "Reas. Canc.", 2],
    //   ["ABSGR_TXT", "Name", 40],
    // ]);
    // expect(R.search_result).toEqual([
    //   { ABSGR: "01", ABSGR_TXT: "Cancelled due to poor quality" },
    //   { ABSGR: "02", ABSGR_TXT: "Cancelled - source of supply changed" },
    // ]);
  });

  test("CT CSKS descriptor", async () => {
    expect.assertions(1);

    const shlpId = { type: "CT", name: "CSKS" };

    const desc = await VI.getShlpDescriptor(shlpId);

    expect(desc).toMatchObject({
      "CT CSKS": {
        INTDESCR: {
          ISSIMPLE: "X",
          HOTKEY: "",
          SELMTYPE: "X",
          SELMETHOD: "CSKS",
          TEXTTAB: "CSKT",
          SELMEXIT: "",
          DIALOGTYPE: "D",
          DDLANGUAGE: "",
          DDTEXT: "",
          DIALOGINFO: "X",
          F4STATE: "",
          TABNAME: "",
          FIELDNAME: "",
          TITLE: "",
          HISTORY: "",
          HANDLE: 0,
          AUTOSUGGEST: "",
          FUZZY_SEARCH: "",
          FUZZY_SIMILARITY: "0.0",
        },
        SCRLENMAX: 20,
        SHLPOUTPUT: "DATBI",
        ALLOUTPUTS: [],
        FIELDDESCR: [
          {
            TABNAME: "CSKS",
            FIELDNAME: "DATBI",
            LANGU: "E",
            POSITION: 1,
            OFFSET: 34,
            DOMNAME: "DATUM",
            ROLLNAME: "DATBI",
            CHECKTABLE: "",
            LENG: 8,
            INTLEN: 16,
            OUTPUTLEN: 10,
            DECIMALS: 0,
            DATATYPE: "DATS",
            INTTYPE: "D",
            REFTABLE: "",
            REFFIELD: "",
            PRECFIELD: "CSKS",
            AUTHORID: "",
            MEMORYID: "",
            LOGFLAG: "X",
            MASK: "",
            MASKLEN: "0000",
            CONVEXIT: "",
            HEADLEN: 10,
            SCRLEN1: 10,
            SCRLEN2: 15,
            SCRLEN3: 20,
            FIELDTEXT: "Valid To Date",
            REPTEXT: "to",
            SCRTEXT_S: "to",
            SCRTEXT_M: "Valid To",
            SCRTEXT_L: "Valid To",
            KEYFLAG: "X",
            LOWERCASE: "",
            MAC: "",
            GENKEY: "",
            NOFORKEY: "",
            VALEXI: "",
            NOAUTHCH: "",
            SIGN: "",
            DYNPFLD: "X",
            F4AVAILABL: "X",
            COMPTYPE: "E",
            LFIELDNAME: "DATBI",
            LTRFLDDIS: "",
            BIDICTRLC: "",
            OUTPUTSTYLE: "00",
            NOHISTORY: "",
            AMPMFORMAT: "",
            TOPSHLPNAM: "",
            TOPSHLPFLD: "",
            PARVA: "",
            PARTXT: "",
          },
          {
            TABNAME: "CSKS",
            FIELDNAME: "KOKRS",
            LANGU: "E",
            POSITION: 2,
            OFFSET: 6,
            DOMNAME: "CACCD",
            ROLLNAME: "KOKRS",
            CHECKTABLE: "TKA01",
            LENG: 4,
            INTLEN: 8,
            OUTPUTLEN: 4,
            DECIMALS: 0,
            DATATYPE: "CHAR",
            INTTYPE: "C",
            REFTABLE: "",
            REFFIELD: "",
            PRECFIELD: "CSKS",
            AUTHORID: "",
            MEMORYID: "CAC",
            LOGFLAG: "X",
            MASK: "",
            MASKLEN: "0000",
            CONVEXIT: "",
            HEADLEN: 4,
            SCRLEN1: 10,
            SCRLEN2: 15,
            SCRLEN3: 20,
            FIELDTEXT: "Controlling Area",
            REPTEXT: "COAr",
            SCRTEXT_S: "CO Area",
            SCRTEXT_M: "CO Area",
            SCRTEXT_L: "Controlling Area",
            KEYFLAG: "X",
            LOWERCASE: "",
            MAC: "",
            GENKEY: "",
            NOFORKEY: "",
            VALEXI: "",
            NOAUTHCH: "",
            SIGN: "",
            DYNPFLD: "X",
            F4AVAILABL: "X",
            COMPTYPE: "E",
            LFIELDNAME: "KOKRS",
            LTRFLDDIS: "",
            BIDICTRLC: "",
            OUTPUTSTYLE: "00",
            NOHISTORY: "",
            AMPMFORMAT: "",
            TOPSHLPNAM: "",
            TOPSHLPFLD: "",
            PARVA: "",
            PARTXT: "",
          },
          {
            TABNAME: "CSKS",
            FIELDNAME: "KOSTL",
            LANGU: "E",
            POSITION: 3,
            OFFSET: 14,
            DOMNAME: "KOSTL",
            ROLLNAME: "KOSTL",
            CHECKTABLE: "",
            LENG: 10,
            INTLEN: 20,
            OUTPUTLEN: 10,
            DECIMALS: 0,
            DATATYPE: "CHAR",
            INTTYPE: "C",
            REFTABLE: "",
            REFFIELD: "",
            PRECFIELD: "CSKS",
            AUTHORID: "",
            MEMORYID: "KOS",
            LOGFLAG: "X",
            MASK: "",
            MASKLEN: "0000",
            CONVEXIT: "ALPHA",
            HEADLEN: 10,
            SCRLEN1: 10,
            SCRLEN2: 15,
            SCRLEN3: 20,
            FIELDTEXT: "Cost Center",
            REPTEXT: "Cost Ctr",
            SCRTEXT_S: "Cost Ctr",
            SCRTEXT_M: "Cost Center",
            SCRTEXT_L: "Cost Center",
            KEYFLAG: "X",
            LOWERCASE: "",
            MAC: "X",
            GENKEY: "",
            NOFORKEY: "",
            VALEXI: "",
            NOAUTHCH: "",
            SIGN: "",
            DYNPFLD: "X",
            F4AVAILABL: "X",
            COMPTYPE: "E",
            LFIELDNAME: "KOSTL",
            LTRFLDDIS: "",
            BIDICTRLC: "",
            OUTPUTSTYLE: "00",
            NOHISTORY: "",
            AMPMFORMAT: "",
            TOPSHLPNAM: "",
            TOPSHLPFLD: "",
            PARVA: "",
            PARTXT: "",
          },
          {
            TABNAME: "CSKT",
            FIELDNAME: "KTEXT",
            LANGU: "E",
            POSITION: 4,
            OFFSET: 50,
            DOMNAME: "TEXT20",
            ROLLNAME: "KTEXT",
            CHECKTABLE: "",
            LENG: 20,
            INTLEN: 40,
            OUTPUTLEN: 20,
            DECIMALS: 0,
            DATATYPE: "CHAR",
            INTTYPE: "C",
            REFTABLE: "",
            REFFIELD: "",
            PRECFIELD: "CSKT",
            AUTHORID: "",
            MEMORYID: "",
            LOGFLAG: "X",
            MASK: "",
            MASKLEN: "0000",
            CONVEXIT: "",
            HEADLEN: 20,
            SCRLEN1: 10,
            SCRLEN2: 15,
            SCRLEN3: 20,
            FIELDTEXT: "General Name",
            REPTEXT: "Name",
            SCRTEXT_S: "Name",
            SCRTEXT_M: "Name",
            SCRTEXT_L: "Name",
            KEYFLAG: "",
            LOWERCASE: "X",
            MAC: "",
            GENKEY: "",
            NOFORKEY: "",
            VALEXI: "",
            NOAUTHCH: "",
            SIGN: "",
            DYNPFLD: "X",
            F4AVAILABL: "",
            COMPTYPE: "E",
            LFIELDNAME: "KTEXT",
            LTRFLDDIS: "",
            BIDICTRLC: "",
            OUTPUTSTYLE: "00",
            NOHISTORY: "",
            AMPMFORMAT: "",
            PARVA: "",
            PARTXT: "",
          },
        ],
      },
    });
  });

  test("CT CSKS", async () => {
    expect.assertions(5);

    const shlpId = { type: "CT", name: "CSKS" };

    const sel = [["KOSTL", "I", "CP", "MS1200F*", ""]];

    const R = await VI.search(shlpId, sel);

    expect(R.shlpoutput).toEqual("DATBI");
    expect(R.maxrows_exceeded).toEqual(false);

    expect(R.search_result).toEqual([
      {
        KOKRS: "1000",
        KOSTL: "MS1200FK76",
        DATBI: "31.12.9999",
        KTEXT: "",
      },
      {
        KOKRS: "1000",
        KOSTL: "MS1200FO27",
        DATBI: "31.12.9999",
        KTEXT: "",
      },
      {
        KOKRS: "1000",
        KOSTL: "MS1200FO35",
        DATBI: "31.12.9999",
        KTEXT: "",
      },
      {
        KOKRS: "1000",
        KOSTL: "MS1200FO37",
        DATBI: "31.12.9999",
        KTEXT: "",
      },
      {
        KOKRS: "1000",
        KOSTL: "MS1200FO49",
        DATBI: "31.12.9999",
        KTEXT: "",
      },
      {
        KOKRS: "1000",
        KOSTL: "MS1200FO50",
        DATBI: "31.12.9999",
        KTEXT: "",
      },
    ]);

    expect(R.headers).toEqual([
      {
        field: "DATBI",
        len: 8,
        abaptype: "DATS",
        title: "to",
        text_align: "left",
        position: "",
      },
      {
        field: "KOKRS",
        len: 4,
        abaptype: "CHAR",
        title: "COAr",
        text_align: "left",
        position: "",
      },
      {
        field: "KOSTL",
        len: 10,
        abaptype: "CHAR",
        title: "Cost Ctr",
        text_align: "left",
        position: "",
      },
      {
        field: "KTEXT",
        len: 20,
        abaptype: "CHAR",
        title: "Name",
        text_align: "left",
        position: "",
      },
    ]);

    expect(R.desc).toEqual([
      {
        TABNAME: "CSKS",
        FIELDNAME: "KOKRS",
        LANGU: "E",
        POSITION: "0002",
        OFFSET: "000006",
        DOMNAME: "CACCD",
        ROLLNAME: "KOKRS",
        CHECKTABLE: "TKA01",
        LENG: "000004",
        INTLEN: "000008",
        OUTPUTLEN: "000004",
        DECIMALS: "000000",
        DATATYPE: "CHAR",
        INTTYPE: "C",
        REFTABLE: "",
        REFFIELD: "",
        PRECFIELD: "CSKS",
        AUTHORID: "",
        MEMORYID: "CAC",
        LOGFLAG: "X",
        MASK: "",
        MASKLEN: "0000",
        CONVEXIT: "",
        HEADLEN: "04",
        SCRLEN1: "10",
        SCRLEN2: "15",
        SCRLEN3: "20",
        FIELDTEXT: "Controlling Area",
        REPTEXT: "COAr",
        SCRTEXT_S: "CO Area",
        SCRTEXT_M: "CO Area",
        SCRTEXT_L: "Controlling Area",
        KEYFLAG: "X",
        LOWERCASE: "",
        MAC: "",
        GENKEY: "",
        NOFORKEY: "",
        VALEXI: "",
        NOAUTHCH: "",
        SIGN: "",
        DYNPFLD: "X",
        F4AVAILABL: "X",
        COMPTYPE: "E",
        LFIELDNAME: "KOKRS",
        LTRFLDDIS: "",
        BIDICTRLC: "",
        OUTPUTSTYLE: "00",
        NOHISTORY: "",
        AMPMFORMAT: "",
      },
      {
        TABNAME: "CSKS",
        FIELDNAME: "KOSTL",
        LANGU: "E",
        POSITION: "0003",
        OFFSET: "000014",
        DOMNAME: "KOSTL",
        ROLLNAME: "KOSTL",
        CHECKTABLE: "",
        LENG: "000010",
        INTLEN: "000020",
        OUTPUTLEN: "000010",
        DECIMALS: "000000",
        DATATYPE: "CHAR",
        INTTYPE: "C",
        REFTABLE: "",
        REFFIELD: "",
        PRECFIELD: "CSKS",
        AUTHORID: "",
        MEMORYID: "KOS",
        LOGFLAG: "X",
        MASK: "",
        MASKLEN: "0000",
        CONVEXIT: "ALPHA",
        HEADLEN: "10",
        SCRLEN1: "10",
        SCRLEN2: "15",
        SCRLEN3: "20",
        FIELDTEXT: "Cost Center",
        REPTEXT: "Cost Ctr",
        SCRTEXT_S: "Cost Ctr",
        SCRTEXT_M: "Cost Center",
        SCRTEXT_L: "Cost Center",
        KEYFLAG: "X",
        LOWERCASE: "",
        MAC: "X",
        GENKEY: "",
        NOFORKEY: "",
        VALEXI: "",
        NOAUTHCH: "",
        SIGN: "",
        DYNPFLD: "X",
        F4AVAILABL: "X",
        COMPTYPE: "E",
        LFIELDNAME: "KOSTL",
        LTRFLDDIS: "",
        BIDICTRLC: "",
        OUTPUTSTYLE: "00",
        NOHISTORY: "",
        AMPMFORMAT: "",
      },
      {
        TABNAME: "CSKS",
        FIELDNAME: "DATBI",
        LANGU: "E",
        POSITION: "0001",
        OFFSET: "000034",
        DOMNAME: "DATUM",
        ROLLNAME: "DATBI",
        CHECKTABLE: "",
        LENG: "000008",
        INTLEN: "000016",
        OUTPUTLEN: "000010",
        DECIMALS: "000000",
        DATATYPE: "DATS",
        INTTYPE: "D",
        REFTABLE: "",
        REFFIELD: "",
        PRECFIELD: "CSKS",
        AUTHORID: "",
        MEMORYID: "",
        LOGFLAG: "X",
        MASK: "",
        MASKLEN: "0000",
        CONVEXIT: "",
        HEADLEN: "10",
        SCRLEN1: "10",
        SCRLEN2: "15",
        SCRLEN3: "20",
        FIELDTEXT: "Valid To Date",
        REPTEXT: "to",
        SCRTEXT_S: "to",
        SCRTEXT_M: "Valid To",
        SCRTEXT_L: "Valid To",
        KEYFLAG: "X",
        LOWERCASE: "",
        MAC: "",
        GENKEY: "",
        NOFORKEY: "",
        VALEXI: "",
        NOAUTHCH: "",
        SIGN: "",
        DYNPFLD: "X",
        F4AVAILABL: "X",
        COMPTYPE: "E",
        LFIELDNAME: "DATBI",
        LTRFLDDIS: "",
        BIDICTRLC: "",
        OUTPUTSTYLE: "00",
        NOHISTORY: "",
        AMPMFORMAT: "",
      },
      {
        TABNAME: "CSKT",
        FIELDNAME: "KTEXT",
        LANGU: "E",
        POSITION: "0004",
        OFFSET: "000050",
        DOMNAME: "TEXT20",
        ROLLNAME: "KTEXT",
        CHECKTABLE: "",
        LENG: "000020",
        INTLEN: "000040",
        OUTPUTLEN: "000020",
        DECIMALS: "000000",
        DATATYPE: "CHAR",
        INTTYPE: "C",
        REFTABLE: "",
        REFFIELD: "",
        PRECFIELD: "CSKT",
        AUTHORID: "",
        MEMORYID: "",
        LOGFLAG: "X",
        MASK: "",
        MASKLEN: "0000",
        CONVEXIT: "",
        HEADLEN: "20",
        SCRLEN1: "10",
        SCRLEN2: "15",
        SCRLEN3: "20",
        FIELDTEXT: "General Name",
        REPTEXT: "Name",
        SCRTEXT_S: "Name",
        SCRTEXT_M: "Name",
        SCRTEXT_L: "Name",
        KEYFLAG: "X",
        LOWERCASE: "X",
        MAC: "",
        GENKEY: "",
        NOFORKEY: "",
        VALEXI: "",
        NOAUTHCH: "",
        SIGN: "",
        DYNPFLD: "X",
        F4AVAILABL: "",
        COMPTYPE: "E",
        LFIELDNAME: "KTEXT",
        LTRFLDDIS: "",
        BIDICTRLC: "",
        OUTPUTSTYLE: "00",
        NOHISTORY: "",
        AMPMFORMAT: "",
      },
    ]);
  });

  test("CT T501 CAPS employee group descriptor", async () => {
    expect.assertions(1);

    const shlpId = { type: "CT", name: "T501" };

    const desc = await VI.getShlpDescriptor(shlpId);

    expect(desc).toMatchObject({
      "CT T501": {
        INTDESCR: {
          ISSIMPLE: "X",
          HOTKEY: "",
          SELMTYPE: "",
          SELMETHOD: "T501",
          TEXTTAB: "",
          SELMEXIT: "",
          DIALOGTYPE: "D",
          DDLANGUAGE: "",
          DDTEXT: "",
          DIALOGINFO: "X",
          F4STATE: "",
          TABNAME: "",
          FIELDNAME: "",
          TITLE: "",
          HISTORY: "",
          HANDLE: 0,
          AUTOSUGGEST: "",
          FUZZY_SEARCH: "",
          FUZZY_SIMILARITY: "0.0",
        },
        SCRLENMAX: 20,
        SHLPOUTPUT: "PERSG",
        ALLOUTPUTS: [],
        FIELDDESCR: [
          {
            TABNAME: "T501",
            FIELDNAME: "PERSG",
            LANGU: "E",
            POSITION: 1,
            OFFSET: 6,
            DOMNAME: "PERSG",
            ROLLNAME: "PERSG",
            CHECKTABLE: "",
            LENG: 1,
            INTLEN: 2,
            OUTPUTLEN: 1,
            DECIMALS: 0,
            DATATYPE: "CHAR",
            INTTYPE: "C",
            REFTABLE: "",
            REFFIELD: "",
            PRECFIELD: "T501",
            AUTHORID: "",
            MEMORYID: "PRG",
            LOGFLAG: "X",
            MASK: "",
            MASKLEN: "0000",
            CONVEXIT: "",
            HEADLEN: 5,
            SCRLEN1: 10,
            SCRLEN2: 12,
            SCRLEN3: 20,
            FIELDTEXT: "Employee Group",
            REPTEXT: "EEGrp",
            SCRTEXT_S: "EE group",
            SCRTEXT_M: "EE group",
            SCRTEXT_L: "Employee group",
            KEYFLAG: "X",
            LOWERCASE: "",
            MAC: "",
            GENKEY: "",
            NOFORKEY: "",
            VALEXI: "",
            NOAUTHCH: "",
            SIGN: "",
            DYNPFLD: "X",
            F4AVAILABL: "",
            COMPTYPE: "E",
            LFIELDNAME: "PERSG",
            LTRFLDDIS: "",
            BIDICTRLC: "",
            OUTPUTSTYLE: "00",
            NOHISTORY: "",
            AMPMFORMAT: "",
            TOPSHLPNAM: "",
            TOPSHLPFLD: "",
            PARVA: "",
            PARTXT: "",
          },
        ],
      },
    });
  });

  test.skip("CT T501 CAPS employee group", async () => {
    //expect.assertions(1);

    const shlpId = { type: "CT", name: "T501" };

    const R = await VI.search(shlpId, []);

    //expect(R.search_result) // no data in test system
  });
});
