const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/gamestock"
);

const companyNameSymbolSeed = [
  {
  "Company Name": "iShares MSCI All Country Asia Information Technology Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI All Country Asia Information Technology Index Fund",
  "Symbol": "AAIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Airlines Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Airlines Group, Inc. - Common Stock",
  "Symbol": "AAL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atlantic American Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Atlantic American Corporation - Common Stock",
  "Symbol": "AAME",
  "Test Issue": "N"
  },
  {
  "Company Name": "Applied Optoelectronics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Applied Optoelectronics, Inc. - Common Stock",
  "Symbol": "AAOI",
  "Test Issue": "N"
  },
  {
  "Company Name": "AAON, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AAON, Inc. - Common Stock",
  "Symbol": "AAON",
  "Test Issue": "N"
  },
  {
  "Company Name": "Apple Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Apple Inc. - Common Stock",
  "Symbol": "AAPL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Avalanche Biotechnologies, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Avalanche Biotechnologies, Inc. - Common Stock",
  "Symbol": "AAVL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atlas Air Worldwide Holdings",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Atlas Air Worldwide Holdings - Common Stock",
  "Symbol": "AAWW",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI All Country Asia ex Japan Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI All Country Asia ex Japan Index Fund",
  "Symbol": "AAXJ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aoxin Tianli Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Aoxin Tianli Group, Inc. - Common Shares",
  "Symbol": "ABAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ABAXIS, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ABAXIS, Inc. - Common Stock",
  "Symbol": "ABAX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ameris Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ameris Bancorp - Common Stock",
  "Symbol": "ABCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cambium Learning Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cambium Learning Group, Inc. - Common Stock",
  "Symbol": "ABCD",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Advisory Board Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Advisory Board Company - Common Stock",
  "Symbol": "ABCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Anchor BanCorp Wisconsin Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Anchor BanCorp Wisconsin Inc. - Common Stock",
  "Symbol": "ABCW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alcentra Capital Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alcentra Capital Corp. - Common Stock",
  "Symbol": "ABDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Abengoa, S.A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Abengoa, S.A. - American Depositary Shares",
  "Symbol": "ABGB",
  "Test Issue": "N"
  },
  {
  "Company Name": "ARCA biopharma, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ARCA biopharma, Inc. - Common Stock",
  "Symbol": "ABIO",
  "Test Issue": "N"
  },
  {
  "Company Name": "ABIOMED, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ABIOMED, Inc. - Common Stock",
  "Symbol": "ABMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Autobytel Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Autobytel Inc. - Common Stock",
  "Symbol": "ABTL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Abengoa Yield plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Abengoa Yield plc - Ordinary Shares",
  "Symbol": "ABY",
  "Test Issue": "N"
  },
  {
  "Company Name": "ACADIA Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ACADIA Pharmaceuticals Inc. - Common Stock",
  "Symbol": "ACAD",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Capital, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Capital, Ltd. - Common Stock",
  "Symbol": "ACAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Arctic Cat Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Arctic Cat Inc. - Common Stock",
  "Symbol": "ACAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aceto Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Aceto Corporation - Common Stock",
  "Symbol": "ACET",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atlantic Coast Financial Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Atlantic Coast Financial Corporation - Common Stock",
  "Symbol": "ACFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Acorn Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Acorn Energy, Inc. - Common Stock",
  "Symbol": "ACFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Arch Capital Group Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Arch Capital Group Ltd. - Common Stock",
  "Symbol": "ACGL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Acadia Healthcare Company, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Acadia Healthcare Company, Inc. - Common Stock",
  "Symbol": "ACHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Achillion Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Achillion Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ACHN",
  "Test Issue": "N"
  },
  {
  "Company Name": "ACI Worldwide, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ACI Worldwide, Inc. - Common Stock",
  "Symbol": "ACIW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Axcelis Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Axcelis Technologies, Inc. - Common Stock",
  "Symbol": "ACLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "ACNB Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ACNB Corporation - Common Stock",
  "Symbol": "ACNB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Acorda Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Acorda Therapeutics, Inc. - Common Stock",
  "Symbol": "ACOR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Active Power, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Active Power, Inc. - Common Stock",
  "Symbol": "ACPW",
  "Test Issue": "N"
  },
  {
  "Company Name": "AcelRx Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "AcelRx Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ACRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Capital Senior Floating, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Capital Senior Floating, Ltd. - Common Stock",
  "Symbol": "ACSF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Acasti Pharma, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Acasti Pharma, Inc. - Class A Common Stock",
  "Symbol": "ACST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Actua Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Actua Corporation - Common Stock",
  "Symbol": "ACTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Acacia Research Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Acacia Research Corporation - Common Stock",
  "Symbol": "ACTG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Actions Semiconductor Co., Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Actions Semiconductor Co., Ltd. - American Depositary Shares, each representing Six Ordinary Shares",
  "Symbol": "ACTS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Acura Pharmaceuticals, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Acura Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ACUR",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI ACWI Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI ACWI Index Fund",
  "Symbol": "ACWI",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI ACWI ex US Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI ACWI ex US Index Fund",
  "Symbol": "ACWX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Acxiom Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Acxiom Corporation - Common Stock",
  "Symbol": "ACXM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Authentidate Holding Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Authentidate Holding Corp. - Common Stock",
  "Symbol": "ADAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Adobe Systems Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Adobe Systems Incorporated - Common Stock",
  "Symbol": "ADBE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Adept Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Adept Technology, Inc. - Common Stock",
  "Symbol": "ADEP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Advanced Emissions Solutions, Inc.",
  "Financial Status": "E",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Advanced Emissions Solutions, Inc. - Common Stock",
  "Symbol": "ADES",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alcobra Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Alcobra Ltd. - Ordinary Shares",
  "Symbol": "ADHD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Analog Devices, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Analog Devices, Inc. - Common Stock",
  "Symbol": "ADI",
  "Test Issue": "N"
  },
  {
  "Company Name": "ADMA Biologics Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ADMA Biologics Inc - Common Stock",
  "Symbol": "ADMA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Adamis Pharmaceuticals Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Adamis Pharmaceuticals Corporation - Common Stock",
  "Symbol": "ADMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Adamas Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Adamas Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ADMS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Audience, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Audience, Inc. - Common Stock",
  "Symbol": "ADNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Automatic Data Processing, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Automatic Data Processing, Inc. - Common Stock",
  "Symbol": "ADP",
  "Test Issue": "N"
  },
  {
  "Company Name": "BLDRS Asia 50 ADR Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BLDRS Asia 50 ADR Index Fund",
  "Symbol": "ADRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "BLDRS Developed Markets 100 ADR Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BLDRS Developed Markets 100 ADR Index Fund",
  "Symbol": "ADRD",
  "Test Issue": "N"
  },
  {
  "Company Name": "BLDRS Emerging Markets 50 ADR Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BLDRS Emerging Markets 50 ADR Index Fund",
  "Symbol": "ADRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "BLDRS Europe 100 ADR Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BLDRS Europe 100 ADR Index Fund",
  "Symbol": "ADRU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Autodesk, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Autodesk, Inc. - Common Stock",
  "Symbol": "ADSK",
  "Test Issue": "N"
  },
  {
  "Company Name": "ADTRAN, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ADTRAN, Inc. - Common Stock",
  "Symbol": "ADTN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Addus HomeCare Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Addus HomeCare Corporation - Common Stock",
  "Symbol": "ADUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Advent Software, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Advent Software, Inc. - Common Stock",
  "Symbol": "ADVS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Advaxis, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Advaxis, Inc. - Common Stock",
  "Symbol": "ADXS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Advaxis, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Advaxis, Inc. - Warrants",
  "Symbol": "ADXSW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aegion Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Aegion Corp - Class A Common Stock",
  "Symbol": "AEGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aegerion Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Aegerion Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "AEGR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aehr Test Systems",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Aehr Test Systems - Common Stock",
  "Symbol": "AEHR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Advanced Energy Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Advanced Energy Industries, Inc. - Common Stock",
  "Symbol": "AEIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "AEP Industries Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AEP Industries Inc. - Common Stock",
  "Symbol": "AEPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aerie Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Aerie Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "AERI",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Electric Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "American Electric Technologies, Inc. - Common Stock",
  "Symbol": "AETI",
  "Test Issue": "N"
  },
  {
  "Company Name": "ADDvantage Technologies Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ADDvantage Technologies Group, Inc. - Common Stock",
  "Symbol": "AEY",
  "Test Issue": "N"
  },
  {
  "Company Name": "AEterna Zentaris Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "AEterna Zentaris Inc. - Common Stock",
  "Symbol": "AEZS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Almost Family Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Almost Family Inc - Common Stock",
  "Symbol": "AFAM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Athens Bancshares Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Athens Bancshares Corporation - Common Stock",
  "Symbol": "AFCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Affymetrix, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Affymetrix, Inc. - Common Stock",
  "Symbol": "AFFX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atlas Financial Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Atlas Financial Holdings, Inc. - Ordinary Shares",
  "Symbol": "AFH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Affimed N.V.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Affimed N.V. - Common Stock",
  "Symbol": "AFMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alliance Fiber Optic Products, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Alliance Fiber Optic Products, Inc. - Common Stock",
  "Symbol": "AFOP",
  "Test Issue": "N"
  },
  {
  "Company Name": "AmTrust Financial Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AmTrust Financial Services, Inc. - Common Stock",
  "Symbol": "AFSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Agenus Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Agenus Inc. - Common Stock",
  "Symbol": "AGEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Argo Group International Holdings, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Argo Group International Holdings, Ltd. - Common Stock",
  "Symbol": "AGII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Argo Group International Holdings, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Argo Group International Holdings, Ltd. - 6.5% Senior Notes Due 2042",
  "Symbol": "AGIIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Agios Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Agios Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "AGIO",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Capital Agency Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Capital Agency Corp. - Common Stock",
  "Symbol": "AGNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Capital Agency Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Capital Agency Corp. - Depositary Shares representing 1/1000th Series B Preferred Stock",
  "Symbol": "AGNCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Capital Agency Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Capital Agency Corp. - Cumulative Preferred Series A",
  "Symbol": "AGNCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Barclays U.S. Aggregate Bond Negative Duration Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Barclays U.S. Aggregate Bond Negative Duration Fund",
  "Symbol": "AGND",
  "Test Issue": "N"
  },
  {
  "Company Name": "Agile Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Agile Therapeutics, Inc. - Common Stock",
  "Symbol": "AGRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Applied Genetic Technologies Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Applied Genetic Technologies Corporation - Common Stock",
  "Symbol": "AGTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Agilysys, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Agilysys, Inc. - Common Stock",
  "Symbol": "AGYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Barclays U.S. Aggregate Bond Zero Duration Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Barclays U.S. Aggregate Bond Zero Duration Fund",
  "Symbol": "AGZD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alliance Holdings GP, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alliance Holdings GP, L.P. - Common Units Representing Limited Partner Interests",
  "Symbol": "AHGP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Allied Healthcare Products, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Allied Healthcare Products, Inc. - Common Stock",
  "Symbol": "AHPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Altra Industrial Motion Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Altra Industrial Motion Corp. - Common Stock",
  "Symbol": "AIMC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Apollo Investment Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Apollo Investment Corporation - Closed End Fund",
  "Symbol": "AINV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alliance HealthCare Services, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Alliance HealthCare Services, Inc. - Common Stock",
  "Symbol": "AIQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Air Methods Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Air Methods Corporation - Common Stock",
  "Symbol": "AIRM",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust RBA American Industrial Renaissance ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust RBA American Industrial Renaissance ETF",
  "Symbol": "AIRR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Air T, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Air T, Inc. - Common Stock",
  "Symbol": "AIRT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aixtron SE",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Aixtron SE - American Depositary Shares, each representing one Ordinary Share",
  "Symbol": "AIXG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Akamai Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Akamai Technologies, Inc. - Common Stock",
  "Symbol": "AKAM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Achaogen, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Achaogen, Inc. - Common Stock",
  "Symbol": "AKAO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Akebia Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Akebia Therapeutics, Inc. - Common Stock",
  "Symbol": "AKBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Akers Biosciences Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Akers Biosciences Inc - Common Stock",
  "Symbol": "AKER",
  "Test Issue": "N"
  },
  {
  "Company Name": "Akorn, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Akorn, Inc. - Common Stock",
  "Symbol": "AKRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alico, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alico, Inc. - Common Stock",
  "Symbol": "ALCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alder BioPharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Alder BioPharmaceuticals, Inc. - Common Stock",
  "Symbol": "ALDR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aldeyra Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Aldeyra Therapeutics, Inc. - Common Stock",
  "Symbol": "ALDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Align Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Align Technology, Inc. - Common Stock",
  "Symbol": "ALGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Allegiant Travel Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Allegiant Travel Company - Common Stock",
  "Symbol": "ALGT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alimera Sciences, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Alimera Sciences, Inc. - Common Stock",
  "Symbol": "ALIM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alkermes plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alkermes plc - Ordinary Shares",
  "Symbol": "ALKS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alliance Bancorp, Inc. of Pennsylvania",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Alliance Bancorp, Inc. of Pennsylvania - Common Stock",
  "Symbol": "ALLB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Allot Communications Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Allot Communications Ltd. - Ordinary Shares",
  "Symbol": "ALLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alnylam Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alnylam Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ALNY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Analogic Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Analogic Corporation - Common Stock",
  "Symbol": "ALOG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Astro",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Astro-Med, Inc. - Common Stock",
  "Symbol": "ALOT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alliqua, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Alliqua, Inc. - Common Stock",
  "Symbol": "ALQA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alaska Communications Systems Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alaska Communications Systems Group, Inc. - Common Stock",
  "Symbol": "ALSK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Altera Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Altera Corporation - Common Stock",
  "Symbol": "ALTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alexza Pharmaceuticals, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Alexza Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ALXA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alexion Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alexion Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ALXN",
  "Test Issue": "N"
  },
  {
  "Company Name": "AMAG Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AMAG Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "AMAG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Applied Materials, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Applied Materials, Inc. - Common Stock",
  "Symbol": "AMAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ambarella, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ambarella, Inc. - Ordinary Shares",
  "Symbol": "AMBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ambac Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ambac Financial Group, Inc. - Common Stock",
  "Symbol": "AMBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ambac Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ambac Financial Group, Inc. - Warrants",
  "Symbol": "AMBCW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Applied Micro Circuits Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Applied Micro Circuits Corporation - Common Stock",
  "Symbol": "AMCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Andatee China Marine Fuel Services Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Andatee China Marine Fuel Services Corporation - Common Stock",
  "Symbol": "AMCF",
  "Test Issue": "N"
  },
  {
  "Company Name": "AirMedia Group Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AirMedia Group Inc - American Depositary Shares, each representing two ordinary shares",
  "Symbol": "AMCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "AMC Networks Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AMC Networks Inc. - Class A Common Stock",
  "Symbol": "AMCX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Advanced Micro Devices, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Advanced Micro Devices, Inc. - Common Stock",
  "Symbol": "AMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amedica Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Amedica Corporation - Common Stock",
  "Symbol": "AMDA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amedisys Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amedisys Inc - Common Stock",
  "Symbol": "AMED",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amgen Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amgen Inc. - Common Stock",
  "Symbol": "AMGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Independence Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "American Independence Corp. - Common Stock",
  "Symbol": "AMIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amkor Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amkor Technology, Inc. - Common Stock",
  "Symbol": "AMKR",
  "Test Issue": "N"
  },
  {
  "Company Name": "American National Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American National Bankshares, Inc. - Common Stock",
  "Symbol": "AMNB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Allied Motion Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Allied Motion Technologies, Inc. - Common Stock",
  "Symbol": "AMOT",
  "Test Issue": "N"
  },
  {
  "Company Name": "America Movil, S.A.B. de C.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "America Movil, S.A.B. de C.V. - American Depositary Shares, each representing 20 A Shares",
  "Symbol": "AMOV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amphastar Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amphastar Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "AMPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "American River Bankshares",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American River Bankshares - Common Stock",
  "Symbol": "AMRB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Albany Molecular Research, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Albany Molecular Research, Inc. - Common Stock",
  "Symbol": "AMRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "A",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "A-Mark Precious Metals, Inc. - Common Stock",
  "Symbol": "AMRK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amarin Corporation plc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Amarin Corporation plc - American Depositary Shares, each representing one Ordinary Share",
  "Symbol": "AMRN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amyris, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amyris, Inc. - Common Stock",
  "Symbol": "AMRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Superconductor Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Superconductor Corporation - Common Stock",
  "Symbol": "AMSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "AMERISAFE, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AMERISAFE, Inc. - Common Stock",
  "Symbol": "AMSF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amsurg Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amsurg Corp. - Common Stock",
  "Symbol": "AMSG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amsurg Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amsurg Corp. - 5.250% Mandatory Convertible Preferred Stock, Series A-1",
  "Symbol": "AMSGP",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Software, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Software, Inc. - Class A Common Stock",
  "Symbol": "AMSWA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aemetis, Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Aemetis, Inc - Common Stock",
  "Symbol": "AMTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Woodmark Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Woodmark Corporation - Common Stock",
  "Symbol": "AMWD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amazon.com, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amazon.com, Inc. - Common Stock",
  "Symbol": "AMZN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Anacor Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Anacor Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ANAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ANADIGICS, Inc.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ANADIGICS, Inc. - Common Stock",
  "Symbol": "ANAD",
  "Test Issue": "N"
  },
  {
  "Company Name": "American National Insurance Company",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American National Insurance Company - Common Stock",
  "Symbol": "ANAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Anchor Bancorp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Anchor Bancorp - Common Stock",
  "Symbol": "ANCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Caresource Holdings Inc",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "American Caresource Holdings Inc - Common Stock",
  "Symbol": "ANCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Access National Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Access National Corporation - Common Stock",
  "Symbol": "ANCX",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Andersons, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Andersons, Inc. - Common Stock",
  "Symbol": "ANDE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Angie's List, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Angie's List, Inc. - Common Stock",
  "Symbol": "ANGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "AngioDynamics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AngioDynamics, Inc. - Common Stock",
  "Symbol": "ANGO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Anika Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Anika Therapeutics Inc. - Common Stock",
  "Symbol": "ANIK",
  "Test Issue": "N"
  },
  {
  "Company Name": "ANI Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ANI Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ANIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "ANSYS, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ANSYS, Inc. - Common Stock",
  "Symbol": "ANSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Anthera Pharmaceuticals, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Anthera Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ANTH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sphere 3D Corp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sphere 3D Corp - Common Shares",
  "Symbol": "ANY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alpha and Omega Semiconductor Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alpha and Omega Semiconductor Limited - Common Shares",
  "Symbol": "AOSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Apco Oil and Gas International Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Apco Oil and Gas International Inc. - Ordinary Shares",
  "Symbol": "APAGF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Applied DNA Sciences Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Applied DNA Sciences Inc - Common Stock",
  "Symbol": "APDN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Applied DNA Sciences Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Applied DNA Sciences Inc - Warrant",
  "Symbol": "APDNW",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Public Education, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Public Education, Inc. - Common Stock",
  "Symbol": "APEI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Apogee Enterprises, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Apogee Enterprises, Inc. - Common Stock",
  "Symbol": "APOG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Apollo Education Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Apollo Education Group, Inc. - Class A Common Stock",
  "Symbol": "APOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Venaxis, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Venaxis, Inc. - Common Stock",
  "Symbol": "APPY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Apricus Biosciences, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Apricus Biosciences, Inc - Common Stock",
  "Symbol": "APRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alto Palermo S.A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alto Palermo S.A. - American Depository Shares, each representing forty shares of Common Stock",
  "Symbol": "APSA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aptose Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Aptose Biosciences, Inc. - Common Shares",
  "Symbol": "APTO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Asia Pacific Wire & Cable Corporation Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Asia Pacific Wire & Cable Corporation Limited - Common shares, Par value .01 per share",
  "Symbol": "APWC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aquinox Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Aquinox Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "AQXP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Accuray Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Accuray Incorporated - Common Stock",
  "Symbol": "ARAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "ArcBest Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ArcBest Corporation - Common Stock",
  "Symbol": "ARCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ares Capital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ares Capital Corporation - Closed End Fund",
  "Symbol": "ARCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Appliance Recycling Centers of America, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Appliance Recycling Centers of America, Inc. - Common Stock",
  "Symbol": "ARCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Realty Capital Properties, Inc.",
  "Financial Status": "E",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Realty Capital Properties, Inc. - Common Stock",
  "Symbol": "ARCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Realty Capital Properties, Inc.",
  "Financial Status": "E",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Realty Capital Properties, Inc. - 6.70% Series F Cumulative Redeemable Preferred Stock",
  "Symbol": "ARCPP",
  "Test Issue": "N"
  },
  {
  "Company Name": "ARC Group Worldwide, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ARC Group Worldwide, Inc. - Common Stock",
  "Symbol": "ARCW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aradigm Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Aradigm Corporation - Common Stock",
  "Symbol": "ARDM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ardelyx, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ardelyx, Inc. - Common Stock",
  "Symbol": "ARDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Approach Resources Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Approach Resources Inc. - Common Stock",
  "Symbol": "AREX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Argos Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Argos Therapeutics, Inc. - Common Stock",
  "Symbol": "ARGS",
  "Test Issue": "N"
  },
  {
  "Company Name": "ARIAD Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ARIAD Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ARIA",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Railcar Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Railcar Industries, Inc. - Common Stock",
  "Symbol": "ARII",
  "Test Issue": "N"
  },
  {
  "Company Name": "ARI Network Services, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ARI Network Services, Inc. - Common Stock",
  "Symbol": "ARIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ark Restaurants Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ark Restaurants Corp. - Common Stock",
  "Symbol": "ARKR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alliance Resource Partners, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alliance Resource Partners, L.P. - Common Units Representing Limited Partnership Interests",
  "Symbol": "ARLP",
  "Test Issue": "N"
  },
  {
  "Company Name": "ARM Holdings plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ARM Holdings plc - American Depositary Shares each representing 3 Ordinary Shares",
  "Symbol": "ARMH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Arena Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Arena Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ARNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Arrow Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Arrow Financial Corporation - Common Stock",
  "Symbol": "AROW",
  "Test Issue": "N"
  },
  {
  "Company Name": "ArQule, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ArQule, Inc. - Common Stock",
  "Symbol": "ARQL",
  "Test Issue": "N"
  },
  {
  "Company Name": "ARRIS Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ARRIS Group, Inc. - Common Stock",
  "Symbol": "ARRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Array BioPharma Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Array BioPharma Inc. - Common Stock",
  "Symbol": "ARRY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Artesian Resources Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Artesian Resources Corporation - Class A Non-Voting Common Stock",
  "Symbol": "ARTNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Art's",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Art's-Way Manufacturing Co., Inc. - Common Stock",
  "Symbol": "ARTW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Arotech Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Arotech Corporation - Common Stock",
  "Symbol": "ARTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aruba Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Aruba Networks, Inc. - Common Stock",
  "Symbol": "ARUN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Arrowhead Research Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Arrowhead Research Corporation - Common Stock",
  "Symbol": "ARWR",
  "Test Issue": "N"
  },
  {
  "Company Name": "ASB Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ASB Bancorp, Inc. - Common Stock",
  "Symbol": "ASBB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ameriana Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ameriana Bancorp - Common Stock",
  "Symbol": "ASBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ascent Capital Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ascent Capital Group, Inc. - Series A Common Stock",
  "Symbol": "ASCMA",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Science and Engineering, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Science and Engineering, Inc. - Common Stock",
  "Symbol": "ASEI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Asta Funding, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Asta Funding, Inc. - Common Stock",
  "Symbol": "ASFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Assembly Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Assembly Biosciences, Inc. - Common Stock",
  "Symbol": "ASMB",
  "Test Issue": "N"
  },
  {
  "Company Name": "ASM International N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ASM International N.V. - Common Shares",
  "Symbol": "ASMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "ASML Holding N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ASML Holding N.V. - ADS represents 1 ordinary share",
  "Symbol": "ASML",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ascena Retail Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ascena Retail Group, Inc. - Common Stock",
  "Symbol": "ASNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Altisource Portfolio Solutions S.A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Altisource Portfolio Solutions S.A. - Common Stock",
  "Symbol": "ASPS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Auspex Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Auspex Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ASPX",
  "Test Issue": "N"
  },
  {
  "Company Name": "AmeriServ Financial Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "AmeriServ Financial Inc. - Common Stock",
  "Symbol": "ASRV",
  "Test Issue": "N"
  },
  {
  "Company Name": "AmeriServ Financial Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "AmeriServ Financial Inc. - AmeriServ Financial Trust I - 8.45% Beneficial Unsecured Securities, Series A",
  "Symbol": "ASRVP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Astrotech Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Astrotech Corporation - Common Stock",
  "Symbol": "ASTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Astec Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Astec Industries, Inc. - Common Stock",
  "Symbol": "ASTE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ascent Solar Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ascent Solar Technologies, Inc. - Common Stock",
  "Symbol": "ASTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Asure Software Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Asure Software Inc - Common Stock",
  "Symbol": "ASUR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amtech Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amtech Systems, Inc. - Common Stock",
  "Symbol": "ASYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "ATA Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ATA Inc. - American Depositary Shares, each representing two common shares",
  "Symbol": "ATAI",
  "Test Issue": "N"
  },
  {
  "Company Name": "America First Multifamily Investors, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "America First Multifamily Investors, L.P. - Beneficial Unit Certificates (BUCs) representing Limited Partnership Interests",
  "Symbol": "ATAX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Astea International, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Astea International, Inc. - Common Stock",
  "Symbol": "ATEA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Alphatec Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Alphatec Holdings, Inc. - Common Stock",
  "Symbol": "ATEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "athenahealth, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "athenahealth, Inc. - Common Stock",
  "Symbol": "ATHN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Athersys, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Athersys, Inc. - Common Stock",
  "Symbol": "ATHX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atlanticus Holdings Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Atlanticus Holdings Corporation - Common Stock",
  "Symbol": "ATLC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ames National Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ames National Corporation - Common Stock",
  "Symbol": "ATLO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atmel Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Atmel Corporation - Common Stock",
  "Symbol": "ATML",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atlantic Tele",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Atlantic Tele-Network, Inc. - Common Stock",
  "Symbol": "ATNI",
  "Test Issue": "N"
  },
  {
  "Company Name": "API Technologies Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "API Technologies Corp. - Common Stock",
  "Symbol": "ATNY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atossa Genetics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Atossa Genetics Inc. - Common Stock",
  "Symbol": "ATOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Atara Biotherapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Atara Biotherapeutics, Inc. - Common Stock",
  "Symbol": "ATRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "AtriCure, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "AtriCure, Inc. - Common Stock",
  "Symbol": "ATRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ATRION Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ATRION Corporation - Common Stock",
  "Symbol": "ATRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "ATRM Holdings, Inc.",
  "Financial Status": "E",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ATRM Holdings, Inc. - Common Stock",
  "Symbol": "ATRM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Astronics Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Astronics Corporation - Common Stock",
  "Symbol": "ATRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Antares Pharma, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Antares Pharma, Inc. - Common Stock",
  "Symbol": "ATRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Air Transport Services Group, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Air Transport Services Group, Inc - Common Stock",
  "Symbol": "ATSG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Attunity Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Attunity Ltd. - Ordinary Shares",
  "Symbol": "ATTU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Activision Blizzard, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Activision Blizzard, Inc - Common Stock",
  "Symbol": "ATVI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Auburn National Bancorporation, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Auburn National Bancorporation, Inc. - Common Stock",
  "Symbol": "AUBN",
  "Test Issue": "N"
  },
  {
  "Company Name": "AudioCodes Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AudioCodes Ltd. - Ordinary Shares",
  "Symbol": "AUDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "AR Capital Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "AR Capital Acquisition Corp. - Common Stock",
  "Symbol": "AUMA",
  "Test Issue": "N"
  },
  {
  "Company Name": "AR Capital Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "AR Capital Acquisition Corp. - Units",
  "Symbol": "AUMAU",
  "Test Issue": "N"
  },
  {
  "Company Name": "AR Capital Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "AR Capital Acquisition Corp. - Warrants",
  "Symbol": "AUMAW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aurinia Pharmaceuticals Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Aurinia Pharmaceuticals Inc - Common Shares",
  "Symbol": "AUPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Auxilium Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Auxilium Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "AUXL",
  "Test Issue": "N"
  },
  {
  "Company Name": "AeroVironment, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AeroVironment, Inc. - Common Stock",
  "Symbol": "AVAV",
  "Test Issue": "N"
  },
  {
  "Company Name": "AVEO Pharmaceuticals, Inc.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AVEO Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "AVEO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Avago Technologies Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Avago Technologies Limited - Ordinary Shares",
  "Symbol": "AVGO",
  "Test Issue": "N"
  },
  {
  "Company Name": "A V Homes, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "A V Homes, Inc. - Common Stock",
  "Symbol": "AVHI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Avid Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Avid Technology, Inc. - Common Stock",
  "Symbol": "AVID",
  "Test Issue": "N"
  },
  {
  "Company Name": "Avanir Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Avanir Pharmaceuticals, Inc. - Class A Common Stock",
  "Symbol": "AVNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aviat Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Aviat Networks, Inc. - Common Stock",
  "Symbol": "AVNW",
  "Test Issue": "N"
  },
  {
  "Company Name": "HomeAway, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "HomeAway, Inc. - Common Stock",
  "Symbol": "AWAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aware, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Aware, Inc. - Common Stock",
  "Symbol": "AWRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Abraxas Petroleum Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Abraxas Petroleum Corporation - Common Stock",
  "Symbol": "AXAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Accelerate Diagnostics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Accelerate Diagnostics, Inc. - Common Stock",
  "Symbol": "AXDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "AxoGen, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "AxoGen, Inc. - Common Stock",
  "Symbol": "AXGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI All Country Asia ex Japan Small Cap Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI All Country Asia ex Japan Small Cap Index Fund",
  "Symbol": "AXJS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Axion Power International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Axion Power International, Inc. - Common Stock",
  "Symbol": "AXPW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Axion Power International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Axion Power International, Inc. - Series A Warrants",
  "Symbol": "AXPWW",
  "Test Issue": "N"
  },
  {
  "Company Name": "AXT Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "AXT Inc - Common Stock",
  "Symbol": "AXTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aspen Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Aspen Technology, Inc. - Common Stock",
  "Symbol": "AZPN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Natus Medical Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Natus Medical Incorporated - Common Stock",
  "Symbol": "BABY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Diversified Restaurant Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Diversified Restaurant Holdings, Inc. - Common Stock",
  "Symbol": "BAGR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Books",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Books-A-Million, Inc. - Common Stock",
  "Symbol": "BAMM",
  "Test Issue": "N"
  },
  {
  "Company Name": "BancFirst Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BancFirst Corporation - Common Stock",
  "Symbol": "BANF",
  "Test Issue": "N"
  },
  {
  "Company Name": "BancFirst Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BancFirst Corporation - 7.2% Cumulative Trust Preferred Securities",
  "Symbol": "BANFP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Banner Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Banner Corporation - Common Stock",
  "Symbol": "BANR",
  "Test Issue": "N"
  },
  {
  "Company Name": "StoneCastle Financial Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "StoneCastle Financial Corp - Common Stock",
  "Symbol": "BANX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bioanalytical Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Bioanalytical Systems, Inc. - Common Stock",
  "Symbol": "BASI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bed Bath & Beyond Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bed Bath & Beyond Inc. - Common Stock",
  "Symbol": "BBBY",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioShares Biotechnology Clinical Trials Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BioShares Biotechnology Clinical Trials Fund",
  "Symbol": "BBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "BBCN Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BBCN Bancorp, Inc. - Common Stock",
  "Symbol": "BBCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "BreitBurn Energy Partners, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BreitBurn Energy Partners, L.P. - Common Units Representing Limited Partnership",
  "Symbol": "BBEP",
  "Test Issue": "N"
  },
  {
  "Company Name": "BreitBurn Energy Partners, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BreitBurn Energy Partners, L.P. - 8.25% Series A Cumulative Redeemable Perpetual Preferred Units",
  "Symbol": "BBEPP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Beasley Broadcast Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Beasley Broadcast Group, Inc. - Class A Common Stock",
  "Symbol": "BBGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blue Earth, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Blue Earth, Inc. - Common Stock",
  "Symbol": "BBLU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bridge Capital Holdings",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bridge Capital Holdings - Common Stock",
  "Symbol": "BBNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Black Box Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Black Box Corporation - Common Stock",
  "Symbol": "BBOX",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioShares Biotechnology Products Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BioShares Biotechnology Products Fund",
  "Symbol": "BBP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bravo Brio Restaurant Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bravo Brio Restaurant Group, Inc. - Common Stock",
  "Symbol": "BBRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "BlackBerry Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BlackBerry Limited - Common Stock",
  "Symbol": "BBRY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barrett Business Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Barrett Business Services, Inc. - Common Stock",
  "Symbol": "BBSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "BCB Bancorp, Inc. (NJ)",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BCB Bancorp, Inc. (NJ) - Common Stock",
  "Symbol": "BCBP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Brainstorm Cell Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Brainstorm Cell Therapeutics Inc. - Common Stock",
  "Symbol": "BCLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "B Communications Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "B Communications Ltd. - Ordinary Shares",
  "Symbol": "BCOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blucora, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Blucora, Inc. - Common Stock",
  "Symbol": "BCOR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Brightcove Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Brightcove Inc. - Common Stock",
  "Symbol": "BCOV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Balchem Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Balchem Corporation - Common Stock",
  "Symbol": "BCPC",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioCryst Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BioCryst Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "BCRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Boulder Brands, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Boulder Brands, Inc. - Common Stock",
  "Symbol": "BDBD",
  "Test Issue": "N"
  },
  {
  "Company Name": "BDCA Venture, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "BDCA Venture, Inc. - Common Stock",
  "Symbol": "BDCV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Black Diamond, Inc.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Black Diamond, Inc. - Common Stock",
  "Symbol": "BDE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bridge Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bridge Bancorp, Inc. - Common Stock",
  "Symbol": "BDGE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Birner Dental Management Services, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Birner Dental Management Services, Inc. - Common Stock",
  "Symbol": "BDMS",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioDelivery Sciences International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "BioDelivery Sciences International, Inc. - Common Stock",
  "Symbol": "BDSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioTelemetry, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BioTelemetry, Inc. - Common Stock",
  "Symbol": "BEAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "B/E Aerospace, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "B/E Aerospace, Inc. - Common Stock",
  "Symbol": "BEAV",
  "Test Issue": "N"
  },
  {
  "Company Name": "bebe stores, inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "bebe stores, inc. - Common Stock",
  "Symbol": "BEBE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Beacon Roofing Supply, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Beacon Roofing Supply, Inc. - Common Stock",
  "Symbol": "BECN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bel Fuse Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bel Fuse Inc. - Class A Common Stock",
  "Symbol": "BELFA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bel Fuse Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bel Fuse Inc. - Class B Common Stock",
  "Symbol": "BELFB",
  "Test Issue": "N"
  },
  {
  "Company Name": "BankFinancial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BankFinancial Corporation - Common Stock",
  "Symbol": "BFIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "BGC Partners, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BGC Partners, Inc. - Class A Common Stock",
  "Symbol": "BGCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Big 5 Sporting Goods Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Big 5 Sporting Goods Corporation - Common Stock",
  "Symbol": "BGFV",
  "Test Issue": "N"
  },
  {
  "Company Name": "BG Medicine, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "BG Medicine, Inc. - Common Stock",
  "Symbol": "BGMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blue Hills Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Blue Hills Bancorp, Inc. - Common Stock",
  "Symbol": "BHBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "ProShares Ultra Nasdaq Biotechnology",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ProShares Ultra Nasdaq Biotechnology",
  "Symbol": "BIB",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust BICK Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust BICK Index Fund",
  "Symbol": "BICK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Baidu, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Baidu, Inc. - American Depositary Shares, each representing one tenth Class A ordinary share",
  "Symbol": "BIDU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Biogen Idec Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Biogen Idec Inc. - Common Stock",
  "Symbol": "BIIB",
  "Test Issue": "N"
  },
  {
  "Company Name": "BIND Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BIND Therapeutics, Inc. - Common Stock",
  "Symbol": "BIND",
  "Test Issue": "N"
  },
  {
  "Company Name": "Biocept, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Biocept, Inc. - Common Stock",
  "Symbol": "BIOC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Biodel Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Biodel Inc. - Common Stock",
  "Symbol": "BIOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Biolase, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Biolase, Inc. - Common Stock",
  "Symbol": "BIOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioScrip, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BioScrip, Inc. - Common Stock",
  "Symbol": "BIOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Actuate Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Actuate Corporation - Common Stock",
  "Symbol": "BIRT",
  "Test Issue": "N"
  },
  {
  "Company Name": "ProShares UltraShort Nasdaq Biotechnology",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ProShares UltraShort Nasdaq Biotechnology",
  "Symbol": "BIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "BJ's Restaurants, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BJ's Restaurants, Inc. - Common Stock",
  "Symbol": "BJRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "BlackRock Kelso Capital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BlackRock Kelso Capital Corporation - Common Stock",
  "Symbol": "BKCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blueknight Energy Partners L.P., L.L.C.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Blueknight Energy Partners L.P., L.L.C. - Common Units representing Limited Partner Interests",
  "Symbol": "BKEP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blueknight Energy Partners L.P., L.L.C.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Blueknight Energy Partners L.P., L.L.C. - Series A Preferred Units",
  "Symbol": "BKEPP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bank Mutual Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bank Mutual Corporation - Common Stock",
  "Symbol": "BKMU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bank of South Carolina Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Bank of South Carolina Corp. - Common Stock",
  "Symbol": "BKSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Bank of Kentucky Financial Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Bank of Kentucky Financial Corp. - Common Stock",
  "Symbol": "BKYF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bellicum Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Bellicum Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "BLCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ballard Power Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ballard Power Systems, Inc. - Common Shares",
  "Symbol": "BLDP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Builders FirstSource, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Builders FirstSource, Inc. - Common Stock",
  "Symbol": "BLDR",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioLife Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "BioLife Solutions, Inc. - Common Stock",
  "Symbol": "BLFS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bridgeline Digital, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Bridgeline Digital, Inc. - Common Stock",
  "Symbol": "BLIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blackbaud, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Blackbaud, Inc. - Common Stock",
  "Symbol": "BLKB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bloomin' Brands, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bloomin' Brands, Inc. - Common Stock",
  "Symbol": "BLMN",
  "Test Issue": "N"
  },
  {
  "Company Name": "BSB Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "BSB Bancorp, Inc. - Common Stock",
  "Symbol": "BLMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioLineRx Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "BioLineRx Ltd. - American Depositary Shares",
  "Symbol": "BLRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "bluebird bio, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "bluebird bio, Inc. - Common Stock",
  "Symbol": "BLUE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Boulevard Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Boulevard Acquisition Corp. - Common Stock",
  "Symbol": "BLVD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Boulevard Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Boulevard Acquisition Corp. - Units",
  "Symbol": "BLVDU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Boulevard Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Boulevard Acquisition Corp. - Warrants",
  "Symbol": "BLVDW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bank of Marin Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Bank of Marin Bancorp - Common Stock",
  "Symbol": "BMRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioMarin Pharmaceutical Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BioMarin Pharmaceutical Inc. - Common Stock",
  "Symbol": "BMRN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bryn Mawr Bank Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bryn Mawr Bank Corporation - Common Stock",
  "Symbol": "BMTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Beneficial Mutual Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Beneficial Mutual Bancorp, Inc. - Common Stock",
  "Symbol": "BNCL",
  "Test Issue": "N"
  },
  {
  "Company Name": "BNC Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "BNC Bancorp - Common Stock",
  "Symbol": "BNCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Total International Bond ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Total International Bond ETF",
  "Symbol": "BNDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Benefitfocus, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Benefitfocus, Inc. - Common Stock",
  "Symbol": "BNFT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bonso Electronics International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Bonso Electronics International, Inc. - Common Stock",
  "Symbol": "BNSO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bob Evans Farms, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bob Evans Farms, Inc. - Common Stock",
  "Symbol": "BOBE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bank of Commerce Holdings (CA)",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Bank of Commerce Holdings (CA) - Common Stock",
  "Symbol": "BOCH",
  "Test Issue": "N"
  },
  {
  "Company Name": "BofI Holding, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BofI Holding, Inc. - Common Stock",
  "Symbol": "BOFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "BOK Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BOK Financial Corporation - Common Stock",
  "Symbol": "BOKF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bona Film Group Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bona Film Group Limited - American Depositary Shares",
  "Symbol": "BONA",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Bon",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Bon-Ton Stores, Inc. - Common Stock",
  "Symbol": "BONT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dynamic Materials Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dynamic Materials Corporation - Common Stock",
  "Symbol": "BOOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "B.O.S. Better Online Solutions",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "B.O.S. Better Online Solutions - Ordinary Shares",
  "Symbol": "BOSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Biota Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Biota Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "BOTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bank of the James Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Bank of the James Financial Group, Inc. - Common Stock",
  "Symbol": "BOTJ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Boston Private Financial Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Boston Private Financial Holdings, Inc. - Common Stock",
  "Symbol": "BPFH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Boston Private Financial Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Boston Private Financial Holdings, Inc. - Depositary Shares representing 1/40th Interest in a Share of 6.95% Non-Cumulative Perpetual Preferred Stock, Series D",
  "Symbol": "BPFHP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Boston Private Financial Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Boston Private Financial Holdings, Inc. - Warrants to purchase 1 share of common stock @ $8.00/share",
  "Symbol": "BPFHW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Popular, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Popular, Inc. - Common Stock",
  "Symbol": "BPOP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Popular, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Popular, Inc. - Popular Capital Trust II - 6.125% Cumulative Monthly Income Trust Preferred Securities",
  "Symbol": "BPOPM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Popular, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Popular, Inc. - Popular Capital Trust I -6.70% Cumulative Monthly Income Trust Preferred Securities",
  "Symbol": "BPOPN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bio",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Bio-Path Holdings, Inc. - Common Stock",
  "Symbol": "BPTH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Brocade Communications Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Brocade Communications Systems, Inc. - Common Stock",
  "Symbol": "BRCD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Broadcom Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Broadcom Corporation - Class A Common Stock",
  "Symbol": "BRCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Borderfree, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Borderfree, Inc. - Common Stock",
  "Symbol": "BRDR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Craft Brew Alliance, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Craft Brew Alliance, Inc. - Common Stock",
  "Symbol": "BREW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bridgford Foods Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Bridgford Foods Corporation - Common Stock",
  "Symbol": "BRID",
  "Test Issue": "N"
  },
  {
  "Company Name": "Brookline Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Brookline Bancorp, Inc. - Common Stock",
  "Symbol": "BRKL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bruker Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bruker Corporation - Common Stock",
  "Symbol": "BRKR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Brooks Automation, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Brooks Automation, Inc. - Common Stock",
  "Symbol": "BRKS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bio",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bio-Reference Laboratories, Inc. - Common Stock",
  "Symbol": "BRLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "BSD Medical Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "BSD Medical Corporation - Common Stock",
  "Symbol": "BSDM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bassett Furniture Industries, Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bassett Furniture Industries, Incorporated - Common Stock",
  "Symbol": "BSET",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bear State Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Bear State Financial, Inc. - Common Stock",
  "Symbol": "BSF",
  "Test Issue": "N"
  },
  {
  "Company Name": "BroadSoft, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "BroadSoft, Inc. - Common Stock",
  "Symbol": "BSFT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Biostar Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Biostar Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "BSPM",
  "Test Issue": "N"
  },
  {
  "Company Name": "BSQUARE Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BSQUARE Corporation - Common Stock",
  "Symbol": "BSQR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sierra Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sierra Bancorp - Common Stock",
  "Symbol": "BSRR",
  "Test Issue": "N"
  },
  {
  "Company Name": "BioSpecifics Technologies Corp",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BioSpecifics Technologies Corp - Common Stock",
  "Symbol": "BSTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "BTU International, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BTU International, Inc. - Common Stock",
  "Symbol": "BTUI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Burcon NutraScience Corp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Burcon NutraScience Corp - Ordinary Shares",
  "Symbol": "BUR",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Busey Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Busey Corporation - Common Stock",
  "Symbol": "BUSE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bazaarvoice, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bazaarvoice, Inc. - Common Stock",
  "Symbol": "BV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cordia Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cordia Bancorp Inc. - Common Stock",
  "Symbol": "BVA",
  "Test Issue": "N"
  },
  {
  "Company Name": "BroadVision, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BroadVision, Inc. - Common Stock",
  "Symbol": "BVSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Broadwind Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Broadwind Energy, Inc. - Common Stock",
  "Symbol": "BWEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bankwell Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Bankwell Financial Group, Inc. - Common Stock",
  "Symbol": "BWFG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Baldwin & Lyons, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Baldwin & Lyons, Inc. - Class A (voting) Common Stock",
  "Symbol": "BWINA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Baldwin & Lyons, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Baldwin & Lyons, Inc. - Class B (nonvoting) Common Stock",
  "Symbol": "BWINB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Buffalo Wild Wings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Buffalo Wild Wings, Inc. - Common Stock",
  "Symbol": "BWLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bay Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Bay Bancorp, Inc. - Common Stock",
  "Symbol": "BYBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Broadway Financial Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Broadway Financial Corporation - Common Stock",
  "Symbol": "BYFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Baylake Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Baylake Corp - Common Stock",
  "Symbol": "BYLK",
  "Test Issue": "N"
  },
  {
  "Company Name": "CA Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CA Inc. - Common Stock",
  "Symbol": "CA",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Automotive Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China Automotive Systems, Inc. - Common Stock",
  "Symbol": "CAAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Camden National Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Camden National Corporation - Common Stock",
  "Symbol": "CAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cascade Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cascade Bancorp - Common Stock",
  "Symbol": "CACB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Acceptance Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Credit Acceptance Corporation - Common Stock",
  "Symbol": "CACC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chart Acquisition Corp.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Chart Acquisition Corp. - Common Stock",
  "Symbol": "CACG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chart Acquisition Corp.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Chart Acquisition Corp. - Units",
  "Symbol": "CACGU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chart Acquisition Corp.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Chart Acquisition Corp. - Warrants",
  "Symbol": "CACGW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cache, Inc.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cache, Inc. - Common Stock",
  "Symbol": "CACH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Caesars Acquisition Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Caesars Acquisition Company - Class A Common Stock",
  "Symbol": "CACQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Advanced Construction Materials Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China Advanced Construction Materials Group, Inc. - Common Stock",
  "Symbol": "CADC",
  "Test Issue": "N"
  },
  {
  "Company Name": "DT Asia Investments Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "DT Asia Investments Limited - Ordinary Shares",
  "Symbol": "CADT",
  "Test Issue": "N"
  },
  {
  "Company Name": "DT Asia Investments Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "DT Asia Investments Limited - Right",
  "Symbol": "CADTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "DT Asia Investments Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "DT Asia Investments Limited - Unit",
  "Symbol": "CADTU",
  "Test Issue": "N"
  },
  {
  "Company Name": "DT Asia Investments Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "DT Asia Investments Limited - Warrant",
  "Symbol": "CADTW",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Cheesecake Factory Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Cheesecake Factory Incorporated - Common Stock",
  "Symbol": "CAKE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calithera Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calithera Biosciences, Inc. - Common Stock",
  "Symbol": "CALA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Callidus Software, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Callidus Software, Inc. - Common Stock",
  "Symbol": "CALD",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Auto Logistics Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "China Auto Logistics Inc. - Common Stock",
  "Symbol": "CALI",
  "Test Issue": "N"
  },
  {
  "Company Name": "magicJack VocalTec Ltd",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "magicJack VocalTec Ltd - Ordinary Shares",
  "Symbol": "CALL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cal",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cal-Maine Foods, Inc. - Common Stock",
  "Symbol": "CALM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cambridge Capital Acquisition Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cambridge Capital Acquisition Corporation - Common Stock",
  "Symbol": "CAMB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cambridge Capital Acquisition Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cambridge Capital Acquisition Corporation - Unit",
  "Symbol": "CAMBU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cambridge Capital Acquisition Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cambridge Capital Acquisition Corporation - Warrant",
  "Symbol": "CAMBW",
  "Test Issue": "N"
  },
  {
  "Company Name": "CalAmp Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CalAmp Corp. - Common Stock",
  "Symbol": "CAMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Camtek Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Camtek Ltd. - Ordinary Shares",
  "Symbol": "CAMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capnia, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Capnia, Inc. - Common Stock",
  "Symbol": "CAPN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capnia, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Capnia, Inc. - Series A Warrant",
  "Symbol": "CAPNW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Avis Budget Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Avis Budget Group, Inc. - Common Stock",
  "Symbol": "CAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cara Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cara Therapeutics, Inc. - Common Stock",
  "Symbol": "CARA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Carbonite, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Carbonite, Inc. - Common Stock",
  "Symbol": "CARB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Carolina Financial Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Carolina Financial Corporation - Common Stock",
  "Symbol": "CARO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Carolina Trust Bank",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Carolina Trust Bank - Common Stock",
  "Symbol": "CART",
  "Test Issue": "N"
  },
  {
  "Company Name": "Carver Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Carver Bancorp, Inc. - Common Stock",
  "Symbol": "CARV",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ Global Auto Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ Global Auto Index Fund",
  "Symbol": "CARZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Meta Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Meta Financial Group, Inc. - Common Stock",
  "Symbol": "CASH",
  "Test Issue": "N"
  },
  {
  "Company Name": "CASI Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CASI Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "CASI",
  "Test Issue": "N"
  },
  {
  "Company Name": "CAS Medical Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CAS Medical Systems, Inc. - Common Stock",
  "Symbol": "CASM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cass Information Systems, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cass Information Systems, Inc - Common Stock",
  "Symbol": "CASS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Caseys General Stores, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Caseys General Stores, Inc. - Common Stock",
  "Symbol": "CASY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cardtronics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cardtronics, Inc. - Common Stock",
  "Symbol": "CATM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cathay General Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cathay General Bancorp - Common Stock",
  "Symbol": "CATY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cathay General Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cathay General Bancorp - Warrant",
  "Symbol": "CATYW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cavium, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cavium, Inc. - Common Stock",
  "Symbol": "CAVM",
  "Test Issue": "N"
  },
  {
  "Company Name": "China BAK Battery, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "China BAK Battery, Inc. - Common Stock",
  "Symbol": "CBAK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Colony Bankcorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Colony Bankcorp, Inc. - Common Stock",
  "Symbol": "CBAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "CymaBay Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CymaBay Therapeutics Inc. - Common Stock",
  "Symbol": "CBAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "CBD Energy Limited",
  "Financial Status": "K",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CBD Energy Limited - Ordinary Shares",
  "Symbol": "CBDE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capital Bank Financial Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Capital Bank Financial Corp. - Class A Common Stock",
  "Symbol": "CBF",
  "Test Issue": "N"
  },
  {
  "Company Name": "CB Financial Services, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "CB Financial Services, Inc. - Common Stock",
  "Symbol": "CBFV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Community Bank Shares of Indiana, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Community Bank Shares of Indiana, Inc. - Common Stock",
  "Symbol": "CBIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cleveland BioLabs, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cleveland BioLabs, Inc. - Common Stock",
  "Symbol": "CBLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cellular Biomedicine Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cellular Biomedicine Group, Inc. - Common Stock",
  "Symbol": "CBMG",
  "Test Issue": "N"
  },
  {
  "Company Name": "CombiMatrix Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CombiMatrix Corporation - Common Stock",
  "Symbol": "CBMX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cape Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cape Bancorp, Inc. - Common Stock",
  "Symbol": "CBNJ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chicopee Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Chicopee Bancorp, Inc. - Common Stock",
  "Symbol": "CBNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "CBOE Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CBOE Holdings, Inc. - Common Stock",
  "Symbol": "CBOE",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Biologic Products, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "China Biologic Products, Inc. - Common Stock",
  "Symbol": "CBPO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cracker Barrel Old Country Store, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cracker Barrel Old Country Store, Inc. - Common Stock",
  "Symbol": "CBRL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Columbia Laboratories, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Columbia Laboratories, Inc. - Common Stock",
  "Symbol": "CBRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Commerce Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Commerce Bancshares, Inc. - Common Stock",
  "Symbol": "CBSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Commerce Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Commerce Bancshares, Inc. - Depositary Shares, each representing a 1/1000th interest of 6.00% Series B Non-Cumulative Perpetual Preferred Stock",
  "Symbol": "CBSHP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cubist Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cubist Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "CBST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cubist Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cubist Pharmaceuticals, Inc. - Contingent Value Right",
  "Symbol": "CBSTZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capital City Bank Group",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Capital City Bank Group - Common Stock",
  "Symbol": "CCBG",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Ceramics Co., Ltd.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "China Ceramics Co., Ltd. - Common Stock",
  "Symbol": "CCCL",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Commercial Credit, Inc.",
  "Financial Status": "E",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China Commercial Credit, Inc. - Common Stock",
  "Symbol": "CCCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "ChinaCache International Holdings Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ChinaCache International Holdings Ltd. - American Depositary Shares",
  "Symbol": "CCIH",
  "Test Issue": "N"
  },
  {
  "Company Name": "CSI Compressco LP",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CSI Compressco LP - common units",
  "Symbol": "CCLP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cabot Microelectronics Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cabot Microelectronics Corporation - Common Stock",
  "Symbol": "CCMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "CNB Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CNB Financial Corporation - Common Stock",
  "Symbol": "CCNE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cogent Communications Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cogent Communications Holdings, Inc. - Common Stock",
  "Symbol": "CCOI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cross Country Healthcare, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cross Country Healthcare, Inc. - Common Stock",
  "Symbol": "CCRN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Concurrent Computer Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Concurrent Computer Corporation - Common Stock",
  "Symbol": "CCUR",
  "Test Issue": "N"
  },
  {
  "Company Name": "ChemoCentryx, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ChemoCentryx, Inc. - Common Stock",
  "Symbol": "CCXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Compass EMP U S EQ Income 100 Enhanced Volatility Weighted Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Compass EMP U S EQ Income 100 Enhanced Volatility Weighted Fund",
  "Symbol": "CDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "CDK Global, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CDK Global, Inc. - Common Stock",
  "Symbol": "CDK",
  "Test Issue": "N"
  },
  {
  "Company Name": "CareDx, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "CareDx, Inc. - Common Stock",
  "Symbol": "CDNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cadence Design Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cadence Design Systems, Inc. - Common Stock",
  "Symbol": "CDNS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Clean Diesel Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Clean Diesel Technologies, Inc. - Common Stock",
  "Symbol": "CDTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "CDW Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CDW Corporation - Common Stock",
  "Symbol": "CDW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Codexis, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Codexis, Inc. - Common Stock",
  "Symbol": "CDXS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cadiz, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cadiz, Inc. - Common Stock",
  "Symbol": "CDZI",
  "Test Issue": "N"
  },
  {
  "Company Name": "CECO Environmental Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CECO Environmental Corp. - Common Stock",
  "Symbol": "CECE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Career Education Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Career Education Corporation - Common Stock",
  "Symbol": "CECO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Celgene Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Celgene Corporation - Common Stock",
  "Symbol": "CELG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Celgene Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Celgene Corporation - Contingent Value Right",
  "Symbol": "CELGZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chembio Diagnostics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Chembio Diagnostics, Inc. - Common Stock",
  "Symbol": "CEMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cempra, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cempra, Inc. - Common Stock",
  "Symbol": "CEMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Central Garden & Pet Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Central Garden & Pet Company - Common Stock",
  "Symbol": "CENT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Central Garden & Pet Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Central Garden & Pet Company - Class A Common Stock Nonvoting",
  "Symbol": "CENTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Century Aluminum Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Century Aluminum Company - Common Stock",
  "Symbol": "CENX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ceres, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ceres, Inc. - Common Stock",
  "Symbol": "CERE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cerner Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cerner Corporation - Common Stock",
  "Symbol": "CERN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cerus Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cerus Corporation - Common Stock",
  "Symbol": "CERS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cerulean Pharma Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cerulean Pharma Inc. - Common Stock",
  "Symbol": "CERU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Central European Media Enterprises Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Central European Media Enterprises Ltd. - Class A Common Stock",
  "Symbol": "CETV",
  "Test Issue": "N"
  },
  {
  "Company Name": "CEVA, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CEVA, Inc. - Common Stock",
  "Symbol": "CEVA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Compass EMP US 500 Volatility Weighted Index ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Compass EMP US 500 Volatility Weighted Index ETF",
  "Symbol": "CFA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Central Federal Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Central Federal Corporation - Common Stock",
  "Symbol": "CFBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "C&F Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "C&F Financial Corporation - Common Stock",
  "Symbol": "CFFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capitol Federal Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Capitol Federal Financial, Inc. - Common Stock",
  "Symbol": "CFFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calamos Focus Growth ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Calamos Focus Growth ETF",
  "Symbol": "CFGE",
  "Test Issue": "N"
  },
  {
  "Company Name": "California First National Bancorp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "California First National Bancorp - Common Stock",
  "Symbol": "CFNB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cardinal Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cardinal Financial Corporation - Common Stock",
  "Symbol": "CFNL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Compass EMP US 500 Enhanced Volatility Weighted Index ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Compass EMP US 500 Enhanced Volatility Weighted Index ETF",
  "Symbol": "CFO",
  "Test Issue": "N"
  },
  {
  "Company Name": "ContraFect Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ContraFect Corporation - Common Stock",
  "Symbol": "CFRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "ContraFect Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ContraFect Corporation - Warrant",
  "Symbol": "CFRXW",
  "Test Issue": "N"
  },
  {
  "Company Name": "ContraFect Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ContraFect Corporation - Warrant",
  "Symbol": "CFRXZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Carlyle Group L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Carlyle Group L.P. - Common Units",
  "Symbol": "CG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Compugen Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Compugen Ltd. - Ordinary Shares",
  "Symbol": "CGEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cancer Genetics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cancer Genetics, Inc. - Common Stock",
  "Symbol": "CGIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cognex Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cognex Corporation - Common Stock",
  "Symbol": "CGNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calamos Global Total Return Fund",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calamos Global Total Return Fund - Common Stock",
  "Symbol": "CGO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Comstock Holding Companies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Comstock Holding Companies, Inc. - Class A Common Stock",
  "Symbol": "CHCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "City Holding Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "City Holding Company - Common Stock",
  "Symbol": "CHCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Churchill Downs, Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Churchill Downs, Incorporated - Common Stock",
  "Symbol": "CHDN",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Chefs' Warehouse, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Chefs' Warehouse, Inc. - Common Stock",
  "Symbol": "CHEF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cheviot Financial Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cheviot Financial Corp - Common Stock",
  "Symbol": "CHEV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chemical Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Chemical Financial Corporation - Common Stock",
  "Symbol": "CHFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Charter Financial Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Charter Financial Corp. - Common Stock",
  "Symbol": "CHFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calamos Convertible Opportunities and Income Fund",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calamos Convertible Opportunities and Income Fund - Common Stock",
  "Symbol": "CHI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cherokee Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cherokee Inc. - Common Stock",
  "Symbol": "CHKE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Check Point Software Technologies Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Check Point Software Technologies Ltd. - Ordinary Shares",
  "Symbol": "CHKP",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Housing & Land Development, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China Housing & Land Development, Inc. - Common Stock",
  "Symbol": "CHLN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chemung Financial Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Chemung Financial Corp - Common Stock",
  "Symbol": "CHMG",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Natural Resources, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China Natural Resources, Inc. - Common Stock",
  "Symbol": "CHNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Gerui Advanced Materials Group Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "China Gerui Advanced Materials Group Limited - Ordinary Shares",
  "Symbol": "CHOP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Coherus BioSciences, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Coherus BioSciences, Inc. - Common Stock",
  "Symbol": "CHRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "C.H. Robinson Worldwide, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "C.H. Robinson Worldwide, Inc. - Common Stock",
  "Symbol": "CHRW",
  "Test Issue": "N"
  },
  {
  "Company Name": "CHS Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CHS Inc - Class B Reset Rate Cumulative Redeemable Preferred Stock, Series 3",
  "Symbol": "CHSCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "CHS Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CHS Inc - Preferred Class B Series 2 Reset Rate",
  "Symbol": "CHSCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "CHS Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CHS Inc - Class B Cumulative Redeemable Preferred Stock",
  "Symbol": "CHSCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "CHS Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CHS Inc - 8%  Cumulative Redeemable Preferred Stock",
  "Symbol": "CHSCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Charter Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Charter Communications, Inc. - Class A Common Stock",
  "Symbol": "CHTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chuy's Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Chuy's Holdings, Inc. - Common Stock",
  "Symbol": "CHUY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calamos Global Dynamic Income Fund",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calamos Global Dynamic Income Fund - Common Stock",
  "Symbol": "CHW",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree China Dividend Ex",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree China Dividend Ex-Financials Fund",
  "Symbol": "CHXF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calamos Convertible and High Income Fund",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calamos Convertible and High Income Fund - Common Stock",
  "Symbol": "CHY",
  "Test Issue": "N"
  },
  {
  "Company Name": "ChyronHego Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ChyronHego Corporation - Common Stock",
  "Symbol": "CHYR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cinedigm Corp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cinedigm Corp - Class A Common Stock",
  "Symbol": "CIDM",
  "Test Issue": "N"
  },
  {
  "Company Name": "CIFC Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CIFC Corp. - Common Stock",
  "Symbol": "CIFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cimatron, Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cimatron, Limited - Ordinary Shares",
  "Symbol": "CIMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cincinnati Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cincinnati Financial Corporation - Common Stock",
  "Symbol": "CINF",
  "Test Issue": "N"
  },
  {
  "Company Name": "CIS Acquisition Ltd.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CIS Acquisition Ltd. - Warrant",
  "Symbol": "CISAW",
  "Test Issue": "N"
  },
  {
  "Company Name": "CNinsure Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CNinsure Inc. - American depositary shares, each representing 20 ordinary shares",
  "Symbol": "CISG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Compass EMP Developed 500 Enhanced Volatility Weighted Index ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Compass EMP Developed 500 Enhanced Volatility Weighted Index ETF",
  "Symbol": "CIZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Citizens Holding Company",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Citizens Holding Company - Common Stock",
  "Symbol": "CIZN",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Jo",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China Jo-Jo Drugstores, Inc. - Common Stock",
  "Symbol": "CJJD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Carmike Cinemas, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Carmike Cinemas, Inc. - Common Stock",
  "Symbol": "CKEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ClickSoftware Technologies Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ClickSoftware Technologies Ltd. - Ordinary Shares",
  "Symbol": "CKSW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capitol Acquisition Corp. II",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Capitol Acquisition Corp. II - Common Stock",
  "Symbol": "CLAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capitol Acquisition Corp. II",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Capitol Acquisition Corp. II - Unit",
  "Symbol": "CLACU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capitol Acquisition Corp. II",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Capitol Acquisition Corp. II - Warrant",
  "Symbol": "CLACW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Carolina Bank Holdings Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Carolina Bank Holdings Inc. - Common Stock",
  "Symbol": "CLBH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Collectors Universe, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Collectors Universe, Inc. - Common Stock",
  "Symbol": "CLCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Celladon Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Celladon Corporation - Common Stock",
  "Symbol": "CLDN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Celldex Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Celldex Therapeutics, Inc. - Common Stock",
  "Symbol": "CLDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Clearfield, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Clearfield, Inc. - Common Stock",
  "Symbol": "CLFD",
  "Test Issue": "N"
  },
  {
  "Company Name": "ClearSign Combustion Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ClearSign Combustion Corporation - Common Stock",
  "Symbol": "CLIR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calamos Asset Management, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calamos Asset Management, Inc. - Class A Common Stock",
  "Symbol": "CLMS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calumet Specialty Products Partners, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calumet Specialty Products Partners, L.P. - Common units representing limited partner interests",
  "Symbol": "CLMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Clean Energy Fuels Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Clean Energy Fuels Corp. - Common Stock",
  "Symbol": "CLNE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cleantech Solutions International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cleantech Solutions International, Inc. - Common Stock",
  "Symbol": "CLNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cellectar Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cellectar Biosciences, Inc. - Common Stock",
  "Symbol": "CLRB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cellectar Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cellectar Biosciences, Inc. - Warrants",
  "Symbol": "CLRBW",
  "Test Issue": "N"
  },
  {
  "Company Name": "ClearOne, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ClearOne, Inc. - Common Stock",
  "Symbol": "CLRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "CollabRx, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CollabRx, Inc. - Common Stock",
  "Symbol": "CLRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Celsion Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Celsion Corporation - Common Stock",
  "Symbol": "CLSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Celsus Therapeutics Plc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Celsus Therapeutics Plc - American Depositary Shares",
  "Symbol": "CLTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Town Sports International Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Town Sports International Holdings, Inc. - Common Stock",
  "Symbol": "CLUB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Clovis Oncology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Clovis Oncology, Inc. - Common Stock",
  "Symbol": "CLVS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Euro Tech Holdings Company Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Euro Tech Holdings Company Limited - Ordinary Shares",
  "Symbol": "CLWT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Columbus McKinnon Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Columbus McKinnon Corporation - Common Stock",
  "Symbol": "CMCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Comcast Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Comcast Corporation - Class A Common Stock",
  "Symbol": "CMCSA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Comcast Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Comcast Corporation - Class A Special Common Stock",
  "Symbol": "CMCSK",
  "Test Issue": "N"
  },
  {
  "Company Name": "CIM Commercial Trust Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "CIM Commercial Trust Corporation - Common Stock",
  "Symbol": "CMCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "CME Group Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CME Group Inc. - Class A Common Stock",
  "Symbol": "CME",
  "Test Issue": "N"
  },
  {
  "Company Name": "CM Finance Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CM Finance Inc - Common Stock",
  "Symbol": "CMFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Mobile Games and Entertainment Group Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "China Mobile Games and Entertainment Group Limited - American Depositary Shares",
  "Symbol": "CMGE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cumulus Media Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cumulus Media Inc. - Common Stock",
  "Symbol": "CMLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cimpress N.V",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cimpress N.V - Ordinary Shares (The Netherlands)",
  "Symbol": "CMPR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chimerix, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Chimerix, Inc. - Common Stock",
  "Symbol": "CMRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "CMS Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CMS Bancorp, Inc. - common stock",
  "Symbol": "CMSB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Comtech Telecommunications Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Comtech Telecommunications Corp. - Common Stock",
  "Symbol": "CMTL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Conatus Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Conatus Pharmaceuticals Inc. - Common Stock",
  "Symbol": "CNAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Century Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Century Bancorp, Inc. - Class A Common Stock",
  "Symbol": "CNBKA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Concert Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Concert Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "CNCE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Coronado Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Coronado Biosciences, Inc. - Common Stock",
  "Symbol": "CNDO",
  "Test Issue": "N"
  },
  {
  "Company Name": "ChinaNet Online Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ChinaNet Online Holdings, Inc. - Common Stock",
  "Symbol": "CNET",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Information Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "China Information Technology, Inc. - Ordinary Shares",
  "Symbol": "CNIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "CB Pharma Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CB Pharma Acquisition Corp. - Ordinary Shares",
  "Symbol": "CNLM",
  "Test Issue": "N"
  },
  {
  "Company Name": "CB Pharma Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CB Pharma Acquisition Corp. - Rights",
  "Symbol": "CNLMR",
  "Test Issue": "N"
  },
  {
  "Company Name": "CB Pharma Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CB Pharma Acquisition Corp. - Units",
  "Symbol": "CNLMU",
  "Test Issue": "N"
  },
  {
  "Company Name": "CB Pharma Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CB Pharma Acquisition Corp. - Warrants",
  "Symbol": "CNLMW",
  "Test Issue": "N"
  },
  {
  "Company Name": "CONMED Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CONMED Corporation - Common Stock",
  "Symbol": "CNMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "ConnectOne Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ConnectOne Bancorp, Inc. - Common Stock",
  "Symbol": "CNOB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Comverse Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Comverse Inc. - Common Stock",
  "Symbol": "CNSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Consolidated Communications Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Consolidated Communications Holdings, Inc. - Common Stock",
  "Symbol": "CNSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "China TechFaith Wireless Communication Technology Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "China TechFaith Wireless Communication Technology Limited - American Depositary Shares, each representing 15 ordinary shares",
  "Symbol": "CNTF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Century Casinos, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Century Casinos, Inc. - Common Stock",
  "Symbol": "CNTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cnova N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cnova N.V. - Ordinary Shares",
  "Symbol": "CNV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Connecture, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Connecture, Inc. - Common Stock",
  "Symbol": "CNXR",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Yida Holding, Co.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China Yida Holding, Co. - Common Stock",
  "Symbol": "CNYD",
  "Test Issue": "N"
  },
  {
  "Company Name": "CommunityOne Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CommunityOne Bancorp - Common Stock",
  "Symbol": "COB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Colonial Financial Services, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Colonial Financial Services, Inc. - Common Stock",
  "Symbol": "COBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "CoBiz Financial Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CoBiz Financial Inc. - Common Stock",
  "Symbol": "COBZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Corinthian Colleges, Inc.",
  "Financial Status": "H",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Corinthian Colleges, Inc. - Common Stock",
  "Symbol": "COCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Coherent, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Coherent, Inc. - Common Stock",
  "Symbol": "COHR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cohu, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cohu, Inc. - Common Stock",
  "Symbol": "COHU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Coca",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Coca-Cola Bottling Co. Consolidated - Common Stock",
  "Symbol": "COKE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Columbia Banking System, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Columbia Banking System, Inc. - Common Stock",
  "Symbol": "COLB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Columbia Sportswear Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Columbia Sportswear Company - Common Stock",
  "Symbol": "COLM",
  "Test Issue": "N"
  },
  {
  "Company Name": "CommScope Holding Company, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CommScope Holding Company, Inc. - Common Stock",
  "Symbol": "COMM",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares Commodities Select Strategy ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares Commodities Select Strategy ETF",
  "Symbol": "COMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "CyrusOne Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CyrusOne Inc - Common Stock",
  "Symbol": "CONE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Conn's, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Conn's, Inc. - Common Stock",
  "Symbol": "CONN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Majesco Entertainment Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Majesco Entertainment Company - Common Stock",
  "Symbol": "COOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Core",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Core-Mark Holding Company, Inc. - Common Stock",
  "Symbol": "CORE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Corium International, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Corium International, Inc. - Common Stock",
  "Symbol": "CORI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Corcept Therapeutics Incorporated",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Corcept Therapeutics Incorporated - Common Stock",
  "Symbol": "CORT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cosi, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cosi, Inc. - Common Stock",
  "Symbol": "COSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Costco Wholesale Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Costco Wholesale Corporation - Common Stock",
  "Symbol": "COST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Covisint Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Covisint Corporation - Common Stock",
  "Symbol": "COVS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cowen Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cowen Group, Inc. - Class A Common Stock",
  "Symbol": "COWN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cowen Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cowen Group, Inc. - 8.25% Senior Notes due 2021",
  "Symbol": "COWNL",
  "Test Issue": "N"
  },
  {
  "Company Name": "CounterPath Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CounterPath Corporation - Common Stock",
  "Symbol": "CPAH",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Shengda Packaging Group, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China Shengda Packaging Group, Inc. - Common Stock",
  "Symbol": "CPGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Canterbury Park Holding Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Canterbury Park Holding Corporation - Common Stock",
  "Symbol": "CPHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "CEPHEID",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CEPHEID - Common Stock",
  "Symbol": "CPHD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cipher Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cipher Pharmaceuticals Inc. - Common Shares",
  "Symbol": "CPHR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cumberland Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cumberland Pharmaceuticals Inc. - Common Stock",
  "Symbol": "CPIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capella Education Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Capella Education Company - Common Stock",
  "Symbol": "CPLA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capital Product Partners L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Capital Product Partners L.P. - common units representing limited partner interests",
  "Symbol": "CPLP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Copart, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Copart, Inc. - Common Stock",
  "Symbol": "CPRT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Catalyst Pharmaceutical Partners, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Catalyst Pharmaceutical Partners, Inc. - Common Stock",
  "Symbol": "CPRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Computer Programs and Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Computer Programs and Systems, Inc. - Common Stock",
  "Symbol": "CPSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Consumer Portfolio Services, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Consumer Portfolio Services, Inc. - Common Stock",
  "Symbol": "CPSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capstone Turbine Corporation",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Capstone Turbine Corporation - Common Stock",
  "Symbol": "CPST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capitala Finance Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Capitala Finance Corp. - Common Stock",
  "Symbol": "CPTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Celator Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Celator Pharmaceuticals Inc. - Common Stock",
  "Symbol": "CPXX",
  "Test Issue": "N"
  },
  {
  "Company Name": "CRA International,Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CRA International,Inc. - Common Stock",
  "Symbol": "CRAI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cray Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cray Inc - Common Stock",
  "Symbol": "CRAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cardica, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cardica, Inc. - Common Stock",
  "Symbol": "CRDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Crossroads Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Crossroads Systems, Inc. - Common Stock",
  "Symbol": "CRDS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Strategic Corporate Bond Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Strategic Corporate Bond Fund",
  "Symbol": "CRDT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cree, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cree, Inc. - Common Stock",
  "Symbol": "CREE",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Recycling Energy Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "China Recycling Energy Corporation - Common Stock",
  "Symbol": "CREG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cresud S.A.C.I.F. y A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cresud S.A.C.I.F. y A. - Warrants 5/22/2015",
  "Symbol": "CRESW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cresud S.A.C.I.F. y A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cresud S.A.C.I.F. y A. - American Depositary Shares, each representing ten shares of Common Stock",
  "Symbol": "CRESY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Curis, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Curis, Inc. - Common Stock",
  "Symbol": "CRIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cardiome Pharma Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cardiome Pharma Corporation - Ordinary Shares (Canada)",
  "Symbol": "CRME",
  "Test Issue": "N"
  },
  {
  "Company Name": "America's Car",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "America's Car-Mart, Inc. - Common Stock",
  "Symbol": "CRMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ceragon Networks Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ceragon Networks Ltd. - Ordinary Shares",
  "Symbol": "CRNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Crocs, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Crocs, Inc. - Common Stock",
  "Symbol": "CROX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Courier Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Courier Corporation - Common Stock",
  "Symbol": "CRRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Corporate Resource Services, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Corporate Resource Services, Inc. - Common Stock",
  "Symbol": "CRRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cartesian, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cartesian, Inc. - Common Stock",
  "Symbol": "CRTN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Criteo S.A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Criteo S.A. - American Depositary Shares",
  "Symbol": "CRTO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cirrus Logic, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cirrus Logic, Inc. - Common Stock",
  "Symbol": "CRUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "CorVel Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CorVel Corp. - Common Stock",
  "Symbol": "CRVL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Crown Media Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Crown Media Holdings, Inc. - Class A Common Stock",
  "Symbol": "CRWN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Crown Crafts, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Crown Crafts, Inc. - Common Stock",
  "Symbol": "CRWS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Carrizo Oil & Gas, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Carrizo Oil & Gas, Inc. - Common Stock",
  "Symbol": "CRZO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Clifton Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Clifton Bancorp Inc. - Common Stock",
  "Symbol": "CSBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cascade Microtech, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cascade Microtech, Inc. - Common Stock",
  "Symbol": "CSCD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cisco Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cisco Systems, Inc. - Common Stock",
  "Symbol": "CSCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Compass EMP U.S. Discovery 500 Enhanced Volatility Weighted Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Compass EMP U.S. Discovery 500 Enhanced Volatility Weighted Fund",
  "Symbol": "CSF",
  "Test Issue": "N"
  },
  {
  "Company Name": "CenterState Banks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CenterState Banks, Inc. - Common Stock",
  "Symbol": "CSFL",
  "Test Issue": "N"
  },
  {
  "Company Name": "CoStar Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CoStar Group, Inc. - Common Stock",
  "Symbol": "CSGP",
  "Test Issue": "N"
  },
  {
  "Company Name": "CSG Systems International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CSG Systems International, Inc. - Common Stock",
  "Symbol": "CSGS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cardiovascular Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cardiovascular Systems, Inc. - Common Stock",
  "Symbol": "CSII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Canadian Solar Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Canadian Solar Inc. - common shares",
  "Symbol": "CSIQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cornerstone OnDemand, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cornerstone OnDemand, Inc. - Common Stock",
  "Symbol": "CSOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "CSP Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "CSP Inc. - Common Stock",
  "Symbol": "CSPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calamos Strategic Total Return Fund",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calamos Strategic Total Return Fund - Common Stock",
  "Symbol": "CSQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "CSR plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CSR plc - American Depositary Shares",
  "Symbol": "CSRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "CaesarStone Sdot",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CaesarStone Sdot-Yam Ltd. - Ordinary Shares",
  "Symbol": "CSTE",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Sunergy Co., Ltd.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "China Sunergy Co., Ltd. - American Depositary Shares, each representing 18 ordinary shares",
  "Symbol": "CSUN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Capital Southwest Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Capital Southwest Corporation - Common Stock",
  "Symbol": "CSWC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cintas Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cintas Corporation - Common Stock",
  "Symbol": "CTAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Community Trust Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Community Trust Bancorp, Inc. - Common Stock",
  "Symbol": "CTBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "CTC Media, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CTC Media, Inc. - Common Stock",
  "Symbol": "CTCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Constant Contact, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Constant Contact, Inc. - Common Stock",
  "Symbol": "CTCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Computer Task Group, Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Computer Task Group, Incorporated - Common Stock",
  "Symbol": "CTG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Charles & Colvard Ltd",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Charles & Colvard Ltd - Common Stock",
  "Symbol": "CTHR",
  "Test Issue": "N"
  },
  {
  "Company Name": "CTI Industries Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CTI Industries Corporation - Common Stock",
  "Symbol": "CTIB",
  "Test Issue": "N"
  },
  {
  "Company Name": "CTI BioPharma Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CTI BioPharma Corp. - Common Stock",
  "Symbol": "CTIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "CareTrust REIT, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CareTrust REIT, Inc. - Common Stock",
  "Symbol": "CTRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Control4 Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Control4 Corporation - Common Stock",
  "Symbol": "CTRL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Citi Trends, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Citi Trends, Inc. - Common Stock",
  "Symbol": "CTRN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ctrip.com International, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ctrip.com International, Ltd. - American Depositary Shares",
  "Symbol": "CTRP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Catamaran Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Catamaran Corporation - Common Stock",
  "Symbol": "CTRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cognizant Technology Solutions Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cognizant Technology Solutions Corporation - Class A Common Stock",
  "Symbol": "CTSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cytosorbents Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cytosorbents Corporation - Common Stock",
  "Symbol": "CTSO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Connecticut Water Service, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Connecticut Water Service, Inc. - Common Stock",
  "Symbol": "CTWS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Citrix Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Citrix Systems, Inc. - Common Stock",
  "Symbol": "CTXS",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust ISE Global Copper Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust ISE Global Copper Index Fund",
  "Symbol": "CU",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Herzfeld Caribbean Basin Fund, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "The Herzfeld Caribbean Basin Fund, Inc. - Closed End FUnd",
  "Symbol": "CUBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "CUI Global, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CUI Global, Inc. - Common Stock",
  "Symbol": "CUI",
  "Test Issue": "N"
  },
  {
  "Company Name": "CU Bancorp (CA)",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CU Bancorp (CA) - Common Stock",
  "Symbol": "CUNB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cutera, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cutera, Inc. - Common Stock",
  "Symbol": "CUTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "CVB Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CVB Financial Corporation - Common Stock",
  "Symbol": "CVBF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cavco Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cavco Industries, Inc. - Common Stock",
  "Symbol": "CVCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Central Valley Community Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Central Valley Community Bancorp - Common Stock",
  "Symbol": "CVCY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Commercial Vehicle Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Commercial Vehicle Group, Inc. - Common Stock",
  "Symbol": "CVGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Calavo Growers, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Calavo Growers, Inc. - Common Stock",
  "Symbol": "CVGW",
  "Test Issue": "N"
  },
  {
  "Company Name": "CommVault Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CommVault Systems, Inc. - Common Stock",
  "Symbol": "CVLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Codorus Valley Bancorp, Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Codorus Valley Bancorp, Inc - Common Stock",
  "Symbol": "CVLY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Covenant Transportation Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Covenant Transportation Group, Inc. - Class A Common Stock",
  "Symbol": "CVTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "CVD Equipment Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CVD Equipment Corporation - Common Stock",
  "Symbol": "CVV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Coastway Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Coastway Bancorp, Inc. - Common Stock",
  "Symbol": "CWAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Community West Bancshares",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Community West Bancshares - Common Stock",
  "Symbol": "CWBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Consolidated Water Co. Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Consolidated Water Co. Ltd. - Ordinary Shares",
  "Symbol": "CWCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Casella Waste Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Casella Waste Systems, Inc. - Class A Common Stock",
  "Symbol": "CWST",
  "Test Issue": "N"
  },
  {
  "Company Name": "China XD Plastics Company Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "China XD Plastics Company Limited - Common Stock",
  "Symbol": "CXDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cypress Semiconductor Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cypress Semiconductor Corporation - Common Stock",
  "Symbol": "CY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cyanotech Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cyanotech Corporation - Common Stock",
  "Symbol": "CYAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "CyberOptics Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "CyberOptics Corporation - Common Stock",
  "Symbol": "CYBE",
  "Test Issue": "N"
  },
  {
  "Company Name": "CyberArk Software Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CyberArk Software Ltd. - Ordinary Shares",
  "Symbol": "CYBR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cyberonics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cyberonics, Inc. - Common Stock",
  "Symbol": "CYBX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cyclacel Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cyclacel Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "CYCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cyclacel Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cyclacel Pharmaceuticals, Inc. - 6% Convertible Preferred Stock",
  "Symbol": "CYCCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Community Health Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Community Health Systems, Inc. - Series A Contingent Value Rights",
  "Symbol": "CYHHZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cynosure, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Cynosure, Inc. - Class A Common Stock",
  "Symbol": "CYNO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Changyou.com Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Changyou.com Limited - American Depositary Shares, each representing two Class A ordinary shares",
  "Symbol": "CYOU",
  "Test Issue": "N"
  },
  {
  "Company Name": "CYREN Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CYREN Ltd. - Ordinary Shares",
  "Symbol": "CYRN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cytokinetics, Incorporated",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cytokinetics, Incorporated - Common Stock",
  "Symbol": "CYTK",
  "Test Issue": "N"
  },
  {
  "Company Name": "CytRx Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "CytRx Corporation - Common Stock",
  "Symbol": "CYTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cytori Therapeutics Inc",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cytori Therapeutics Inc - Common Stock",
  "Symbol": "CYTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Citizens First Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Citizens First Corporation - Common Stock",
  "Symbol": "CZFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Citizens & Northern Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Citizens & Northern Corp - Common Stock",
  "Symbol": "CZNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Caesars Entertainment Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Caesars Entertainment Corporation - Common Stock",
  "Symbol": "CZR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Citizens Community Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Citizens Community Bancorp, Inc. - Common Stock",
  "Symbol": "CZWI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Daegis Inc",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Daegis Inc - Common Stock",
  "Symbol": "DAEG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Data I/O Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Data I/O Corporation - Common Stock",
  "Symbol": "DAIO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Daktronics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Daktronics, Inc. - Common Stock",
  "Symbol": "DAKT",
  "Test Issue": "N"
  },
  {
  "Company Name": "DARA Biosciences, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "DARA Biosciences, Inc. - Common Stock",
  "Symbol": "DARA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jiayuan.com International Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Jiayuan.com International Ltd. - American Depositary Shares",
  "Symbol": "DATE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Famous Dave's of America, Inc.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Famous Dave's of America, Inc. - Common Stock",
  "Symbol": "DAVE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Recon Capital DAX Germany ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Recon Capital DAX Germany ETF",
  "Symbol": "DAX",
  "Test Issue": "N"
  },
  {
  "Company Name": "DBV Technologies S.A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DBV Technologies S.A. - American Depositary Shares",
  "Symbol": "DBVT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Diana Containerships Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Diana Containerships Inc. - Common Shares",
  "Symbol": "DCIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dime Community Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dime Community Bancshares, Inc. - Common Stock",
  "Symbol": "DCOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Delcath Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Delcath Systems, Inc. - Common Stock",
  "Symbol": "DCTH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Denny's Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Denny's Corporation - Common Stock",
  "Symbol": "DENN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Depomed, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Depomed, Inc. - Common Stock",
  "Symbol": "DEPO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dermira, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dermira, Inc. - Common Stock",
  "Symbol": "DERM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Destination Maternity Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Destination Maternity Corporation - Common Stock",
  "Symbol": "DEST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Del Frisco's Restaurant Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Del Frisco's Restaurant Group, Inc. - Common Stock",
  "Symbol": "DFRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury 5 Year Bull ETN",
  "Symbol": "DFVL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury 5-year Bear ETN",
  "Symbol": "DFVS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Delta Natural Gas Company, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Delta Natural Gas Company, Inc. - Common Stock",
  "Symbol": "DGAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Donegal Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Donegal Group, Inc. - Class A Common Stock",
  "Symbol": "DGICA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Donegal Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Donegal Group, Inc. - Class B Common Stock",
  "Symbol": "DGICB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Digi International Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Digi International Inc. - Common Stock",
  "Symbol": "DGII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares 3x Inverse Gold ETN",
  "Symbol": "DGLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Digital Ally, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Digital Ally, Inc. - Common Stock",
  "Symbol": "DGLY",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Emerging Markets Dividend Growth Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Emerging Markets Dividend Growth Fund",
  "Symbol": "DGRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree U.S. SmallCap Dividend Growth Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree U.S. SmallCap Dividend Growth Fund",
  "Symbol": "DGRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree U.S. Dividend Growth Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree U.S. Dividend Growth Fund",
  "Symbol": "DGRW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Diamond Hill Investment Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Diamond Hill Investment Group, Inc. - Class A Common Stock",
  "Symbol": "DHIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dehaier Medical Systems Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Dehaier Medical Systems Limited - Common Stock",
  "Symbol": "DHRM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Diodes Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Diodes Incorporated - Common Stock",
  "Symbol": "DIOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Discovery Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Discovery Communications, Inc. - Series A Common Stock",
  "Symbol": "DISCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Discovery Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Discovery Communications, Inc. - Series B Common Stock",
  "Symbol": "DISCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Discovery Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Discovery Communications, Inc. - Series C Common Stock",
  "Symbol": "DISCK",
  "Test Issue": "N"
  },
  {
  "Company Name": "DISH Network Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DISH Network Corporation - Class A Common Stock",
  "Symbol": "DISH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Daily Journal Corp. (S.C.)",
  "Financial Status": "E",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Daily Journal Corp. (S.C.) - Common Stock",
  "Symbol": "DJCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury Long Bond Bull ETN",
  "Symbol": "DLBL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury Long Bond Bear ETN",
  "Symbol": "DLBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "DLH Holdings Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "DLH Holdings Corp. - Common Stock",
  "Symbol": "DLHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dollar Tree, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dollar Tree, Inc. - Common Stock",
  "Symbol": "DLTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dorchester Minerals, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dorchester Minerals, L.P. - Common Units Representing Limited Partnership Interests",
  "Symbol": "DMLP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Diamond Foods, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Diamond Foods, Inc. - Common Stock",
  "Symbol": "DMND",
  "Test Issue": "N"
  },
  {
  "Company Name": "Digimarc Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Digimarc Corporation - Common Stock",
  "Symbol": "DMRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "DNB Financial Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "DNB Financial Corp - Common Stock",
  "Symbol": "DNBF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dunkin' Brands Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dunkin' Brands Group, Inc. - Common Stock",
  "Symbol": "DNKN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dorman Products, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dorman Products, Inc. - Common Stock",
  "Symbol": "DORM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dover Saddlery, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Dover Saddlery, Inc. - Common Stock",
  "Symbol": "DOVR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amdocs Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amdocs Limited - Ordinary Shares",
  "Symbol": "DOX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dipexium Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Dipexium Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "DPRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Digirad Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Digirad Corporation - Common Stock",
  "Symbol": "DRAD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dataram Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Dataram Corporation - Common Stock",
  "Symbol": "DRAM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Digital River, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Digital River, Inc. - Common Stock",
  "Symbol": "DRIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dicerna Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dicerna Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "DRNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "DURECT Corporation",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "DURECT Corporation - Common Stock",
  "Symbol": "DRRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "DragonWave Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DragonWave Inc - Common Shares",
  "Symbol": "DRWI",
  "Test Issue": "N"
  },
  {
  "Company Name": "DragonWave Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DragonWave Inc - Warrants",
  "Symbol": "DRWIW",
  "Test Issue": "N"
  },
  {
  "Company Name": "DryShips Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DryShips Inc. - Common Stock",
  "Symbol": "DRYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Derma Sciences, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Derma Sciences, Inc. - Common Stock",
  "Symbol": "DSCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Discovery Laboratories, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Discovery Laboratories, Inc. - Common Stock",
  "Symbol": "DSCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Descartes Systems Group Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Descartes Systems Group Inc. - Common Stock",
  "Symbol": "DSGX",
  "Test Issue": "N"
  },
  {
  "Company Name": "DS Healthcare Group, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "DS Healthcare Group, Inc. - Common Stock",
  "Symbol": "DSKX",
  "Test Issue": "N"
  },
  {
  "Company Name": "iDreamSky Technology Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "iDreamSky Technology Limited - American Depositary Shares",
  "Symbol": "DSKY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares 3x Inverse Silver ETN",
  "Symbol": "DSLV",
  "Test Issue": "N"
  },
  {
  "Company Name": "DSP Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DSP Group, Inc. - Common Stock",
  "Symbol": "DSPG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Deswell Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Deswell Industries, Inc. - Common Shares",
  "Symbol": "DSWL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Datalink Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Datalink Corporation - Common Stock",
  "Symbol": "DTLK",
  "Test Issue": "N"
  },
  {
  "Company Name": "DTS, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DTS, Inc. - Common Stock",
  "Symbol": "DTSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury 2 Yr Bull ETN",
  "Symbol": "DTUL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury 2-year Bear ETN",
  "Symbol": "DTUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "DIRECTV",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DIRECTV - Common Stock",
  "Symbol": "DTV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury 10 Year Bull ETN",
  "Symbol": "DTYL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury 10-year Bear ETN",
  "Symbol": "DTYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dynavax Technologies Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Dynavax Technologies Corporation - Common Stock",
  "Symbol": "DVAX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Diversicare Healthcare Services Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Diversicare Healthcare Services Inc. - Common Stock",
  "Symbol": "DVCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dreamworks Animation SKG, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dreamworks Animation SKG, Inc. - Class A Common Stock",
  "Symbol": "DWA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Arrow DWA Tactical ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Arrow DWA Tactical ETF",
  "Symbol": "DWAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Datawatch Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Datawatch Corporation - Common Stock",
  "Symbol": "DWCH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dawson Geophysical Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dawson Geophysical Company - Common Stock",
  "Symbol": "DWSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "DexCom, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DexCom, Inc. - Common Stock",
  "Symbol": "DXCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Germany Hedged Equity Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Germany Hedged Equity Fund",
  "Symbol": "DXGE",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Japan Hedged SmallCap Equity Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Japan Hedged SmallCap Equity Fund",
  "Symbol": "DXJS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Korea Hedged Equity Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Korea Hedged Equity Fund",
  "Symbol": "DXKW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Destination XL Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Destination XL Group, Inc. - Common Stock",
  "Symbol": "DXLG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dex Media, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dex Media, Inc. - Common Stock",
  "Symbol": "DXM",
  "Test Issue": "N"
  },
  {
  "Company Name": "DXP Enterprises, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DXP Enterprises, Inc. - Common Stock",
  "Symbol": "DXPE",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree United Kingdom Hedged Equity Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree United Kingdom Hedged Equity Fund",
  "Symbol": "DXPS",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Dixie Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "The Dixie Group, Inc. - Common Stock",
  "Symbol": "DXYN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dyax Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Dyax Corp. - Common Stock",
  "Symbol": "DYAX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dynatronics Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Dynatronics Corporation - Common Stock",
  "Symbol": "DYNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dynasil Corporation of America",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Dynasil Corporation of America - Common Stock",
  "Symbol": "DYSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Electronic Arts Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Electronic Arts Inc. - Common Stock",
  "Symbol": "EA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Erickson Incorporated",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Erickson Incorporated - Common Stock",
  "Symbol": "EAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Auris Medical Holding AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Auris Medical Holding AG - Common Shares",
  "Symbol": "EARS",
  "Test Issue": "N"
  },
  {
  "Company Name": "eBay Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "eBay Inc. - Common Stock",
  "Symbol": "EBAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eleven Biotherapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Eleven Biotherapeutics, Inc. - Common Stock",
  "Symbol": "EBIO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ebix, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ebix, Inc. - Common Stock",
  "Symbol": "EBIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eagle Bancorp Montana, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Eagle Bancorp Montana, Inc. - Common Stock",
  "Symbol": "EBMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Meridian Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Meridian Bancorp, Inc. - Common Stock",
  "Symbol": "EBSB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Enterprise Bancorp Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Enterprise Bancorp Inc - Common Stock",
  "Symbol": "EBTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Echo Global Logistics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Echo Global Logistics, Inc. - Common Stock",
  "Symbol": "ECHO",
  "Test Issue": "N"
  },
  {
  "Company Name": "US Ecology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "US Ecology, Inc. - Common Stock",
  "Symbol": "ECOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Encore Capital Group Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Encore Capital Group Inc - Common Stock",
  "Symbol": "ECPG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Echo Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Echo Therapeutics, Inc. - Common Stock",
  "Symbol": "ECTE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Endocyte, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Endocyte, Inc. - Common Stock",
  "Symbol": "ECYT",
  "Test Issue": "N"
  },
  {
  "Company Name": "EDAP TMS S.A.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "EDAP TMS S.A. - American Depositary Shares, each representing One Ordinary Share",
  "Symbol": "EDAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Edgewater Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Edgewater Technology, Inc. - Common Stock",
  "Symbol": "EDGW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Exceed Company Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Exceed Company Ltd. - Common Stock",
  "Symbol": "EDS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Educational Development Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Educational Development Corporation - Common Stock",
  "Symbol": "EDUC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Euronet Worldwide, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Euronet Worldwide, Inc. - Common Stock",
  "Symbol": "EEFT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ecology and Environment, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ecology and Environment, Inc. - Class A Common Stock",
  "Symbol": "EEI",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Emerging Markets Asia Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Emerging Markets Asia Index Fund",
  "Symbol": "EEMA",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Emerging Markets EMEA Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Emerging Markets EMEA Index Fund",
  "Symbol": "EEME",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Emerging Markets Latin America Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Emerging Markets Latin America Index Fund",
  "Symbol": "EEML",
  "Test Issue": "N"
  },
  {
  "Company Name": "Electronics for Imaging, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Electronics for Imaging, Inc. - Common Stock",
  "Symbol": "EFII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Energy Focus, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Energy Focus, Inc. - Common Stock",
  "Symbol": "EFOI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Enterprise Financial Services Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Enterprise Financial Services Corporation - Common Stock",
  "Symbol": "EFSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "eFuture Information Technology Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "eFuture Information Technology Inc. - Ordinary Shares",
  "Symbol": "EFUT",
  "Test Issue": "N"
  },
  {
  "Company Name": "eGain Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "eGain Corporation - Common Stock",
  "Symbol": "EGAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eagle Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Eagle Bancorp, Inc. - Common Stock",
  "Symbol": "EGBN",
  "Test Issue": "N"
  },
  {
  "Company Name": "8x8 Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "8x8 Inc - Common Stock",
  "Symbol": "EGHT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eagle Bulk Shipping Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Eagle Bulk Shipping Inc. - Common Stock",
  "Symbol": "EGLE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Egalet Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Egalet Corporation - Common Stock",
  "Symbol": "EGLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "NIC Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NIC Inc. - Common Stock",
  "Symbol": "EGOV",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Emerging Markets Growth Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Emerging Markets Growth Index Fund",
  "Symbol": "EGRW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eagle Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Eagle Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "EGRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Entertainment Gaming Asia Incorporated",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Entertainment Gaming Asia Incorporated - Common Stock",
  "Symbol": "EGT",
  "Test Issue": "N"
  },
  {
  "Company Name": "eHealth, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "eHealth, Inc. - Common Stock",
  "Symbol": "EHTH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Endurance International Group Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Endurance International Group Holdings, Inc. - Common Stock",
  "Symbol": "EIGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Endologix, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Endologix, Inc. - Common Stock",
  "Symbol": "ELGX",
  "Test Issue": "N"
  },
  {
  "Company Name": "EarthLink Holdings Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EarthLink Holdings Corp. - Common Stock",
  "Symbol": "ELNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Echelon Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Echelon Corporation - Common Stock",
  "Symbol": "ELON",
  "Test Issue": "N"
  },
  {
  "Company Name": "Syneron Medical Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Syneron Medical Ltd. - Ordinary Shares",
  "Symbol": "ELOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Electro Rent Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Electro Rent Corporation - Common Stock",
  "Symbol": "ELRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Electro",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Electro-Sensors, Inc. - Common Stock",
  "Symbol": "ELSE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eltek Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Eltek Ltd. - Ordinary Shares",
  "Symbol": "ELTK",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Emerging Markets Corporate Bond Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Emerging Markets Corporate Bond Fund",
  "Symbol": "EMCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Emclaire Financial Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Emclaire Financial Corp - Common Stock",
  "Symbol": "EMCF",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Emerging Markets Consumer Growth Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Emerging Markets Consumer Growth Fund",
  "Symbol": "EMCG",
  "Test Issue": "N"
  },
  {
  "Company Name": "EMC Insurance Group Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EMC Insurance Group Inc. - Common Stock",
  "Symbol": "EMCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Emerging Markets Consumer Discrectionary Sector Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Emerging Markets Consumer Discrectionary Sector Index Fund",
  "Symbol": "EMDI",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Emerging Markets Energy Sector Capped Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Emerging Markets Energy Sector Capped Index Fund",
  "Symbol": "EMEY",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares S&P Emerging Markets Infrastructure Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares S&P Emerging Markets Infrastructure Index Fund",
  "Symbol": "EMIF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Elbit Imaging Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Elbit Imaging Ltd. - Ordinary Shares",
  "Symbol": "EMITF",
  "Test Issue": "N"
  },
  {
  "Company Name": "EMCORE Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "EMCORE Corporation - Common Stock",
  "Symbol": "EMKR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eastern Company (The)",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Eastern Company (The) - Common Stock",
  "Symbol": "EML",
  "Test Issue": "N"
  },
  {
  "Company Name": "Emmis Communications Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Emmis Communications Corporation - Class A Common Stock",
  "Symbol": "EMMS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Emmis Communications Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Emmis Communications Corporation - 6.25% Series A Cumulative Convertible Preferred Stock",
  "Symbol": "EMMSP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Endo International plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Endo International plc - Ordinary Shares",
  "Symbol": "ENDP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Entegra Financial Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Entegra Financial Corp. - Common Stock",
  "Symbol": "ENFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ENGlobal Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ENGlobal Corporation - Common Stock",
  "Symbol": "ENG",
  "Test Issue": "N"
  },
  {
  "Company Name": "EnerNOC, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EnerNOC, Inc. - Common Stock",
  "Symbol": "ENOC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Enphase Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Enphase Energy, Inc. - Common Stock",
  "Symbol": "ENPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Ensign Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Ensign Group, Inc. - Common Stock",
  "Symbol": "ENSG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Global Eagle Entertainment Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Global Eagle Entertainment Inc. - Common Stock",
  "Symbol": "ENT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Enanta Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Enanta Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ENTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Entegris, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Entegris, Inc. - Common Stock",
  "Symbol": "ENTG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Entropic Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Entropic Communications, Inc. - Common Stock",
  "Symbol": "ENTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Envivio, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Envivio, Inc. - Common Stock",
  "Symbol": "ENVI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Enzon Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Enzon Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ENZN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Enzymotec Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Enzymotec Ltd. - Ordinary Shares",
  "Symbol": "ENZY",
  "Test Issue": "N"
  },
  {
  "Company Name": "E2open, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "E2open, Inc. - Common Stock",
  "Symbol": "EOPN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ambassadors Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ambassadors Group, Inc. - Common Stock",
  "Symbol": "EPAX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bottomline Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bottomline Technologies, Inc. - Common Stock",
  "Symbol": "EPAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "EPIQ Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EPIQ Systems, Inc. - Common Stock",
  "Symbol": "EPIQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "EPIRUS Biopharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "EPIRUS Biopharmaceuticals, Inc. - Common Stock",
  "Symbol": "EPRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Epizyme, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Epizyme, Inc. - Common Stock",
  "Symbol": "EPZM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Equinix, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Equinix, Inc. - Common Stock",
  "Symbol": "EQIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eldorado Resorts, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Eldorado Resorts, Inc. - Common Stock",
  "Symbol": "ERI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ericsson",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ericsson - ADS each representing 1 underlying Class B share",
  "Symbol": "ERIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Erie Indemnity Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Erie Indemnity Company - Class A Common Stock",
  "Symbol": "ERIE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Energy Recovery, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Energy Recovery, Inc. - Common Stock",
  "Symbol": "ERII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eagle Rock Energy Partners, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Eagle Rock Energy Partners, L.P. - Common Units Representing Limited Partner Interests",
  "Symbol": "EROC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Empire Resources, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Empire Resources, Inc. - Common Stock",
  "Symbol": "ERS",
  "Test Issue": "N"
  },
  {
  "Company Name": "VelocityShares Equal Risk Weighted Large Cap ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "VelocityShares Equal Risk Weighted Large Cap ETF",
  "Symbol": "ERW",
  "Test Issue": "N"
  },
  {
  "Company Name": "ESB Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ESB Financial Corporation - Common Stock",
  "Symbol": "ESBF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Elmira Savings Bank NY (The)",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Elmira Savings Bank NY (The) - Common Stock",
  "Symbol": "ESBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Escalade, Incorporated",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Escalade, Incorporated - Common Stock",
  "Symbol": "ESCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Escalera Resources Co.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Escalera Resources Co. - Common Stock",
  "Symbol": "ESCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Escalera Resources Co.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Escalera Resources Co. - Series A Cumulative Preferred Stock",
  "Symbol": "ESCRP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Euroseas Ltd.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Euroseas Ltd. - Common Stock",
  "Symbol": "ESEA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Enstar Group Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Enstar Group Limited - Ordinary Shares",
  "Symbol": "ESGR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Electro Scientific Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Electro Scientific Industries, Inc. - Common Stock",
  "Symbol": "ESIO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Elbit Systems Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Elbit Systems Ltd. - Ordinary Shares",
  "Symbol": "ESLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Escalon Medical Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Escalon Medical Corp. - Common Stock",
  "Symbol": "ESMC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Esperion Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Esperion Therapeutics, Inc. - Common Stock",
  "Symbol": "ESPR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Express Scripts Holding Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Express Scripts Holding Company - Common Stock",
  "Symbol": "ESRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "ESSA Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ESSA Bancorp, Inc. - common stock",
  "Symbol": "ESSA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Essex Rental Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Essex Rental Corporation - Common Stock",
  "Symbol": "ESSX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Community Bankers Trust Corporation.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Community Bankers Trust Corporation. - Common Stock",
  "Symbol": "ESXB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Elecsys Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Elecsys Corporation - Common Stock",
  "Symbol": "ESYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "E*TRADE Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "E*TRADE Financial Corporation - Common Stock",
  "Symbol": "ETFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "EnteroMedics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "EnteroMedics Inc. - Common Stock",
  "Symbol": "ETRM",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Europe Financials Sector Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Europe Financials Sector Index Fund",
  "Symbol": "EUFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Emerging Markets Value Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Emerging Markets Value Index Fund",
  "Symbol": "EVAL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lombard Medical, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Lombard Medical, Inc. - Ordinary Shares",
  "Symbol": "EVAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Eastern Virginia Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Eastern Virginia Bankshares, Inc. - Common Stock",
  "Symbol": "EVBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "EV Energy Partners, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EV Energy Partners, L.P. - common units representing limited partnership interest",
  "Symbol": "EVEP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ever",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ever-Glory International Group, Inc. - Common Stock",
  "Symbol": "EVK",
  "Test Issue": "N"
  },
  {
  "Company Name": "EVINE Live Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EVINE Live Inc. - Common Stock",
  "Symbol": "EVLV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Evoke Pharma, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Evoke Pharma, Inc. - Common Stock",
  "Symbol": "EVOK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Evolving Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Evolving Systems, Inc. - Common Stock",
  "Symbol": "EVOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "EveryWare Global, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "EveryWare Global, Inc. - Common Stock",
  "Symbol": "EVRY",
  "Test Issue": "N"
  },
  {
  "Company Name": "East West Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "East West Bancorp, Inc. - Common Stock",
  "Symbol": "EWBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Exa Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Exa Corporation - Common Stock",
  "Symbol": "EXA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Exactech, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Exactech, Inc. - Common Stock",
  "Symbol": "EXAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Exact Sciences Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Exact Sciences Corporation - Common Stock",
  "Symbol": "EXAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Exelixis, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Exelixis, Inc. - Common Stock",
  "Symbol": "EXEL",
  "Test Issue": "N"
  },
  {
  "Company Name": "EXFO Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EXFO Inc - Subordinate Voting Shares",
  "Symbol": "EXFO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Exterran Partners, L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Exterran Partners, L.P. - Common Units representing Limited Partner Interests",
  "Symbol": "EXLP",
  "Test Issue": "N"
  },
  {
  "Company Name": "ExlService Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ExlService Holdings, Inc. - Common Stock",
  "Symbol": "EXLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Expeditors International of Washington, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Expeditors International of Washington, Inc. - Common Stock",
  "Symbol": "EXPD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Expedia, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Expedia, Inc. - Common Stock",
  "Symbol": "EXPE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Exponent, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Exponent, Inc. - Common Stock",
  "Symbol": "EXPO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Extreme Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Extreme Networks, Inc. - Common Stock",
  "Symbol": "EXTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Energy XXI Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Energy XXI Ltd. - Common Stock",
  "Symbol": "EXXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Second Sight Medical Products, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Second Sight Medical Products, Inc. - Common Stock",
  "Symbol": "EYES",
  "Test Issue": "N"
  },
  {
  "Company Name": "EZchip Semiconductor Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EZchip Semiconductor Limited - Ordinary Shares",
  "Symbol": "EZCH",
  "Test Issue": "N"
  },
  {
  "Company Name": "EZCORP, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EZCORP, Inc. - Class A Non-Voting Common Stock",
  "Symbol": "EZPW",
  "Test Issue": "N"
  },
  {
  "Company Name": "FalconStor Software, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "FalconStor Software, Inc. - Common Stock",
  "Symbol": "FALC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Diamondback Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Diamondback Energy, Inc. - Commmon Stock",
  "Symbol": "FANG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Farmer Brothers Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Farmer Brothers Company - Common Stock",
  "Symbol": "FARM",
  "Test Issue": "N"
  },
  {
  "Company Name": "FARO Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FARO Technologies, Inc. - Common Stock",
  "Symbol": "FARO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fastenal Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fastenal Company - Common Stock",
  "Symbol": "FAST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fate Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Fate Therapeutics, Inc. - Common Stock",
  "Symbol": "FATE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Facebook, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Facebook, Inc. - Class A Common Stock",
  "Symbol": "FB",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Business Financial Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Business Financial Services, Inc. - Common Stock",
  "Symbol": "FBIZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "The First Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "The First Bancshares, Inc. - Common Stock",
  "Symbol": "FBMS",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Bancorp - Common Stock",
  "Symbol": "FBNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Connecticut Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Connecticut Bancorp, Inc. - Common Stock",
  "Symbol": "FBNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "FBR & Co",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FBR & Co - Common Stock",
  "Symbol": "FBRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fauquier Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Fauquier Bankshares, Inc. - Common Stock",
  "Symbol": "FBSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Capital, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Capital, Inc. - Common Stock",
  "Symbol": "FCAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Community Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Community Bancshares, Inc. - Common Stock",
  "Symbol": "FCBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Community Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Community Corporation - Common Stock",
  "Symbol": "FCCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "1st Constitution Bancorp (NJ)",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "1st Constitution Bancorp (NJ) - Common Stock",
  "Symbol": "FCCY",
  "Test Issue": "N"
  },
  {
  "Company Name": "FuelCell Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "FuelCell Energy, Inc. - Common Stock",
  "Symbol": "FCEL",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Cash Financial Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Cash Financial Services, Inc. - Common Stock",
  "Symbol": "FCFS",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares FTSE China (HK Listed) Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares FTSE China (HK Listed) Index Fund",
  "Symbol": "FCHI",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Clover Leaf Financial Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Clover Leaf Financial Corp. - Common Stock",
  "Symbol": "FCLF",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Citizens BancShares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Citizens BancShares, Inc. - Class A Common Stock",
  "Symbol": "FCNCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fairchild Semiconductor International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fairchild Semiconductor International, Inc. - Common Stock",
  "Symbol": "FCS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fibrocell Science Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Fibrocell Science Inc - Common Stock",
  "Symbol": "FCSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "1st Century Bancshares, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "1st Century Bancshares, Inc - Common Stock",
  "Symbol": "FCTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Capital Bancorp, Inc. (VA)",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Capital Bancorp, Inc. (VA) - Common Stock",
  "Symbol": "FCVA",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Citizens Banc Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Citizens Banc Corp. - Common Stock",
  "Symbol": "FCZA",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Citizens Banc Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Citizens Banc Corp. - Depositary Shares Each Representing a 1/40th Interest in a 6.50% Noncumulative Redeemable Convertible Perpetual Preferred Share, Series B",
  "Symbol": "FCZAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Defiance Financial Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Defiance Financial Corp. - Common Stock",
  "Symbol": "FDEF",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Strategic Income ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Strategic Income ETF",
  "Symbol": "FDIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Federal",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Federal-Mogul Holdings Corporation - Class A Common Stock",
  "Symbol": "FDML",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fidus Investment Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fidus Investment Corporation - Common Stock",
  "Symbol": "FDUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "FEI Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FEI Company - Common Stock",
  "Symbol": "FEIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Frequency Electronics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Frequency Electronics, Inc. - Common Stock",
  "Symbol": "FEIM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Franklin Electric Co., Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Franklin Electric Co., Inc. - Common Stock",
  "Symbol": "FELE",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Emerging Markets Local Currency Bond ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Emerging Markets Local Currency Bond ETF",
  "Symbol": "FEMB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Forbes Energy Services Ltd",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Forbes Energy Services Ltd - Ordinary shares (Bermuda)",
  "Symbol": "FES",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Eurozone AlphaDEX ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Eurozone AlphaDEX ETF",
  "Symbol": "FEUZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "FireEye, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FireEye, Inc. - Common Stock",
  "Symbol": "FEYE",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Financial Bancorp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Financial Bancorp. - Common Stock",
  "Symbol": "FFBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Financial Bancorp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Financial Bancorp. - Warrant 12/23/2018",
  "Symbol": "FFBCW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fuwei Films (Holdings) Co., Ltd.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Fuwei Films (Holdings) Co., Ltd. - ORDINARY SHARES",
  "Symbol": "FFHL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Flushing Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Flushing Financial Corporation - Common Stock",
  "Symbol": "FFIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Financial Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Financial Bankshares, Inc. - Common Stock",
  "Symbol": "FFIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "F5 Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "F5 Networks, Inc. - Common Stock",
  "Symbol": "FFIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Farmers Capital Bank Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Farmers Capital Bank Corporation - Common Stock",
  "Symbol": "FFKT",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Federal of Northern Michigan Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Federal of Northern Michigan Bancorp, Inc. - Common Stock",
  "Symbol": "FFNM",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Financial Northwest, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Financial Northwest, Inc. - Common Stock",
  "Symbol": "FFNW",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Foundation Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Foundation Inc. - Common Stock",
  "Symbol": "FFWM",
  "Test Issue": "N"
  },
  {
  "Company Name": "FibroGen, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FibroGen, Inc - Common Stock",
  "Symbol": "FGEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Female Health Company (The)",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Female Health Company (The) - Common Stock",
  "Symbol": "FHCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Interstate BancSystem, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Interstate BancSystem, Inc. - Class A Common Stock",
  "Symbol": "FIBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Finish Line, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Finish Line, Inc. - Class A Common Stock",
  "Symbol": "FINL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marlin Midstream Partners, LP",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Marlin Midstream Partners, LP - Common Units representing Limited Partner Interests.",
  "Symbol": "FISH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Financial Institutions, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Financial Institutions, Inc. - Common Stock",
  "Symbol": "FISI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fiserv, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fiserv, Inc. - Common Stock",
  "Symbol": "FISV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fifth Third Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fifth Third Bancorp - Common Stock",
  "Symbol": "FITB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fifth Third Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fifth Third Bancorp - Depositary Share repstg 1/1000th Ownership Interest Perp Pfd Series I",
  "Symbol": "FITBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Five Below, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Five Below, Inc. - Common Stock",
  "Symbol": "FIVE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Five9, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Five9, Inc. - Common Stock",
  "Symbol": "FIVN",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Beverage Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "National Beverage Corp. - Common Stock",
  "Symbol": "FIZZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury Flattener ETN",
  "Symbol": "FLAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fluidigm Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fluidigm Corporation - Common Stock",
  "Symbol": "FLDM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Flextronics International Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Flextronics International Ltd. - Ordinary Shares",
  "Symbol": "FLEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "The First of Long Island Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "The First of Long Island Corporation - Common Stock",
  "Symbol": "FLIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "FLIR Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FLIR Systems, Inc. - Common Stock",
  "Symbol": "FLIR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Full House Resorts, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Full House Resorts, Inc. - Common Stock",
  "Symbol": "FLL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Flamel Technologies S.A.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Flamel Technologies S.A. - American Depositary Shares each representing one Ordinary Share",
  "Symbol": "FLML",
  "Test Issue": "N"
  },
  {
  "Company Name": "1",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "1-800 FLOWERS.COM, Inc. - Class A Common Stock",
  "Symbol": "FLWS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Flexion Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Flexion Therapeutics, Inc. - Common Stock",
  "Symbol": "FLXN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Flexsteel Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Flexsteel Industries, Inc. - Common Stock",
  "Symbol": "FLXS",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Managed Municipal ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Managed Municipal ETF",
  "Symbol": "FMB",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Mid",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Mid-Illinois Bancshares, Inc. - Common Stock",
  "Symbol": "FMBH",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Midwest Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Midwest Bancorp, Inc. - Common Stock",
  "Symbol": "FMBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "FirstMerit Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FirstMerit Corporation - Common Stock",
  "Symbol": "FMER",
  "Test Issue": "N"
  },
  {
  "Company Name": "Foundation Medicine, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Foundation Medicine, Inc. - Common Stock",
  "Symbol": "FMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Farmers National Banc Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Farmers National Banc Corp. - Common Stock",
  "Symbol": "FMNB",
  "Test Issue": "N"
  },
  {
  "Company Name": "First NBC Bank Holding Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First NBC Bank Holding Company - Common Stock",
  "Symbol": "FNBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Niagara Financial Group Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Niagara Financial Group Inc. - Common Stock",
  "Symbol": "FNFG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Financial Engines, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Financial Engines, Inc. - Common Stock",
  "Symbol": "FNGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Federated National Holding Company",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Federated National Holding Company - Common Stock",
  "Symbol": "FNHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Finjan Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Finjan Holdings, Inc. - Common Stock",
  "Symbol": "FNJN",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Bancorp, Inc (ME)",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Bancorp, Inc (ME) - Common Stock",
  "Symbol": "FNLC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ForceField Energy Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ForceField Energy Inc. - Common Stock",
  "Symbol": "FNRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Finisar Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Finisar Corporation - Common Stock",
  "Symbol": "FNSR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amicus Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Amicus Therapeutics, Inc. - Common Stock",
  "Symbol": "FOLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Foamix Pharmaceuticals Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Foamix Pharmaceuticals Ltd. - Ordinary Shares",
  "Symbol": "FOMX",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ CEA Smartphone Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ CEA Smartphone Index Fund",
  "Symbol": "FONE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fonar Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Fonar Corporation - Common Stock",
  "Symbol": "FONR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Forward Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Forward Industries, Inc. - Common Stock",
  "Symbol": "FORD",
  "Test Issue": "N"
  },
  {
  "Company Name": "FormFactor, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FormFactor, Inc. - Common Stock",
  "Symbol": "FORM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Forrester Research, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Forrester Research, Inc. - Common Stock",
  "Symbol": "FORR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Formula Systems (1985) Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Formula Systems (1985) Ltd. - ADS represents 1 ordinary shares",
  "Symbol": "FORTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fossil Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fossil Group, Inc. - Common Stock",
  "Symbol": "FOSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Twenty",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Twenty-First Century Fox, Inc. - Class B Common Stock",
  "Symbol": "FOX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Twenty",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Twenty-First Century Fox, Inc. - Class A Common Stock",
  "Symbol": "FOXA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fox Factory Holding Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fox Factory Holding Corp. - Common Stock",
  "Symbol": "FOXF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Five Prime Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Five Prime Therapeutics, Inc. - Common Stock",
  "Symbol": "FPRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust International IPO ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust International IPO ETF",
  "Symbol": "FPXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Francesca's Holdings Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Francesca's Holdings Corporation - Common Stock",
  "Symbol": "FRAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Bank",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Bank - Common Stock",
  "Symbol": "FRBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Republic First Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Republic First Bancorp, Inc. - Common Stock",
  "Symbol": "FRBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fred's, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fred's, Inc. - Common Stock",
  "Symbol": "FRED",
  "Test Issue": "N"
  },
  {
  "Company Name": "FreeSeas Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "FreeSeas Inc. - Common Stock",
  "Symbol": "FREE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fiesta Restaurant Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fiesta Restaurant Group, Inc. - Common Stock",
  "Symbol": "FRGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Merchants Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Merchants Corporation - Common Stock",
  "Symbol": "FRME",
  "Test Issue": "N"
  },
  {
  "Company Name": "FairPoint Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "FairPoint Communications, Inc. - Common Stock",
  "Symbol": "FRP",
  "Test Issue": "N"
  },
  {
  "Company Name": "FRP Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FRP Holdings, Inc. - Common Stock",
  "Symbol": "FRPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "FRP Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FRP Holdings, Inc. - Common Stock Ex-Distribution When Issued",
  "Symbol": "FRPHV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Freshpet, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Freshpet, Inc. - Common Stock",
  "Symbol": "FRPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Papa Murphy's Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Papa Murphy's Holdings, Inc. - Common Stock",
  "Symbol": "FRSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fifth Street Asset Management Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fifth Street Asset Management Inc. - Class A Common Stock",
  "Symbol": "FSAM",
  "Test Issue": "N"
  },
  {
  "Company Name": "First South Bancorp Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First South Bancorp Inc - Common Stock",
  "Symbol": "FSBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "FS Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "FS Bancorp, Inc. - Common Stock",
  "Symbol": "FSBW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fifth Street Finance Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fifth Street Finance Corp. - Common Stock",
  "Symbol": "FSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fifth Street Finance Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fifth Street Finance Corp. - 6.125% senior notes due 2028",
  "Symbol": "FSCFL",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Savings Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Savings Financial Group, Inc. - Common Stock",
  "Symbol": "FSFG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fifth Street Senior Floating Rate Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fifth Street Senior Floating Rate Corp. - Common Stock",
  "Symbol": "FSFR",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Security Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Security Group, Inc. - Common Stock",
  "Symbol": "FSGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Solar, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Solar, Inc. - Common Stock",
  "Symbol": "FSLR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fusion Telecommunications International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Fusion Telecommunications International, Inc. - Common Stock",
  "Symbol": "FSNN",
  "Test Issue": "N"
  },
  {
  "Company Name": "FirstService Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FirstService Corporation - Subordinate Voting Shares",
  "Symbol": "FSRV",
  "Test Issue": "N"
  },
  {
  "Company Name": "L.B. Foster Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "L.B. Foster Company - Common Stock",
  "Symbol": "FSTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fuel Systems Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fuel Systems Solutions, Inc. - Common Stock",
  "Symbol": "FSYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Capital Strength ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Capital Strength ETF",
  "Symbol": "FTCS",
  "Test Issue": "N"
  },
  {
  "Company Name": "FTD Companies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FTD Companies, Inc. - Common Stock",
  "Symbol": "FTD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fuel Tech, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fuel Tech, Inc. - Common Stock",
  "Symbol": "FTEK",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Global Tactical Commodity Strategy Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Global Tactical Commodity Strategy Fund",
  "Symbol": "FTGC",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust High Income ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust High Income ETF",
  "Symbol": "FTHI",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Low Beta Income ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Low Beta Income ETF",
  "Symbol": "FTLB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fortinet, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fortinet, Inc. - Common Stock",
  "Symbol": "FTNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Frontier Communications Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Frontier Communications Corporation - Common Stock",
  "Symbol": "FTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Senior Loan Fund ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Senior Loan Fund ETF",
  "Symbol": "FTSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Enhanced Short Maturity ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Enhanced Short Maturity ETF",
  "Symbol": "FTSM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rocket Fuel Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rocket Fuel Inc. - Common Stock",
  "Symbol": "FUEL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Full Circle Capital Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Full Circle Capital Corporation - Common Stock",
  "Symbol": "FULL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Full Circle Capital Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Full Circle Capital Corporation - 8.25% Notes due 2020",
  "Symbol": "FULLL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fulton Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fulton Financial Corporation - Common Stock",
  "Symbol": "FULT",
  "Test Issue": "N"
  },
  {
  "Company Name": "First United Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First United Corporation - Common Stock",
  "Symbol": "FUNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Royce Focus Trust, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Royce Focus Trust, Inc. - Closed End Fund",
  "Symbol": "FUND",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Dorsey Wright Focus 5 ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Dorsey Wright Focus 5 ETF",
  "Symbol": "FV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fairway Group Holdings Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Fairway Group Holdings Corp. - Class A Common Stock",
  "Symbol": "FWM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Forward Pharma A/S",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Forward Pharma A/S - American Depositary Shares",
  "Symbol": "FWP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Forward Air Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Forward Air Corporation - Common Stock",
  "Symbol": "FWRD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fox Chase Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fox Chase Bancorp, Inc. - Common Stock",
  "Symbol": "FXCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "FX Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FX Energy, Inc. - Common Stock",
  "Symbol": "FXEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "FX Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "FX Energy, Inc. - Series B Cumulative Convertible Preferred Stock",
  "Symbol": "FXENP",
  "Test Issue": "N"
  },
  {
  "Company Name": "German American Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "German American Bancorp, Inc. - Common Stock",
  "Symbol": "GABC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Global",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Global-Tech Advanced Innovations Inc. - Common Stock",
  "Symbol": "GAI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gaiam, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Gaiam, Inc. - Class A Common Stock",
  "Symbol": "GAIA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Investment Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Investment Corporation - Business Development Company",
  "Symbol": "GAIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Investment Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Investment Corporation - 6.75% Series B Cumulative Term Preferred Stock",
  "Symbol": "GAINO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Investment Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Investment Corporation - 7.125% Series A Term Preferred Stock",
  "Symbol": "GAINP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Galena Biopharma, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Galena Biopharma, Inc. - Common Stock",
  "Symbol": "GALE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Galectin Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Galectin Therapeutics Inc. - Common Stock",
  "Symbol": "GALT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Galectin Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Galectin Therapeutics Inc. - Units",
  "Symbol": "GALTU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Galectin Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Galectin Therapeutics Inc. - Warrants",
  "Symbol": "GALTW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Shanda Games Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Shanda Games Limited - American Depositary Shares representing 2 Class A Ordinary Shares",
  "Symbol": "GAME",
  "Test Issue": "N"
  },
  {
  "Company Name": "Garrison Capital Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Garrison Capital Inc. - Common Stock",
  "Symbol": "GARS",
  "Test Issue": "N"
  },
  {
  "Company Name": "StealthGas, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "StealthGas, Inc. - common stock",
  "Symbol": "GASS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Glacier Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Glacier Bancorp, Inc. - Common Stock",
  "Symbol": "GBCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Golub Capital BDC, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Golub Capital BDC, Inc. - Common Stock",
  "Symbol": "GBDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "GlobeImmune, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "GlobeImmune, Inc. - Common Stock",
  "Symbol": "GBIM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Global Indemnity plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Global Indemnity plc - Class A Common Shares",
  "Symbol": "GBLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Guaranty Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Guaranty Bancorp - Common Stock",
  "Symbol": "GBNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Great Basin Scientific, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Great Basin Scientific, Inc. - Common Stock",
  "Symbol": "GBSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Greene County Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Greene County Bancorp, Inc. - Common Stock",
  "Symbol": "GCBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sanofi",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sanofi - Contingent Value Right (Expiring 12/31/2020)",
  "Symbol": "GCVRZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Global Defense & National Security Systems, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Global Defense & National Security Systems, Inc. - Common Stock",
  "Symbol": "GDEF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gencor Industries Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Gencor Industries Inc. - Common Stock",
  "Symbol": "GENC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Genetic Technologies Ltd",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Genetic Technologies Ltd - American Depositary Shares representing 30 ordinary shares",
  "Symbol": "GENE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Geospace Technologies Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Geospace Technologies Corporation - Common Stock",
  "Symbol": "GEOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Geron Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Geron Corporation - Common Stock",
  "Symbol": "GERN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synageva BioPharma Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Synageva BioPharma Corp. - Common Stock",
  "Symbol": "GEVA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gevo, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Gevo, Inc. - Common Stock",
  "Symbol": "GEVO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Guaranty Federal Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Guaranty Federal Bancshares, Inc. - Common Stock",
  "Symbol": "GFED",
  "Test Issue": "N"
  },
  {
  "Company Name": "General Finance Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "General Finance Corporation - Common Stock",
  "Symbol": "GFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "General Finance Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "General Finance Corporation - Cumulative Redeemable Perpetual Preferred Series C",
  "Symbol": "GFNCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "General Finance Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "General Finance Corporation - Senior Notes due 2021",
  "Symbol": "GFNSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Garnero Group Acquisition Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Garnero Group Acquisition Company - Ordinary Shares",
  "Symbol": "GGAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Garnero Group Acquisition Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Garnero Group Acquisition Company - Rights expiring 6/25/2016",
  "Symbol": "GGACR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Garnero Group Acquisition Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Garnero Group Acquisition Company - Units",
  "Symbol": "GGACU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Garnero Group Acquisition Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Garnero Group Acquisition Company - Warrant expiring 6/24/2019",
  "Symbol": "GGACW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Grupo Financiero Galicia S.A.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Grupo Financiero Galicia S.A. - American Depositary Shares, Class B Shares underlying",
  "Symbol": "GGAL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Genomic Health, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Genomic Health, Inc. - Common Stock",
  "Symbol": "GHDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gulf Island Fabrication, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gulf Island Fabrication, Inc. - Common Stock",
  "Symbol": "GIFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Giga",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Giga-tronics Incorporated - Common Stock",
  "Symbol": "GIGA",
  "Test Issue": "N"
  },
  {
  "Company Name": "GigaMedia Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "GigaMedia Limited - Ordinary Shares",
  "Symbol": "GIGM",
  "Test Issue": "N"
  },
  {
  "Company Name": "G",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "G-III Apparel Group, LTD. - Common Stock",
  "Symbol": "GIII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gilead Sciences, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gilead Sciences, Inc. - Common Stock",
  "Symbol": "GILD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gilat Satellite Networks Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gilat Satellite Networks Ltd. - Ordinary Shares",
  "Symbol": "GILT",
  "Test Issue": "N"
  },
  {
  "Company Name": "G&K Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "G&K Services, Inc. - Class A Common Stock",
  "Symbol": "GK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Geeknet, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Geeknet, Inc. - Common Stock",
  "Symbol": "GKNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Capital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Capital Corporation - Business Development Company",
  "Symbol": "GLAD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Capital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Capital Corporation - Term Preferred Shares, 6.75% Series 2021",
  "Symbol": "GLADO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Globus Maritime Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Globus Maritime Limited - Common Stock",
  "Symbol": "GLBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Glen Burnie Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Glen Burnie Bancorp - Common Stock",
  "Symbol": "GLBZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Golden Enterprises, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Golden Enterprises, Inc. - Common Stock",
  "Symbol": "GLDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Great Lakes Dredge & Dock Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Great Lakes Dredge & Dock Corporation - Common Stock",
  "Symbol": "GLDD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - Credit Suisse Gold Shares Covered Call Exchange Traded Notes",
  "Symbol": "GLDI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Galmed Pharmaceuticals Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Galmed Pharmaceuticals Ltd. - Ordinary Shares",
  "Symbol": "GLMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Golar LNG Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Golar LNG Limited - Common Shares",
  "Symbol": "GLNG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gaming and Leisure Properties, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gaming and Leisure Properties, Inc. - Common Stock",
  "Symbol": "GLPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Greenlight Reinsurance, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Greenlight Reinsurance, Ltd. - Class A Ordinary Shares",
  "Symbol": "GLRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Glori Energy Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Glori Energy Inc - Common Stock",
  "Symbol": "GLRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Glu Mobile Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Glu Mobile Inc. - Common Stock",
  "Symbol": "GLUU",
  "Test Issue": "N"
  },
  {
  "Company Name": "GlycoMimetics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "GlycoMimetics, Inc. - Common Stock",
  "Symbol": "GLYC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gordmans Stores, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gordmans Stores, Inc. - Common Stock",
  "Symbol": "GMAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Keurig Green Mountain, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Keurig Green Mountain, Inc. - Common Stock",
  "Symbol": "GMCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Golar LNG Partners LP",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Golar LNG Partners LP - Common Units Representing Limited Partnership",
  "Symbol": "GMLP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Green Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Green Bancorp, Inc. - Common Stock",
  "Symbol": "GNBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Genocea Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Genocea Biosciences, Inc. - Common Stock",
  "Symbol": "GNCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "General Communication, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "General Communication, Inc. - Class A Common Stock",
  "Symbol": "GNCMA",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares Core GNMA Bond ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares Core GNMA Bond ETF",
  "Symbol": "GNMA",
  "Test Issue": "N"
  },
  {
  "Company Name": "GenMark Diagnostics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "GenMark Diagnostics, Inc. - Common Stock",
  "Symbol": "GNMK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gentex Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gentex Corporation - Common Stock",
  "Symbol": "GNTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "GenVec, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "GenVec, Inc. - Common Stock",
  "Symbol": "GNVC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gogo Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gogo Inc. - Common Stock",
  "Symbol": "GOGO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Randgold Resources Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Randgold Resources Limited - American Depositary Shares each represented by one Ordinary Share",
  "Symbol": "GOLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sungy Mobile Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sungy Mobile Limited - American Depositary Shares",
  "Symbol": "GOMO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Commercial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Commercial Corporation - Real Estate Investment Trust",
  "Symbol": "GOOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Commercial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Commercial Corporation - 7.125% Series C Cumulative Term Preferred Stock",
  "Symbol": "GOODN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Commercial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Commercial Corporation - 7.50% Series B Cumulative Redeemable Preferred Stock",
  "Symbol": "GOODO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Commercial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Commercial Corporation - 7.75% Series A Cumulative Redeemable Preferred Stock",
  "Symbol": "GOODP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Google Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Google Inc. - Class C Capital Stock",
  "Symbol": "GOOG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Google Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Google Inc. - Class A Common Stock",
  "Symbol": "GOOGL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gaming Partners International Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Gaming Partners International Corporation - Common Stock",
  "Symbol": "GPIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gulfport Energy Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gulfport Energy Corporation - Common Stock",
  "Symbol": "GPOR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Green Plains, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Green Plains, Inc. - Common Stock",
  "Symbol": "GPRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "GoPro, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "GoPro, Inc. - Class A Common Stock",
  "Symbol": "GPRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Green Brick Partners, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Green Brick Partners, Inc. - Common Stock",
  "Symbol": "GRBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Grifols, S.A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Grifols, S.A. - American Depositary Shares",
  "Symbol": "GRFS",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ Clean Edge Smart Grid Infrastructure Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ Clean Edge Smart Grid Infrastructure Index Fund",
  "Symbol": "GRID",
  "Test Issue": "N"
  },
  {
  "Company Name": "Griffin Land & Nurseries, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Griffin Land & Nurseries, Inc. - Common Stock",
  "Symbol": "GRIF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Garmin Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Garmin Ltd. - Common Stock",
  "Symbol": "GRMN",
  "Test Issue": "N"
  },
  {
  "Company Name": "U.S. Global Investors, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "U.S. Global Investors, Inc. - Class A Common Stock",
  "Symbol": "GROW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Groupon, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Groupon, Inc. - Class A Common Stock",
  "Symbol": "GRPN",
  "Test Issue": "N"
  },
  {
  "Company Name": "GRAVITY Co., Ltd.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "GRAVITY Co., Ltd. - American depositary shares, each representing one-fourth of a share of common stock",
  "Symbol": "GRVY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Great Southern Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Great Southern Bancorp, Inc. - Common Stock",
  "Symbol": "GSBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "GSI Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "GSI Group, Inc. - Common Stock",
  "Symbol": "GSIG",
  "Test Issue": "N"
  },
  {
  "Company Name": "GSI Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "GSI Technology, Inc. - Common Stock",
  "Symbol": "GSIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Globe Specialty Metals Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Globe Specialty Metals Inc. - Common Stock",
  "Symbol": "GSM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Global Sources Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Global Sources Ltd. - Common Stock",
  "Symbol": "GSOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "GSV Capital Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "GSV Capital Corp - Common Stock",
  "Symbol": "GSVC",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Goodyear Tire & Rubber Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Goodyear Tire & Rubber Company - Common Stock",
  "Symbol": "GT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Good Times Restaurants Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Good Times Restaurants Inc. - Common Stock",
  "Symbol": "GTIM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gentiva Health Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gentiva Health Services, Inc. - Common Stock",
  "Symbol": "GTIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chart Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Chart Industries, Inc. - Common Stock",
  "Symbol": "GTLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Georgetown Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Georgetown Bancorp, Inc. - Common Stock",
  "Symbol": "GTWN",
  "Test Issue": "N"
  },
  {
  "Company Name": "GTx, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "GTx, Inc. - Common Stock",
  "Symbol": "GTXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Guidance Software, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Guidance Software, Inc. - Common Stock",
  "Symbol": "GUID",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Middle East Dividend Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Middle East Dividend Fund",
  "Symbol": "GULF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gulf Coast Ultra Deep Royalty Trust",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Gulf Coast Ultra Deep Royalty Trust - Royalty Trust Unit",
  "Symbol": "GULTU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gulf Resources, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gulf Resources, Inc. - Common Stock",
  "Symbol": "GURE",
  "Test Issue": "N"
  },
  {
  "Company Name": "GWG Holdings, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "GWG Holdings, Inc - Common Stock",
  "Symbol": "GWGH",
  "Test Issue": "N"
  },
  {
  "Company Name": "GW Pharmaceuticals Plc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "GW Pharmaceuticals Plc - American Depositary Shares",
  "Symbol": "GWPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gyrodyne Company of America, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Gyrodyne Company of America, Inc. - Common Stock",
  "Symbol": "GYRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hawaiian Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hawaiian Holdings, Inc. - Common Stock",
  "Symbol": "HA",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Habit Restaurants, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "The Habit Restaurants, Inc. - Class A Common Stock",
  "Symbol": "HABT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hanmi Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hanmi Financial Corporation - Common Stock",
  "Symbol": "HAFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Hain Celestial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Hain Celestial Group, Inc. - Common Stock",
  "Symbol": "HAIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hallmark Financial Services, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Hallmark Financial Services, Inc. - Common Stock",
  "Symbol": "HALL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Halozyme Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Halozyme Therapeutics, Inc. - Common Stock",
  "Symbol": "HALO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Harvard Apparatus Regenerative Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Harvard Apparatus Regenerative Technology, Inc. - Common Stock",
  "Symbol": "HART",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hasbro, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hasbro, Inc. - Common Stock",
  "Symbol": "HAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blackhawk Network Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Blackhawk Network Holdings, Inc. - Class A Common Stock",
  "Symbol": "HAWK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blackhawk Network Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Blackhawk Network Holdings, Inc. - Class B Common Stock",
  "Symbol": "HAWKB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Haynes International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Haynes International, Inc. - Common Stock",
  "Symbol": "HAYN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Huntington Bancshares Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Huntington Bancshares Incorporated - Common Stock",
  "Symbol": "HBAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Huntington Bancshares Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 10,
  "Security Name": "Huntington Bancshares Incorporated - Non Cumulative Perp Conv Pfd Ser A",
  "Symbol": "HBANP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Home Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Home Bancorp, Inc. - Common Stock",
  "Symbol": "HBCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hancock Holding Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hancock Holding Company - Common Stock",
  "Symbol": "HBHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Harvard Bioscience, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Harvard Bioscience, Inc. - Common Stock",
  "Symbol": "HBIO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hamilton Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hamilton Bancorp, Inc. - Common Stock",
  "Symbol": "HBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Howard Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Howard Bancorp, Inc. - Common Stock",
  "Symbol": "HBMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Horizon Bancorp (IN)",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Horizon Bancorp (IN) - Common Stock",
  "Symbol": "HBNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hampden Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Hampden Bancorp, Inc. - common stock",
  "Symbol": "HBNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heritage Financial Group",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Heritage Financial Group - Common Stock",
  "Symbol": "HBOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Huttig Building Products, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Huttig Building Products, Inc. - Common Stock",
  "Symbol": "HBP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hennessy Capital Acquisition Corp.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hennessy Capital Acquisition Corp. - Common Stock",
  "Symbol": "HCAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hennessy Capital Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hennessy Capital Acquisition Corp. - Unit",
  "Symbol": "HCACU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hennessy Capital Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hennessy Capital Acquisition Corp. - Warrant",
  "Symbol": "HCACW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Harvest Capital Credit Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Harvest Capital Credit Corporation - Common Stock",
  "Symbol": "HCAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hudson City Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hudson City Bancorp, Inc. - Common Stock",
  "Symbol": "HCBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heritage",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Heritage-Crystal Clean, Inc. - Common Stock",
  "Symbol": "HCCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Hackett Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Hackett Group, Inc. - Common Stock",
  "Symbol": "HCKT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hawaiian Telcom Holdco, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hawaiian Telcom Holdco, Inc. - Common Stock",
  "Symbol": "HCOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Healthcare Services Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Healthcare Services Group, Inc. - Common Stock",
  "Symbol": "HCSG",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Realty Capital Healthcare Trust, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Realty Capital Healthcare Trust, Inc. - Common Stock",
  "Symbol": "HCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hardinge, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hardinge, Inc. - Common Stock",
  "Symbol": "HDNG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hortonworks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hortonworks, Inc. - Common Stock",
  "Symbol": "HDP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hydra Industries Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hydra Industries Acquisition Corp. - Common Stock",
  "Symbol": "HDRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hydra Industries Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hydra Industries Acquisition Corp. - Rights",
  "Symbol": "HDRAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hydra Industries Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hydra Industries Acquisition Corp. - Units",
  "Symbol": "HDRAU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hydra Industries Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hydra Industries Acquisition Corp. - Warrants",
  "Symbol": "HDRAW",
  "Test Issue": "N"
  },
  {
  "Company Name": "HD Supply Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "HD Supply Holdings, Inc. - Common Stock",
  "Symbol": "HDS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hudson Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hudson Technologies, Inc. - Common Stock",
  "Symbol": "HDSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Turtle Beach Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Turtle Beach Corporation - Common Stock",
  "Symbol": "HEAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "H&E Equipment Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "H&E Equipment Services, Inc. - Common Stock",
  "Symbol": "HEES",
  "Test Issue": "N"
  },
  {
  "Company Name": "Helen of Troy Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Helen of Troy Limited - Common Stock",
  "Symbol": "HELE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heritage Oaks Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Heritage Oaks Bancorp - Common Stock",
  "Symbol": "HEOP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hercules Offshore, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hercules Offshore, Inc. - Common Stock",
  "Symbol": "HERO",
  "Test Issue": "N"
  },
  {
  "Company Name": "HopFed Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "HopFed Bancorp, Inc. - Common Stock",
  "Symbol": "HFBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Home Federal Bancorp, Inc. of Louisiana",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Home Federal Bancorp, Inc. of Louisiana - Common Stock",
  "Symbol": "HFBL",
  "Test Issue": "N"
  },
  {
  "Company Name": "HF Financial Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "HF Financial Corp. - Common Stock",
  "Symbol": "HFFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heritage Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Heritage Financial Corporation - Common Stock",
  "Symbol": "HFWA",
  "Test Issue": "N"
  },
  {
  "Company Name": "China HGS Real Estate, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "China HGS Real Estate, Inc. - Common Stock",
  "Symbol": "HGSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hibbett Sports, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hibbett Sports, Inc. - Common Stock",
  "Symbol": "HIBB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hingham Institution for Savings",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Hingham Institution for Savings - Common Stock",
  "Symbol": "HIFS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Highway Holdings Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Highway Holdings Limited - Common Stock",
  "Symbol": "HIHO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Health Insurance Innovations, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Health Insurance Innovations, Inc. - Class A Common Stock",
  "Symbol": "HIIQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dot Hill Systems Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Dot Hill Systems Corporation - Common Stock",
  "Symbol": "HILL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Himax Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Himax Technologies, Inc. - American depositary shares, each of which represents two ordinary shares.",
  "Symbol": "HIMX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hong Kong Television Network Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hong Kong Television Network Limited - American Depositary Shares, each representing 20 Ordinary Shares",
  "Symbol": "HKTV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Harmonic Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Harmonic Inc. - Common Stock",
  "Symbol": "HLIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Home Loan Servicing Solutions, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Home Loan Servicing Solutions, Ltd. - Ordinary Shares",
  "Symbol": "HLSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Houghton Mifflin Harcourt Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Houghton Mifflin Harcourt Company - Common Stock",
  "Symbol": "HMHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Homeinns Hotel Group",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Homeinns Hotel Group - American Depositary Shares, each representing two ordinary shares",
  "Symbol": "HMIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "HMN Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "HMN Financial, Inc. - Common Stock",
  "Symbol": "HMNF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Helios and Matheson Analytics Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Helios and Matheson Analytics Inc - Common Stock",
  "Symbol": "HMNY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hampton Roads Bankshares Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hampton Roads Bankshares Inc - Common Stock",
  "Symbol": "HMPR",
  "Test Issue": "N"
  },
  {
  "Company Name": "HomeStreet, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "HomeStreet, Inc. - Common Stock",
  "Symbol": "HMST",
  "Test Issue": "N"
  },
  {
  "Company Name": "HMS Holdings Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "HMS Holdings Corp - Common Stock",
  "Symbol": "HMSY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hemisphere Media Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Hemisphere Media Group, Inc. - Class A Common Stock",
  "Symbol": "HMTV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Handy & Harman Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Handy & Harman Ltd. - Common Stock",
  "Symbol": "HNH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hennessy Advisors, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hennessy Advisors, Inc. - Common Stock",
  "Symbol": "HNNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hallador Energy Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Hallador Energy Company - Common Stock",
  "Symbol": "HNRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hansen Medical, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Hansen Medical, Inc. - Common Stock",
  "Symbol": "HNSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hooker Furniture Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hooker Furniture Corporation - Common Stock",
  "Symbol": "HOFT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hollysys Automation Technologies, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hollysys Automation Technologies, Ltd. - Common Stock",
  "Symbol": "HOLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hologic, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hologic, Inc. - Common Stock",
  "Symbol": "HOLX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Home BancShares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Home BancShares, Inc. - common stock",
  "Symbol": "HOMB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chanticleer Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Chanticleer Holdings, Inc. - Common Stock",
  "Symbol": "HOTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Chanticleer Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Chanticleer Holdings, Inc. - Warrants",
  "Symbol": "HOTRW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hovnanian Enterprises Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Hovnanian Enterprises Inc - Depositary Share representing 1/1000th of 7.625% Series A Preferred Stock",
  "Symbol": "HOVNP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Highpower International Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Highpower International Inc - Common Stock",
  "Symbol": "HPJ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hyperion Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hyperion Therapeutics, Inc. - Common Stock",
  "Symbol": "HPTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "HealthEquity, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "HealthEquity, Inc. - Common Stock",
  "Symbol": "HQY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heron Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Heron Therapeutics, Inc.   - Common Stock",
  "Symbol": "HRTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Horizon Technology Finance Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Horizon Technology Finance Corporation - Common Stock",
  "Symbol": "HRZN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Histogenics Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Histogenics Corporation - Common Stock",
  "Symbol": "HSGX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Henry Schein, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Henry Schein, Inc. - Common Stock",
  "Symbol": "HSIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heidrick & Struggles International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Heidrick & Struggles International, Inc. - Common Stock",
  "Symbol": "HSII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heska Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Heska Corporation - Common Stock",
  "Symbol": "HSKA",
  "Test Issue": "N"
  },
  {
  "Company Name": "HSN, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "HSN, Inc. - Common Stock",
  "Symbol": "HSNI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hanwha SolarOne Co., Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hanwha SolarOne Co., Ltd. - American Depository Shares, each representing five ordinary shares",
  "Symbol": "HSOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hudson Global, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hudson Global, Inc. - Common Stock",
  "Symbol": "HSON",
  "Test Issue": "N"
  },
  {
  "Company Name": "HealthStream, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "HealthStream, Inc. - Common Stock",
  "Symbol": "HSTM",
  "Test Issue": "N"
  },
  {
  "Company Name": "HomeTrust Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "HomeTrust Bancshares, Inc. - Common Stock",
  "Symbol": "HTBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heritage Commerce Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Heritage Commerce Corp - Common Stock",
  "Symbol": "HTBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heat Biologics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Heat Biologics, Inc. - Common Stock",
  "Symbol": "HTBX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hutchinson Technology Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hutchinson Technology Incorporated - Common Stock",
  "Symbol": "HTCH",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Lodging Group, Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "China Lodging Group, Limited - American Depositary Shares, each representing four Ordinary Shares",
  "Symbol": "HTHT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heartland Express, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Heartland Express, Inc. - Common Stock",
  "Symbol": "HTLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heartland Financial USA, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Heartland Financial USA, Inc. - Common Stock",
  "Symbol": "HTLF",
  "Test Issue": "N"
  },
  {
  "Company Name": "HF2 Financial Management Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "HF2 Financial Management Inc. - Class A Common Stock",
  "Symbol": "HTWO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Heartware International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Heartware International, Inc. - Common Stock",
  "Symbol": "HTWR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hub Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hub Group, Inc. - Class A Common Stock",
  "Symbol": "HUBG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hurco Companies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hurco Companies, Inc. - Common Stock",
  "Symbol": "HURC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Huron Consulting Group Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Huron Consulting Group Inc. - Common Stock",
  "Symbol": "HURN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Healthways, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Healthways, Inc. - Common Stock",
  "Symbol": "HWAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hawthorn Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hawthorn Bancshares, Inc. - Common Stock",
  "Symbol": "HWBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Houston Wire & Cable Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Houston Wire & Cable Company - Common Stock",
  "Symbol": "HWCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hawkins, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Hawkins, Inc. - Common Stock",
  "Symbol": "HWKN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Hydrogenics Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Hydrogenics Corporation - Common Shares",
  "Symbol": "HYGS",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust High Yield Long/Short ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust High Yield Long/Short ETF",
  "Symbol": "HYLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree BofA Merrill Lynch High Yield Bond Negative Duration Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree BofA Merrill Lynch High Yield Bond Negative Duration Fund",
  "Symbol": "HYND",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree BofA Merrill Lynch High Yield Bond Zero Duration Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree BofA Merrill Lynch High Yield Bond Zero Duration Fund",
  "Symbol": "HYZD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Horizon Pharma plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Horizon Pharma plc - common stock",
  "Symbol": "HZNP",
  "Test Issue": "N"
  },
  {
  "Company Name": "IAC/InterActiveCorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "IAC/InterActiveCorp - Common Stock",
  "Symbol": "IACI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Integra LifeSciences Holdings Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Integra LifeSciences Holdings Corporation - Common Stock",
  "Symbol": "IART",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares Nasdaq Biotechnology Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares Nasdaq Biotechnology Index Fund",
  "Symbol": "IBB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intervest Bancshares Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intervest Bancshares Corp. - Common Stock",
  "Symbol": "IBCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Independent Bank Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Independent Bank Corporation - Common Stock",
  "Symbol": "IBCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "IBERIABANK Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "IBERIABANK Corporation - Common Stock",
  "Symbol": "IBKC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Interactive Brokers Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Interactive Brokers Group, Inc. - Common Stock",
  "Symbol": "IBKR",
  "Test Issue": "N"
  },
  {
  "Company Name": "International Bancshares Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "International Bancshares Corporation - Common Stock",
  "Symbol": "IBOC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Independent Bank Group, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Independent Bank Group, Inc - Common Stock",
  "Symbol": "IBTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "icad inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "icad inc. - Common Stock",
  "Symbol": "ICAD",
  "Test Issue": "N"
  },
  {
  "Company Name": "ImmuCell Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ImmuCell Corporation - Common Stock",
  "Symbol": "ICCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cellular Dynamics International, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Cellular Dynamics International, Inc. - Common Stock",
  "Symbol": "ICEL",
  "Test Issue": "N"
  },
  {
  "Company Name": "ICF International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ICF International, Inc. - Common Stock",
  "Symbol": "ICFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "InterCloud Systems, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "InterCloud Systems, Inc - Common Stock",
  "Symbol": "ICLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "InterCloud Systems, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "InterCloud Systems, Inc - Warrant",
  "Symbol": "ICLDW",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares S&P Global Clean Energy Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares S&P Global Clean Energy Index Fund",
  "Symbol": "ICLN",
  "Test Issue": "N"
  },
  {
  "Company Name": "ICON plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ICON plc - Ordinary Shares",
  "Symbol": "ICLR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Iconix Brand Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Iconix Brand Group, Inc. - Common Stock",
  "Symbol": "ICON",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intercept Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intercept Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ICPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "ICU Medical, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ICU Medical, Inc. - Common Stock",
  "Symbol": "ICUI",
  "Test Issue": "N"
  },
  {
  "Company Name": "InterDigital, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "InterDigital, Inc. - Common Stock",
  "Symbol": "IDCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Idera Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Idera Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "IDRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Industrial Services of America, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Industrial Services of America, Inc. - Common Stock",
  "Symbol": "IDSA",
  "Test Issue": "N"
  },
  {
  "Company Name": "I.D. Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "I.D. Systems, Inc. - Common Stock",
  "Symbol": "IDSY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Integrated Device Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Integrated Device Technology, Inc. - Common Stock",
  "Symbol": "IDTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "IDEXX Laboratories, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "IDEXX Laboratories, Inc. - Common Stock",
  "Symbol": "IDXX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Icahn Enterprises L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Icahn Enterprises L.P. - Depositary units",
  "Symbol": "IEP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Integrated Electrical Services, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Integrated Electrical Services, Inc. - Common Stock",
  "Symbol": "IESC",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Europe Small",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Europe Small-Cap ETF",
  "Symbol": "IEUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares FTSE EPRA/NAREIT Asia Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares FTSE EPRA/NAREIT Asia Index Fund",
  "Symbol": "IFAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares FTSE EPRA/NAREIT Europe Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares FTSE EPRA/NAREIT Europe Index Fund",
  "Symbol": "IFEU",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares FTSE EPRA/NAREIT Global Real Estate ex",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares FTSE EPRA/NAREIT Global Real Estate ex-U.S. Index Fund",
  "Symbol": "IFGL",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares FTSE EPRA/NAREIT North America Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares FTSE EPRA/NAREIT North America Index Fund",
  "Symbol": "IFNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "InfoSonics Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "InfoSonics Corp - Common Stock",
  "Symbol": "IFON",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Dorsey Wright International Focus 5 ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Dorsey Wright International Focus 5 ETF",
  "Symbol": "IFV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Internet Gold Golden Lines Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Internet Gold Golden Lines Ltd. - Ordinary Shares",
  "Symbol": "IGLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares S&P/Citigroup International Treasury Bond Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares S&P/Citigroup International Treasury Bond Fund",
  "Symbol": "IGOV",
  "Test Issue": "N"
  },
  {
  "Company Name": "iGATE Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "iGATE Corporation - Common Stock",
  "Symbol": "IGTE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Information Services Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Information Services Group, Inc. - Common Stock",
  "Symbol": "III",
  "Test Issue": "N"
  },
  {
  "Company Name": "Insteel Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Insteel Industries, Inc. - Common Stock",
  "Symbol": "IIIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Internet Initiative Japan, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Internet Initiative Japan, Inc. - ADS represents common stock",
  "Symbol": "IIJI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Interval Leisure Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Interval Leisure Group, Inc. - Common Stock",
  "Symbol": "IILG",
  "Test Issue": "N"
  },
  {
  "Company Name": "IntriCon Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "IntriCon Corporation - Common Stock",
  "Symbol": "IIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "II",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "II-VI Incorporated - Common Stock",
  "Symbol": "IIVI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ikanos Communications, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ikanos Communications, Inc. - Common Stock",
  "Symbol": "IKAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Iao Kun Group Holding Company Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Iao Kun Group Holding Company Limited - Ordinary Shares (Cayman Islands)",
  "Symbol": "IKGH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ikonics Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ikonics Corporation - Common Stock",
  "Symbol": "IKNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Illumina, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Illumina, Inc. - Common Stock",
  "Symbol": "ILMN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Immune Design Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Immune Design Corp. - Common Stock",
  "Symbol": "IMDZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "ImmunoGen, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ImmunoGen, Inc. - Common Stock",
  "Symbol": "IMGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intermolecular, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intermolecular, Inc. - Common Stock",
  "Symbol": "IMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ingles Markets, Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ingles Markets, Incorporated - Class A Common Stock",
  "Symbol": "IMKTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Immersion Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Immersion Corporation - Common Stock",
  "Symbol": "IMMR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Immunomedics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Immunomedics, Inc. - Common Stock",
  "Symbol": "IMMU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Imprimis Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Imprimis Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "IMMY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Immune Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Immune Pharmaceuticals Inc. - Common Stock",
  "Symbol": "IMNP",
  "Test Issue": "N"
  },
  {
  "Company Name": "ChipMOS TECHNOLOGIES (Bermuda) LTD.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ChipMOS TECHNOLOGIES (Bermuda) LTD. - Common Shares",
  "Symbol": "IMOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Imris Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Imris Inc - Common Shares",
  "Symbol": "IMRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Internap Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Internap Corporation - Common Stock",
  "Symbol": "INAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Internet Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "First Internet Bancorp - Common Stock",
  "Symbol": "INBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "INC Research Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "INC Research Holdings, Inc. - Class A Common Stock",
  "Symbol": "INCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Incyte Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Incyte Corporation - Common Stock",
  "Symbol": "INCY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Independent Bank Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Independent Bank Corp. - Common Stock",
  "Symbol": "INDB",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares S&P India Nifty 50 Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares S&P India Nifty 50 Index Fund",
  "Symbol": "INDY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Informatica Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Informatica Corporation - Common Stock",
  "Symbol": "INFA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Infinity Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Infinity Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "INFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Infinera Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Infinera Corporation - Common Stock",
  "Symbol": "INFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Inogen, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Inogen, Inc - Common Stock",
  "Symbol": "INGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Interactive Intelligence Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Interactive Intelligence Group, Inc. - Common Stock",
  "Symbol": "ININ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Innocoll AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Innocoll AG - American Depositary Share",
  "Symbol": "INNL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Inovio Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Inovio Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "INO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Innodata Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Innodata Inc. - Common Stock",
  "Symbol": "INOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Interphase Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Interphase Corporation - Common Stock",
  "Symbol": "INPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Insmed, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Insmed, Inc. - Common Stock",
  "Symbol": "INSM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Insys Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Insys Therapeutics, Inc. - Common Stock",
  "Symbol": "INSY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intel Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intel Corporation - Common Stock",
  "Symbol": "INTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Intergroup Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "The Intergroup Corporation - Common Stock",
  "Symbol": "INTG",
  "Test Issue": "N"
  },
  {
  "Company Name": "INTL FCStone Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "INTL FCStone Inc. - Common Stock",
  "Symbol": "INTL",
  "Test Issue": "N"
  },
  {
  "Company Name": "INTL FCStone Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "INTL FCStone Inc. - 8.5% Senior Notes Due 2020",
  "Symbol": "INTLL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intuit Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intuit Inc. - Common Stock",
  "Symbol": "INTU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intersections, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Intersections, Inc. - Common Stock",
  "Symbol": "INTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Identiv, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Identiv, Inc. - Common Stock",
  "Symbol": "INVE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Inventergy Global, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Inventergy Global, Inc. - Common Stock",
  "Symbol": "INVT",
  "Test Issue": "N"
  },
  {
  "Company Name": "InnerWorkings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "InnerWorkings, Inc. - Common Stock",
  "Symbol": "INWK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Innospec Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Innospec Inc. - Common Stock",
  "Symbol": "IOSP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Inter Parfums, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Inter Parfums, Inc. - Common Stock",
  "Symbol": "IPAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "iPass Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "iPass Inc. - Common Stock",
  "Symbol": "IPAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Infinity Property and Casualty Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Infinity Property and Casualty Corporation - Common Stock",
  "Symbol": "IPCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intellipharmaceutics International Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Intellipharmaceutics International Inc. - Common Stock",
  "Symbol": "IPCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "IPC Healthcare, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "IPC Healthcare, Inc. - Common Stock",
  "Symbol": "IPCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Professional Diversity Network, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Professional Diversity Network, Inc. - Common Stock",
  "Symbol": "IPDN",
  "Test Issue": "N"
  },
  {
  "Company Name": "IPG Photonics Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "IPG Photonics Corporation - Common Stock",
  "Symbol": "IPGP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Innophos Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Innophos Holdings, Inc. - Common Stock",
  "Symbol": "IPHS",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares International BuyBack Achievers Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares International BuyBack Achievers Portfolio",
  "Symbol": "IPKW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ideal Power Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ideal Power Inc. - Common Stock",
  "Symbol": "IPWR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Impax Laboratories, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Impax Laboratories, Inc. - Common Stock",
  "Symbol": "IPXL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Inteliquent, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Inteliquent, Inc. - Common Stock",
  "Symbol": "IQNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "iRobot Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "iRobot Corporation - Common Stock",
  "Symbol": "IRBT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Iridium Communications Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Iridium Communications Inc - Common Stock",
  "Symbol": "IRDM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Iridium Communications Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Iridium Communications Inc - 6.75% Series B Cumulative Perpetual Convertible Preferred Stock",
  "Symbol": "IRDMB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Iridium Communications Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Iridium Communications Inc - Warrants 02/14/2015",
  "Symbol": "IRDMZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ignite Restaurant Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ignite Restaurant Group, Inc. - Common Stock",
  "Symbol": "IRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "IRIDEX Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "IRIDEX Corporation - Common Stock",
  "Symbol": "IRIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "iRadimed Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "iRadimed Corporation - Common Stock",
  "Symbol": "IRMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "IF Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "IF Bancorp, Inc. - Common Stock",
  "Symbol": "IROQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ironwood Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ironwood Pharmaceuticals, Inc. - Class A Common Stock",
  "Symbol": "IRWD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Investors Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Investors Bancorp, Inc. - Common Stock",
  "Symbol": "ISBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "International Speedway Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "International Speedway Corporation - Class A Common Stock",
  "Symbol": "ISCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares S&P/Citigroup 1",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares S&P/Citigroup 1-3 Year International Treasury Bond Fund",
  "Symbol": "ISHG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Insignia Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Insignia Systems, Inc. - Common Stock",
  "Symbol": "ISIG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intersil Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intersil Corporation - Class A Common Stock",
  "Symbol": "ISIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Isis Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Isis Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "ISIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Isle of Capri Casinos, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Isle of Capri Casinos, Inc. - Common Stock",
  "Symbol": "ISLE",
  "Test Issue": "N"
  },
  {
  "Company Name": "SLM Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SLM Corporation - Medium Term Notes, Series A, CPI-Linked Notes due January 16, 2018",
  "Symbol": "ISM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Image Sensing Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Image Sensing Systems, Inc. - Common Stock",
  "Symbol": "ISNS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intuitive Surgical, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intuitive Surgical, Inc. - Common Stock",
  "Symbol": "ISRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Isramco, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Isramco, Inc. - Common Stock",
  "Symbol": "ISRL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Innovative Solutions and Support, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Innovative Solutions and Support, Inc. - Common Stock",
  "Symbol": "ISSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Integrated Silicon Solution, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Integrated Silicon Solution, Inc. - Common Stock",
  "Symbol": "ISSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Investar Holding Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Investar Holding Corporation - Common Stock",
  "Symbol": "ISTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intra",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intra-Cellular Therapies Inc. - Common Stock",
  "Symbol": "ITCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Investors Title Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Investors Title Company - Common Stock",
  "Symbol": "ITIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Itron, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Itron, Inc. - Common Stock",
  "Symbol": "ITRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ituran Location and Control Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ituran Location and Control Ltd. - Ordinary Shares",
  "Symbol": "ITRN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intevac, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Intevac, Inc. - Common Stock",
  "Symbol": "IVAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ivanhoe Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ivanhoe Energy, Inc. - Common Shares",
  "Symbol": "IVAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "IXYS Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "IXYS Corporation - Common Stock",
  "Symbol": "IXYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jack In The Box Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Jack In The Box Inc. - Common Stock",
  "Symbol": "JACK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Collabrium Japan Acquisition Corporation",
  "Financial Status": "H",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Collabrium Japan Acquisition Corporation - Ordinary Shares",
  "Symbol": "JACQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Collabrium Japan Acquisition Corporation",
  "Financial Status": "H",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Collabrium Japan Acquisition Corporation - Units",
  "Symbol": "JACQU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Collabrium Japan Acquisition Corporation",
  "Financial Status": "H",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Collabrium Japan Acquisition Corporation - Warrant",
  "Symbol": "JACQW",
  "Test Issue": "N"
  },
  {
  "Company Name": "JAKKS Pacific, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "JAKKS Pacific, Inc. - Common Stock",
  "Symbol": "JAKK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jason Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Jason Industries, Inc. - Common Stock",
  "Symbol": "JASN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jason Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Jason Industries, Inc. - Warrant",
  "Symbol": "JASNW",
  "Test Issue": "N"
  },
  {
  "Company Name": "JA Solar Holdings, Co., Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "JA Solar Holdings, Co., Ltd. - American depositary shares, each representing five ordinary shares",
  "Symbol": "JASO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jacksonville Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Jacksonville Bancorp, Inc. - Common Stock (Voting)",
  "Symbol": "JAXB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jazz Pharmaceuticals plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Jazz Pharmaceuticals plc - Ordinary Shares",
  "Symbol": "JAZZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "J.B. Hunt Transport Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "J.B. Hunt Transport Services, Inc. - Common Stock",
  "Symbol": "JBHT",
  "Test Issue": "N"
  },
  {
  "Company Name": "JetBlue Airways Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "JetBlue Airways Corporation - Common Stock",
  "Symbol": "JBLU",
  "Test Issue": "N"
  },
  {
  "Company Name": "John B. Sanfilippo & Son, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "John B. Sanfilippo & Son, Inc. - Common Stock",
  "Symbol": "JBSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "j2 Global, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "j2 Global, Inc. - Common Stock",
  "Symbol": "JCOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Communications Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Communications Systems, Inc. - Common Stock",
  "Symbol": "JCS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jewett",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Jewett-Cameron Trading Company - Common Shares",
  "Symbol": "JCTCF",
  "Test Issue": "N"
  },
  {
  "Company Name": "JD.com, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "JD.com, Inc. - American Depositary Shares",
  "Symbol": "JD",
  "Test Issue": "N"
  },
  {
  "Company Name": "JDS Uniphase Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "JDS Uniphase Corporation - Common Stock",
  "Symbol": "JDSU",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Japan Interest Rate Strategy Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Japan Interest Rate Strategy Fund",
  "Symbol": "JGBB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jive Software, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Jive Software, Inc. - Common Stock",
  "Symbol": "JIVE",
  "Test Issue": "N"
  },
  {
  "Company Name": "J & J Snack Foods Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "J & J Snack Foods Corp. - Common Stock",
  "Symbol": "JJSF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jack Henry & Associates, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Jack Henry & Associates, Inc. - Common Stock",
  "Symbol": "JKHY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jamba, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Jamba, Inc. - Common Stock",
  "Symbol": "JMBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "51job, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "51job, Inc. - American Depositary Shares, each representing two common shares",
  "Symbol": "JOBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Joe's Jeans Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Joe's Jeans Inc. - Common Stock",
  "Symbol": "JOEZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Johnson Outdoors Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Johnson Outdoors Inc. - Class A Common Stock",
  "Symbol": "JOUT",
  "Test Issue": "N"
  },
  {
  "Company Name": "China Finance Online Co. Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "China Finance Online Co. Limited - American Depositary Shares representing 5 ordinary shares",
  "Symbol": "JRJC",
  "Test Issue": "N"
  },
  {
  "Company Name": "James River Group Holdings, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "James River Group Holdings, Ltd. - Common Shares",
  "Symbol": "JRVR",
  "Test Issue": "N"
  },
  {
  "Company Name": "SLM Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SLM Corporation - 6% Senior Notes due December 15, 2043",
  "Symbol": "JSM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jinpan International Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Jinpan International Limited - Common Stock",
  "Symbol": "JST",
  "Test Issue": "N"
  },
  {
  "Company Name": "JetPay Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "JetPay Corporation - Common Stock",
  "Symbol": "JTPY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Juno Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Juno Therapeutics, Inc. - Common Stock",
  "Symbol": "JUNO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Coffee Holding Co., Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Coffee Holding Co., Inc. - Common Stock",
  "Symbol": "JVA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Jacksonville Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Jacksonville Bancorp Inc. - Common Stock",
  "Symbol": "JXSB",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Joint Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "The Joint Corp. - Common Stock",
  "Symbol": "JYNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kaiser Aluminum Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kaiser Aluminum Corporation - Common Stock",
  "Symbol": "KALU",
  "Test Issue": "N"
  },
  {
  "Company Name": "iKang Healthcare Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "iKang Healthcare Group, Inc. - American Depositary Shares",
  "Symbol": "KANG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kimball International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kimball International, Inc. - Class B Common Stock",
  "Symbol": "KBAL",
  "Test Issue": "N"
  },
  {
  "Company Name": "KaloBios Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "KaloBios Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "KBIO",
  "Test Issue": "N"
  },
  {
  "Company Name": "KBS Fashion Group Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "KBS Fashion Group Limited - Common Stock",
  "Symbol": "KBSF",
  "Test Issue": "N"
  },
  {
  "Company Name": "KCAP Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "KCAP Financial, Inc. - common stock",
  "Symbol": "KCAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kansas City Life Insurance Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Kansas City Life Insurance Company - Common Stock",
  "Symbol": "KCLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kimball Electronics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kimball Electronics, Inc. - Common Stock",
  "Symbol": "KE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kelly Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kelly Services, Inc. - Class A Common Stock",
  "Symbol": "KELYA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kelly Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kelly Services, Inc. - Class B Common Stock",
  "Symbol": "KELYB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kewaunee Scientific Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Kewaunee Scientific Corporation - Common Stock",
  "Symbol": "KEQU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Keryx Biopharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Keryx Biopharmaceuticals, Inc. - Common Stock",
  "Symbol": "KERX",
  "Test Issue": "N"
  },
  {
  "Company Name": "The KEYW Holding Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The KEYW Holding Corporation - Common Stock",
  "Symbol": "KEYW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kentucky First Federal Bancorp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Kentucky First Federal Bancorp - Common Stock",
  "Symbol": "KFFB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kforce, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kforce, Inc. - Common Stock",
  "Symbol": "KFRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kofax Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kofax Limited - Common Shares",
  "Symbol": "KFX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kingold Jewelry Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Kingold Jewelry Inc. - Common Stock",
  "Symbol": "KGJI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kindred Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Kindred Biosciences, Inc. - Common Stock",
  "Symbol": "KIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kingstone Companies, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Kingstone Companies, Inc - Common Stock",
  "Symbol": "KINS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kirkland's, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kirkland's, Inc. - Common Stock",
  "Symbol": "KIRK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kite Pharma, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kite Pharma, Inc. - Common Stock",
  "Symbol": "KITE",
  "Test Issue": "N"
  },
  {
  "Company Name": "KLA",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "KLA-Tencor Corporation - Common Stock",
  "Symbol": "KLAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kulicke and Soffa Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kulicke and Soffa Industries, Inc. - Common Stock",
  "Symbol": "KLIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "KLX Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "KLX Inc. - Common Stock",
  "Symbol": "KLXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kamada Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kamada Ltd. - Ordinary Shares",
  "Symbol": "KMDA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kandi Technologies Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kandi Technologies Group, Inc. - Common Stock",
  "Symbol": "KNDI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kona Grill, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Kona Grill, Inc. - Common Stock",
  "Symbol": "KONA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kingtone Wirelessinfo Solution Holding Ltd",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Kingtone Wirelessinfo Solution Holding Ltd - American Depositary Shares",
  "Symbol": "KONE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Cesca Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Cesca Therapeutics Inc. - Common Stock",
  "Symbol": "KOOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kopin Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kopin Corporation - Common Stock",
  "Symbol": "KOPN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Koss Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Koss Corporation - Common Stock",
  "Symbol": "KOSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Karyopharm Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Karyopharm Therapeutics Inc. - Common Stock",
  "Symbol": "KPTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kraft Foods Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kraft Foods Group, Inc. - Common Stock",
  "Symbol": "KRFT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kearny Financial",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kearny Financial - Common Stock",
  "Symbol": "KRNY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Key Tronic Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Key Tronic Corporation - Common Stock",
  "Symbol": "KTCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Key Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Key Technology, Inc. - Common Stock",
  "Symbol": "KTEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kratos Defense & Security Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kratos Defense & Security Solutions, Inc. - Common Stock",
  "Symbol": "KTOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "K2M Group Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "K2M Group Holdings, Inc. - Common Stock",
  "Symbol": "KTWO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ku6 Media Co., Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ku6 Media Co., Ltd. - American Depositary Shares, each representing 100 ordinary shares",
  "Symbol": "KUTV",
  "Test Issue": "N"
  },
  {
  "Company Name": "KVH Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "KVH Industries, Inc. - Common Stock",
  "Symbol": "KVHI",
  "Test Issue": "N"
  },
  {
  "Company Name": "KraneShares CSI China Internet ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "KraneShares CSI China Internet ETF",
  "Symbol": "KWEB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Kythera Biopharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Kythera Biopharmaceuticals, Inc. - Common Stock",
  "Symbol": "KYTH",
  "Test Issue": "N"
  },
  {
  "Company Name": "KongZhong Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "KongZhong Corporation - American Depositary Shares, each representing 40 ordinary shares",
  "Symbol": "KZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Louisiana Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Louisiana Bancorp, Inc. - Common Stock",
  "Symbol": "LABC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Multi",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Multi-Color Corporation - Common Stock",
  "Symbol": "LABL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lakes Entertainment, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Lakes Entertainment, Inc. - Common Stock",
  "Symbol": "LACO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lakeland Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Lakeland Industries, Inc. - Common Stock",
  "Symbol": "LAKE",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares Actively Managed Exchange",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares Actively Managed Exchange-Traded Fund Trust - PowerShares Multi-Strategy Alternative Portfolio",
  "Symbol": "LALT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lamar Advertising Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lamar Advertising Company - Class A Common Stock",
  "Symbol": "LAMR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lancaster Colony Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lancaster Colony Corporation - Common Stock",
  "Symbol": "LANC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gladstone Land Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Gladstone Land Corporation - Common Stock",
  "Symbol": "LAND",
  "Test Issue": "N"
  },
  {
  "Company Name": "Landmark Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Landmark Bancorp Inc. - Common Stock",
  "Symbol": "LARK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lawson Products, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lawson Products, Inc. - Common Stock",
  "Symbol": "LAWS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Layne Christensen Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Layne Christensen Company - Common Stock",
  "Symbol": "LAYN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lakeland Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lakeland Bancorp, Inc. - Common Stock",
  "Symbol": "LBAI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Leading Brands Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Leading Brands Inc - Common Shares",
  "Symbol": "LBIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Broadband Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Broadband Corporation - Class A Common Stock",
  "Symbol": "LBRDA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Broadband Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Broadband Corporation - Class C Common Stock",
  "Symbol": "LBRDK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Broadband Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Broadband Corporation - Subscription Rights to Purchase Shares of Series C Common Stock",
  "Symbol": "LBRKR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Global plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Global plc - Class A Ordinary Shares",
  "Symbol": "LBTYA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Global plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Global plc - Class B Ordinary Shares",
  "Symbol": "LBTYB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Global plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Global plc - Class C Ordinary Shares",
  "Symbol": "LBTYK",
  "Test Issue": "N"
  },
  {
  "Company Name": "LCNB Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "LCNB Corporation - Common Stock",
  "Symbol": "LCNB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lifetime Brands, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lifetime Brands, Inc. - Common Stock",
  "Symbol": "LCUT",
  "Test Issue": "N"
  },
  {
  "Company Name": "LDR Holding Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LDR Holding Corporation - Common Stock",
  "Symbol": "LDRH",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares LadderRite 0",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares LadderRite 0-5 Year Corporate Bond Portfolio",
  "Symbol": "LDRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lands' End, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Lands' End, Inc. - Common Stock",
  "Symbol": "LE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lincoln Electric Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lincoln Electric Holdings, Inc. - Common Shares",
  "Symbol": "LECO",
  "Test Issue": "N"
  },
  {
  "Company Name": "SemiLEDS Corporation",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SemiLEDS Corporation - Common Stock",
  "Symbol": "LEDS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Levy Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Levy Acquisition Corp. - Common Stock",
  "Symbol": "LEVY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Levy Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Levy Acquisition Corp. - Unit",
  "Symbol": "LEVYU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Levy Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Levy Acquisition Corp. - Warrants",
  "Symbol": "LEVYW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Littelfuse, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Littelfuse, Inc. - Common Stock",
  "Symbol": "LFUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lifevantage Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Lifevantage Corporation - Common Stock",
  "Symbol": "LFVN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Legacy Reserves LP",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Legacy Reserves LP - Units Representing Limited Partner Interests",
  "Symbol": "LGCY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Legacy Reserves LP",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Legacy Reserves LP - 8.00% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units",
  "Symbol": "LGCYO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Legacy Reserves LP",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Legacy Reserves LP - 8% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units",
  "Symbol": "LGCYP",
  "Test Issue": "N"
  },
  {
  "Company Name": "LGI Homes, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LGI Homes, Inc. - Common Stock",
  "Symbol": "LGIH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ligand Pharmaceuticals Incorporated",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ligand Pharmaceuticals Incorporated - Common Stock",
  "Symbol": "LGND",
  "Test Issue": "N"
  },
  {
  "Company Name": "LHC Group",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LHC Group - common stock",
  "Symbol": "LHCG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lime Energy Co.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Lime Energy Co. - Common Stock",
  "Symbol": "LIME",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lincoln Educational Services Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lincoln Educational Services Corporation - Common Stock",
  "Symbol": "LINC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Linn Energy, LLC",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Linn Energy, LLC - Common Units representing limited liability company interests",
  "Symbol": "LINE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fidelity Southern Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Fidelity Southern Corporation - Common Stock",
  "Symbol": "LION",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lionbridge Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lionbridge Technologies, Inc. - Common Stock",
  "Symbol": "LIOX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liquid Holdings Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Liquid Holdings Group, Inc. - Common Stock",
  "Symbol": "LIQD",
  "Test Issue": "N"
  },
  {
  "Company Name": "LiveDeal, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "LiveDeal, Inc. - Common Stock",
  "Symbol": "LIVE",
  "Test Issue": "N"
  },
  {
  "Company Name": "La Jolla Pharmaceutical Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "La Jolla Pharmaceutical Company - Common Stock",
  "Symbol": "LJPC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lakeland Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lakeland Financial Corporation - Common Stock",
  "Symbol": "LKFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "LKQ Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LKQ Corporation - Common Stock",
  "Symbol": "LKQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lilis Energy, Inc.",
  "Financial Status": "H",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Lilis Energy, Inc. - Common Stock",
  "Symbol": "LLEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Limelight Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Limelight Networks, Inc. - Common Stock",
  "Symbol": "LLNW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Linear Technology Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Linear Technology Corporation - Common Stock",
  "Symbol": "LLTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "LeMaitre Vascular, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "LeMaitre Vascular, Inc. - Common Stock",
  "Symbol": "LMAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Low Duration Mortgage Opportunities ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Low Duration Mortgage Opportunities ETF",
  "Symbol": "LMBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Media Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Media Corporation - Series A Common Stock",
  "Symbol": "LMCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Media Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Media Corporation - Series B Common Stock",
  "Symbol": "LMCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Media Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Media Corporation - Series C Common Stock",
  "Symbol": "LMCK",
  "Test Issue": "N"
  },
  {
  "Company Name": "LMI Aerospace, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LMI Aerospace, Inc. - Common Stock",
  "Symbol": "LMIA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Limoneira Co",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Limoneira Co - Common Stock",
  "Symbol": "LMNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lumenis Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lumenis Ltd. - Class B Ordinary Shares",
  "Symbol": "LMNS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Luminex Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Luminex Corporation - Common Stock",
  "Symbol": "LMNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lumos Networks Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lumos Networks Corp. - Common Stock",
  "Symbol": "LMOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Landmark Infrastructure Partners LP",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Landmark Infrastructure Partners LP - Common Units",
  "Symbol": "LMRK",
  "Test Issue": "N"
  },
  {
  "Company Name": "LNB Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "LNB Bancorp, Inc. - Common Stock",
  "Symbol": "LNBB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Snyder's",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Snyder's-Lance, Inc. - Common Stock",
  "Symbol": "LNCE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Linn Co, LLC",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Linn Co, LLC - Common Shares",
  "Symbol": "LNCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Landec Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Landec Corporation - Common Stock",
  "Symbol": "LNDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Manhattan Bridge Capital, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Manhattan Bridge Capital, Inc - Common Stock",
  "Symbol": "LOAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Local Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Local Corporation - Common Stock",
  "Symbol": "LOCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "El Pollo Loco Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "El Pollo Loco Holdings, Inc. - Common Stock",
  "Symbol": "LOCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Logitech International S.A.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Logitech International S.A. - Registered Shares",
  "Symbol": "LOGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "LogMein, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LogMein, Inc. - Common Stock",
  "Symbol": "LOGM",
  "Test Issue": "N"
  },
  {
  "Company Name": "LoJack Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LoJack Corporation - Common Stock",
  "Symbol": "LOJN",
  "Test Issue": "N"
  },
  {
  "Company Name": "eLong, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "eLong, Inc. - American Depositary Shares representing 2 Ordinary Shares",
  "Symbol": "LONG",
  "Test Issue": "N"
  },
  {
  "Company Name": "LookSmart, Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "LookSmart, Ltd. - Common Stock",
  "Symbol": "LOOK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Grand Canyon Education, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Grand Canyon Education, Inc. - Common Stock",
  "Symbol": "LOPE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Loral Space and Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Loral Space and Communications, Inc. - Common Stock",
  "Symbol": "LORL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Loxo Oncology, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Loxo Oncology, Inc. - Common Stock",
  "Symbol": "LOXO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lipocine Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Lipocine Inc. - Common Stock",
  "Symbol": "LPCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Life Partners Holdings Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Life Partners Holdings Inc - Common Stock",
  "Symbol": "LPHI",
  "Test Issue": "N"
  },
  {
  "Company Name": "LPL Financial Holdings Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LPL Financial Holdings Inc. - Common Stock",
  "Symbol": "LPLA",
  "Test Issue": "N"
  },
  {
  "Company Name": "LifePoint Hospitals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LifePoint Hospitals, Inc. - Common Stock",
  "Symbol": "LPNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "LaPorte Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "LaPorte Bancorp, Inc. - Common Stock",
  "Symbol": "LPSB",
  "Test Issue": "N"
  },
  {
  "Company Name": "LivePerson, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LivePerson, Inc. - Common Stock",
  "Symbol": "LPSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "LightPath Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "LightPath Technologies, Inc. - Class A Common Stock",
  "Symbol": "LPTH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lpath, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Lpath, Inc. - Class A Common Stock",
  "Symbol": "LPTN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liquidity Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liquidity Services, Inc. - Common Stock",
  "Symbol": "LQDT",
  "Test Issue": "N"
  },
  {
  "Company Name": "LRAD Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "LRAD Corporation - Common Stock",
  "Symbol": "LRAD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lam Research Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lam Research Corporation - Common Stock",
  "Symbol": "LRCX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lake Shore Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Lake Shore Bancorp, Inc. - Common Stock",
  "Symbol": "LSBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lattice Semiconductor Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lattice Semiconductor Corporation - Common Stock",
  "Symbol": "LSCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Landstar System, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Landstar System, Inc. - Common Stock",
  "Symbol": "LSTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lightbridge Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Lightbridge Corporation - Common Stock",
  "Symbol": "LTBR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Learning Tree International, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Learning Tree International, Inc. - Common Stock",
  "Symbol": "LTRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty TripAdvisor Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty TripAdvisor Holdings, Inc. - Series A Common Stock",
  "Symbol": "LTRPA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty TripAdvisor Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty TripAdvisor Holdings, Inc. - Series B Common Stock",
  "Symbol": "LTRPB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lantronix, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Lantronix, Inc. - Common Stock",
  "Symbol": "LTRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "LegacyTexas Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LegacyTexas Financial Group, Inc. - Common Stock",
  "Symbol": "LTXB",
  "Test Issue": "N"
  },
  {
  "Company Name": "lululemon athletica inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "lululemon athletica inc. - Common Stock",
  "Symbol": "LULU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Luna Innovations Incorporated",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Luna Innovations Incorporated - Common Stock",
  "Symbol": "LUNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Interactive Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Interactive Corporation - Series A Liberty Ventures Common Stock",
  "Symbol": "LVNTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Interactive Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Interactive Corporation - Series B Liberty Ventures Common Stock",
  "Symbol": "LVNTB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lifeway Foods, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Lifeway Foods, Inc. - Common Stock",
  "Symbol": "LWAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Lexicon Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Lexicon Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "LXRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "LSI Industries Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LSI Industries Inc. - Common Stock",
  "Symbol": "LYTS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Merrimack Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Merrimack Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "MACK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Magnetek, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Magnetek, Inc. - Common Stock",
  "Symbol": "MAG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Magal Security Systems Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Magal Security Systems Ltd. - Ordinary Shares",
  "Symbol": "MAGS",
  "Test Issue": "N"
  },
  {
  "Company Name": "MAM Software Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MAM Software Group, Inc. - Common Stock",
  "Symbol": "MAMS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Manhattan Associates, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Manhattan Associates, Inc. - Common Stock",
  "Symbol": "MANH",
  "Test Issue": "N"
  },
  {
  "Company Name": "ManTech International Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ManTech International Corporation - Class A Common Stock",
  "Symbol": "MANT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marriott International",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Marriott International - Class A Common Stock",
  "Symbol": "MAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marathon Patent Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Marathon Patent Group, Inc. - Common Stock",
  "Symbol": "MARA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Remark Media, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Remark Media, Inc. - Common Stock",
  "Symbol": "MARK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marine Petroleum Trust",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Marine Petroleum Trust - Units of Beneficial Interest",
  "Symbol": "MARPS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Masimo Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Masimo Corporation - Common Stock",
  "Symbol": "MASI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mattel, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mattel, Inc. - Common Stock",
  "Symbol": "MAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mattersight Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Mattersight Corporation - Common Stock",
  "Symbol": "MATR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Matthews International Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Matthews International Corporation - Class A Common Stock",
  "Symbol": "MATW",
  "Test Issue": "N"
  },
  {
  "Company Name": "J. W. Mays, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "J. W. Mays, Inc. - Common Stock",
  "Symbol": "MAYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Middlefield Banc Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Middlefield Banc Corp. - Common Stock",
  "Symbol": "MBCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "MB Financial Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MB Financial Inc. - Common Stock",
  "Symbol": "MBFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "MB Financial Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MB Financial Inc. - Perpetual Non-Cumulative Preferred Stock, Series A",
  "Symbol": "MBFIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marrone Bio Innovations, Inc.",
  "Financial Status": "E",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Marrone Bio Innovations, Inc. - Common Stock",
  "Symbol": "MBII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Metabolix, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Metabolix, Inc. - Common Stock",
  "Symbol": "MBLX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Middleburg Financial Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Middleburg Financial Corporation - Common Stock",
  "Symbol": "MBRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "FlexShares Disciplined Duration MBS Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "FlexShares Disciplined Duration MBS Index Fund",
  "Symbol": "MBSD",
  "Test Issue": "N"
  },
  {
  "Company Name": "M B T Financial Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "M B T Financial Corp - Common Stock",
  "Symbol": "MBTF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Malibu Boats, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Malibu Boats, Inc. - Common Stock",
  "Symbol": "MBUU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Merchants Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Merchants Bancshares, Inc. - Common Stock",
  "Symbol": "MBVT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mercantile Bank Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mercantile Bank Corporation - Common Stock",
  "Symbol": "MBWM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Macatawa Bank Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Macatawa Bank Corporation - Common Stock",
  "Symbol": "MCBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Madison County Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Madison County Financial, Inc. - Common Stock",
  "Symbol": "MCBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mid",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mid-Con Energy Partners, LP - Common Units",
  "Symbol": "MCEP",
  "Test Issue": "N"
  },
  {
  "Company Name": "MCG Capital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MCG Capital Corporation - Closed End Fund",
  "Symbol": "MCGC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Microchip Technology Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Microchip Technology Incorporated - Common Stock",
  "Symbol": "MCHP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marchex, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Marchex, Inc. - Class B Common Stock",
  "Symbol": "MCHX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mecox Lane Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mecox Lane Limited - American Depositary Shares",
  "Symbol": "MCOX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Monarch Casino & Resort, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Monarch Casino & Resort, Inc. - Common Stock",
  "Symbol": "MCRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Micrel, Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Micrel, Incorporated - Common Stock",
  "Symbol": "MCRL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Macrocure Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Macrocure Ltd. - Ordinary Shares",
  "Symbol": "MCUR",
  "Test Issue": "N"
  },
  {
  "Company Name": "MedAssets, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MedAssets, Inc. - Common Stock",
  "Symbol": "MDAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "MDC Partners Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MDC Partners Inc. - Class A Subordinate Voting Shares",
  "Symbol": "MDCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Medicines Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Medicines Company - Common Stock",
  "Symbol": "MDCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Exchange",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Exchange-Traded Fund VI Multi-Asset Diversified Income Index Fund",
  "Symbol": "MDIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mondelez International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mondelez International, Inc. - Class A Common Stock",
  "Symbol": "MDLZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mountain Province Diamonds Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mountain Province Diamonds Inc. - Common Stock",
  "Symbol": "MDM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Allscripts Healthcare Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Allscripts Healthcare Solutions, Inc. - common stock",
  "Symbol": "MDRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Medidata Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Medidata Solutions, Inc. - Common Stock",
  "Symbol": "MDSO",
  "Test Issue": "N"
  },
  {
  "Company Name": "BluePhoenix Solutions, Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "BluePhoenix Solutions, Ltd. - Ordinary Shares",
  "Symbol": "MDSY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Medivation, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Medivation, Inc. - Common Stock",
  "Symbol": "MDVN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Medovex Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Medovex Corp. - Units",
  "Symbol": "MDVXU",
  "Test Issue": "N"
  },
  {
  "Company Name": "MediWound Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MediWound Ltd. - Ordinary Shares",
  "Symbol": "MDWD",
  "Test Issue": "N"
  },
  {
  "Company Name": "MiMedx Group, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MiMedx Group, Inc - Common Stock",
  "Symbol": "MDXG",
  "Test Issue": "N"
  },
  {
  "Company Name": "MeetMe, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MeetMe, Inc. - Common Stock",
  "Symbol": "MEET",
  "Test Issue": "N"
  },
  {
  "Company Name": "Methes Energies International Ltd",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Methes Energies International Ltd - Common Stock",
  "Symbol": "MEIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Methes Energies International Ltd",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Methes Energies International Ltd - Class A Warrants",
  "Symbol": "MEILW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Methes Energies International Ltd",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Methes Energies International Ltd - Class B Warrants",
  "Symbol": "MEILZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "MEI Pharma, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MEI Pharma, Inc. - Common Stock",
  "Symbol": "MEIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "MELA Sciences, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MELA Sciences, Inc - Common Stock",
  "Symbol": "MELA",
  "Test Issue": "N"
  },
  {
  "Company Name": "MercadoLibre, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MercadoLibre, Inc. - Common Stock",
  "Symbol": "MELI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Melrose Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Melrose Bancorp, Inc. - Common Stock",
  "Symbol": "MELR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Memorial Production Partners LP",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Memorial Production Partners LP - Common Units",
  "Symbol": "MEMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mentor Graphics Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mentor Graphics Corporation - Common Stock",
  "Symbol": "MENT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Methanex Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Methanex Corporation - Common Stock",
  "Symbol": "MEOH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mercer International Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mercer International Inc. - Common Stock",
  "Symbol": "MERC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Meru Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Meru Networks, Inc. - Common Stock",
  "Symbol": "MERU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Metro Bancorp, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Metro Bancorp, Inc - Common Stock",
  "Symbol": "METR",
  "Test Issue": "N"
  },
  {
  "Company Name": "MicroFinancial Incorporated",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MicroFinancial Incorporated - Common Stock",
  "Symbol": "MFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Multi",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Multi-Fineline Electronix, Inc. - Common Stock",
  "Symbol": "MFLX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mackinac Financial Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Mackinac Financial Corporation - Common Stock",
  "Symbol": "MFNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "MFRI, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MFRI, Inc. - Common Stock",
  "Symbol": "MFRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mattress Firm Holding Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mattress Firm Holding Corp. - Common Stock",
  "Symbol": "MFRM",
  "Test Issue": "N"
  },
  {
  "Company Name": "MutualFirst Financial Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MutualFirst Financial Inc. - Common Stock",
  "Symbol": "MFSF",
  "Test Issue": "N"
  },
  {
  "Company Name": "MGC Diagnostics Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MGC Diagnostics Corporation - Common Stock",
  "Symbol": "MGCD",
  "Test Issue": "N"
  },
  {
  "Company Name": "MGE Energy Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MGE Energy Inc. - Common Stock",
  "Symbol": "MGEE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Moneygram International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Moneygram International, Inc. - Common Stock",
  "Symbol": "MGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Magic Software Enterprises Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Magic Software Enterprises Ltd. - Ordinary Shares",
  "Symbol": "MGIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Magellan Health, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Magellan Health, Inc. - Common Stock",
  "Symbol": "MGLN",
  "Test Issue": "N"
  },
  {
  "Company Name": "MacroGenics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MacroGenics, Inc. - Common Stock",
  "Symbol": "MGNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "MGP Ingredients, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MGP Ingredients, Inc. - Common Stock",
  "Symbol": "MGPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "McGrath RentCorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "McGrath RentCorp - Common Stock",
  "Symbol": "MGRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Magyar Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Magyar Bancorp, Inc. - Common Stock",
  "Symbol": "MGYR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Morgans Hotel Group Co.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Morgans Hotel Group Co. - Common Stock",
  "Symbol": "MHGC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Maiden Holdings, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Maiden Holdings, Ltd. - Common Stock",
  "Symbol": "MHLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Maiden Holdings, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Maiden Holdings, Ltd. - 7.25% Mandatory Convertible Preference Shares, Series B",
  "Symbol": "MHLDO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Micronet Enertec Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Micronet Enertec Technologies, Inc. - Common Stock",
  "Symbol": "MICT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Micronet Enertec Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Micronet Enertec Technologies, Inc. - Warrant",
  "Symbol": "MICTW",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Middleby Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Middleby Corporation - Common Stock",
  "Symbol": "MIDD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Novatel Wireless, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Novatel Wireless, Inc. - Common Stock",
  "Symbol": "MIFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Michaels Companies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Michaels Companies, Inc. - Common Stock",
  "Symbol": "MIK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mitcham Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mitcham Industries, Inc. - Common Stock",
  "Symbol": "MIND",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mobile Mini, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mobile Mini, Inc. - Common Stock",
  "Symbol": "MINI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mitek Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Mitek Systems, Inc. - Common Stock",
  "Symbol": "MITK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mitel Networks Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mitel Networks Corporation - Common Shares",
  "Symbol": "MITL",
  "Test Issue": "N"
  },
  {
  "Company Name": "MKS Instruments, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MKS Instruments, Inc. - Common Stock",
  "Symbol": "MKSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marketo, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Marketo, Inc. - Common Stock",
  "Symbol": "MKTO",
  "Test Issue": "N"
  },
  {
  "Company Name": "MarketAxess Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MarketAxess Holdings, Inc. - Common Stock",
  "Symbol": "MKTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mesa Laboratories, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mesa Laboratories, Inc. - Common Stock",
  "Symbol": "MLAB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Herman Miller, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Herman Miller, Inc. - Common Stock",
  "Symbol": "MLHR",
  "Test Issue": "N"
  },
  {
  "Company Name": "ModusLink Global Solutions, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ModusLink Global Solutions, Inc - Common Stock",
  "Symbol": "MLNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mellanox Technologies, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mellanox Technologies, Ltd. - Ordinary Shares",
  "Symbol": "MLNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Malvern Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Malvern Bancorp, Inc. - Common Stock",
  "Symbol": "MLVF",
  "Test Issue": "N"
  },
  {
  "Company Name": "MMA Capital Management, LLC",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MMA Capital Management, LLC - Common Stock",
  "Symbol": "MMAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Martin Midstream Partners L.P.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Martin Midstream Partners L.P. - Common Units Representing Limited Partnership Interests",
  "Symbol": "MMLP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Merit Medical Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Merit Medical Systems, Inc. - Common Stock",
  "Symbol": "MMSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "MakeMyTrip Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MakeMyTrip Limited - Ordinary Shares",
  "Symbol": "MMYT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mandalay Digital Group, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Mandalay Digital Group, Inc - Common Stock",
  "Symbol": "MNDL",
  "Test Issue": "N"
  },
  {
  "Company Name": "MIND C.T.I. Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MIND C.T.I. Ltd. - Ordinary Shares",
  "Symbol": "MNDO",
  "Test Issue": "N"
  },
  {
  "Company Name": "MagneGas Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MagneGas Corporation - Common Stcok",
  "Symbol": "MNGA",
  "Test Issue": "N"
  },
  {
  "Company Name": "MannKind Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MannKind Corporation - Common Stock",
  "Symbol": "MNKD",
  "Test Issue": "N"
  },
  {
  "Company Name": "MediciNova, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MediciNova, Inc. - Common Stock",
  "Symbol": "MNOV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Monarch Financial Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Monarch Financial Holdings, Inc. - Common Stock",
  "Symbol": "MNRK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Monro Muffler Brake, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Monro Muffler Brake, Inc. - Common Stock",
  "Symbol": "MNRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Monster Beverage Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Monster Beverage Corporation - Common Stock",
  "Symbol": "MNST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Momenta Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Momenta Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "MNTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Manitex International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Manitex International, Inc. - common stock",
  "Symbol": "MNTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sky",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sky-mobi Limited - American Depositary Shares",
  "Symbol": "MOBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "MobileIron, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MobileIron, Inc. - Common Stock",
  "Symbol": "MOBL",
  "Test Issue": "N"
  },
  {
  "Company Name": "MOCON, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MOCON, Inc. - Common Stock",
  "Symbol": "MOCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "MidWestOne Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MidWestOne Financial Group, Inc. - Common Stock",
  "Symbol": "MOFG",
  "Test Issue": "N"
  },
  {
  "Company Name": "MOKO Social Media Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MOKO Social Media Ltd. - American Depositary Shares",
  "Symbol": "MOKO",
  "Test Issue": "N"
  },
  {
  "Company Name": "MOL Global, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MOL Global, Inc. - American Depositary Shares",
  "Symbol": "MOLG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Momo Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Momo Inc. - American Depositary Shares",
  "Symbol": "MOMO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Morningstar, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Morningstar, Inc. - Common Stock",
  "Symbol": "MORN",
  "Test Issue": "N"
  },
  {
  "Company Name": "MoSys, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MoSys, Inc. - Common Stock",
  "Symbol": "MOSY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Motorcar Parts of America, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Motorcar Parts of America, Inc. - Common Stock",
  "Symbol": "MPAA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mid Penn Bancorp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Mid Penn Bancorp - Common Stock",
  "Symbol": "MPB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Melco Crown Entertainment Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Melco Crown Entertainment Limited - American depositary shares each representing three ordinary shares",
  "Symbol": "MPEL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Magellan Petroleum Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Magellan Petroleum Corporation - Common Stock",
  "Symbol": "MPET",
  "Test Issue": "N"
  },
  {
  "Company Name": "Monolithic Power Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Monolithic Power Systems, Inc. - Common Stock",
  "Symbol": "MPWR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Monroe Capital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Monroe Capital Corporation - Common Stock",
  "Symbol": "MRCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mercury Systems Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mercury Systems Inc - Common Stock",
  "Symbol": "MRCY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Memorial Resource Development Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Memorial Resource Development Corp. - Common Stock",
  "Symbol": "MRD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Merge Healthcare Incorporated.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Merge Healthcare Incorporated. - Common Stock",
  "Symbol": "MRGE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Markit Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Markit Ltd. - Common Shares",
  "Symbol": "MRKT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marlin Business Services Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Marlin Business Services Corp. - Common Stock",
  "Symbol": "MRLN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marinus Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Marinus Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "MRNS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marten Transport, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Marten Transport, Ltd. - Common Stock",
  "Symbol": "MRTN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mirati Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Mirati Therapeutics, Inc. - Common Stock",
  "Symbol": "MRTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "MRV Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MRV Communications, Inc. - Common Stock",
  "Symbol": "MRVC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Marvell Technology Group Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Marvell Technology Group Ltd. - Common Stock",
  "Symbol": "MRVL",
  "Test Issue": "N"
  },
  {
  "Company Name": "MSB Financial Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MSB Financial Corp. - common stock",
  "Symbol": "MSBF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Microsemi Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Microsemi Corporation - Common Stock",
  "Symbol": "MSCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Middlesex Water Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Middlesex Water Company - Common Stock",
  "Symbol": "MSEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "MainSource Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MainSource Financial Group, Inc. - Common Stock",
  "Symbol": "MSFG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Microsoft Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Microsoft Corporation - Common Stock",
  "Symbol": "MSFT",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Madison Square Garden Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Madison Square Garden Company - Class A Common Stock",
  "Symbol": "MSG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Merus Labs International Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Merus Labs International Inc. - Common Stock",
  "Symbol": "MSLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "MISONIX, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "MISONIX, Inc. - Common Stock",
  "Symbol": "MSON",
  "Test Issue": "N"
  },
  {
  "Company Name": "MicroStrategy Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MicroStrategy Incorporated - Class A Common Stock",
  "Symbol": "MSTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Medical Transcription Billing, Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Medical Transcription Billing, Corp. - Common Stock",
  "Symbol": "MTBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mannatech, Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mannatech, Incorporated - Common Stock",
  "Symbol": "MTEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Capital Mortgage Investment Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Capital Mortgage Investment Corp. - Common Stock",
  "Symbol": "MTGE",
  "Test Issue": "N"
  },
  {
  "Company Name": "American Capital Mortgage Investment Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "American Capital Mortgage Investment Corp. - 8.125% Series A Cumulative Redeemable Preferred Stock",
  "Symbol": "MTGEP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Materialise NV",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Materialise NV - American Depositary Shares",
  "Symbol": "MTLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Matrix Service Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Matrix Service Company - Common Stock",
  "Symbol": "MTRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "MTS Systems Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MTS Systems Corporation - Common Stock",
  "Symbol": "MTSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "M/A",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "M/A-COM Technology Solutions Holdings, Inc. - Common Stock",
  "Symbol": "MTSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "MER Telemanagement Solutions Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MER Telemanagement Solutions Ltd. - Ordinary Shares",
  "Symbol": "MTSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mattson Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mattson Technology, Inc. - Common Stock",
  "Symbol": "MTSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Micron Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Micron Technology, Inc. - Common Stock",
  "Symbol": "MU",
  "Test Issue": "N"
  },
  {
  "Company Name": "AdvisorShares Sunrise Global Multi",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "AdvisorShares Sunrise Global Multi-Strategy ETF",
  "Symbol": "MULT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Microvision, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Microvision, Inc. - Common Stock",
  "Symbol": "MVIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "MWI Veterinary Supply, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MWI Veterinary Supply, Inc. - common stock",
  "Symbol": "MWIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Maxim Integrated Products, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Maxim Integrated Products, Inc. - Common Stock",
  "Symbol": "MXIM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Maxwell Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Maxwell Technologies, Inc. - Common Stock",
  "Symbol": "MXWL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Myriad Genetics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Myriad Genetics, Inc. - Common Stock",
  "Symbol": "MYGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mylan Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Mylan Inc. - Common Stock",
  "Symbol": "MYL",
  "Test Issue": "N"
  },
  {
  "Company Name": "MYOS Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "MYOS Corporation - Common Stock",
  "Symbol": "MYOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "MYR Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "MYR Group, Inc. - Common Stock",
  "Symbol": "MYRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Mazor Robotics Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Mazor Robotics Ltd. - American Depositary Shares",
  "Symbol": "MZOR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Natural Alternatives International, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Natural Alternatives International, Inc. - Common Stock",
  "Symbol": "NAII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rightside Group, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rightside Group, Ltd. - Common Stock",
  "Symbol": "NAME",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nanometrics Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nanometrics Incorporated - Common Stock",
  "Symbol": "NANO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nathan's Famous, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nathan's Famous, Inc. - Common Stock",
  "Symbol": "NATH",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Instruments Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "National Instruments Corporation - Common Stock",
  "Symbol": "NATI",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Interstate Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "National Interstate Corporation - Common Stock",
  "Symbol": "NATL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nature's Sunshine Products, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Nature's Sunshine Products, Inc. - Common Stock",
  "Symbol": "NATR",
  "Test Issue": "N"
  },
  {
  "Company Name": "National American University Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "National American University Holdings, Inc. - Common Stock",
  "Symbol": "NAUH",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Navigators Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Navigators Group, Inc. - Common Stock",
  "Symbol": "NAVG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Navient Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Navient Corporation - Common Stock",
  "Symbol": "NAVI",
  "Test Issue": "N"
  },
  {
  "Company Name": "NewBridge Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NewBridge Bancorp - Common Stock",
  "Symbol": "NBBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Neurocrine Biosciences, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Neurocrine Biosciences, Inc. - Common Stock",
  "Symbol": "NBIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northeast Bancorp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Northeast Bancorp - Common Stock",
  "Symbol": "NBN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Neostem, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Neostem, Inc. - Common Stock",
  "Symbol": "NBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "NBT Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NBT Bancorp Inc. - Common Stock",
  "Symbol": "NBTB",
  "Test Issue": "N"
  },
  {
  "Company Name": "NB&T FINANCIAL GROUP INC",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NB&T FINANCIAL GROUP INC - Common Stock",
  "Symbol": "NBTF",
  "Test Issue": "N"
  },
  {
  "Company Name": "NCI, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NCI, Inc. - Class A Common Stock",
  "Symbol": "NCIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Norwegian Cruise Line Holdings Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Norwegian Cruise Line Holdings Ltd. - Ordinary Shares",
  "Symbol": "NCLH",
  "Test Issue": "N"
  },
  {
  "Company Name": "National CineMedia, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "National CineMedia, Inc. - Common Stock",
  "Symbol": "NCMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "The9 Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The9 Limited - American Depository Shares representing one ordinary share",
  "Symbol": "NCTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "The NASDAQ OMX Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The NASDAQ OMX Group, Inc. - Common Stock",
  "Symbol": "NDAQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Noodles & Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Noodles & Company - Common Stock",
  "Symbol": "NDLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "NeuroDerm Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "NeuroDerm Ltd. - Ordinary Shares",
  "Symbol": "NDRM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nordson Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nordson Corporation - Common Stock",
  "Symbol": "NDSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northeast Community Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Northeast Community Bancorp, Inc. - Common Stock",
  "Symbol": "NECB",
  "Test Issue": "N"
  },
  {
  "Company Name": "NeoGenomics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NeoGenomics, Inc. - Common Stock",
  "Symbol": "NEO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Neogen Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Neogen Corporation - Common Stock",
  "Symbol": "NEOG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Neonode Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Neonode Inc. - Common Stock",
  "Symbol": "NEON",
  "Test Issue": "N"
  },
  {
  "Company Name": "Neothetics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Neothetics, Inc. - Common Stock",
  "Symbol": "NEOT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Neptune Technologies & Bioresources Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Neptune Technologies & Bioresources Inc - Ordinary Shares",
  "Symbol": "NEPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Minerva Neurosciences, Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Minerva Neurosciences, Inc - Common Stock",
  "Symbol": "NERV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Net Element, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Net Element, Inc. - Common Stock",
  "Symbol": "NETE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Newport Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Newport Corporation - Common Stock",
  "Symbol": "NEWP",
  "Test Issue": "N"
  },
  {
  "Company Name": "NewStar Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NewStar Financial, Inc. - Common Stock",
  "Symbol": "NEWS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Newtek Business Services Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Newtek Business Services Corp. - Common Stock",
  "Symbol": "NEWT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northfield Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Northfield Bancorp, Inc. - Common Stock",
  "Symbol": "NFBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "NF Energy Saving Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NF Energy Saving Corporation - Common Stock",
  "Symbol": "NFEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Netflix, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Netflix, Inc. - Common Stock",
  "Symbol": "NFLX",
  "Test Issue": "N"
  },
  {
  "Company Name": "National General Holdings Corp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "National General Holdings Corp - Common Stock",
  "Symbol": "NGHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "National General Holdings Corp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "National General Holdings Corp - 7.50% Non-Cumulative Preferred Stock, Series A",
  "Symbol": "NGHCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "New Hampshire Thrift Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "New Hampshire Thrift Bancshares, Inc. - Common Stock",
  "Symbol": "NHTB",
  "Test Issue": "N"
  },
  {
  "Company Name": "NICE",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NICE-Systems Limited - American Depositary Shares each representing one Ordinary Share",
  "Symbol": "NICE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nicholas Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nicholas Financial, Inc. - Common Stock",
  "Symbol": "NICK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Blue Nile, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Blue Nile, Inc. - Common Stock",
  "Symbol": "NILE",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "National Bankshares, Inc. - Common Stock",
  "Symbol": "NKSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nektar Therapeutics",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nektar Therapeutics - Common Stock",
  "Symbol": "NKTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "NewLink Genetics Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "NewLink Genetics Corporation - Common Stock",
  "Symbol": "NLNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Netlist, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Netlist, Inc. - Common Stock",
  "Symbol": "NLST",
  "Test Issue": "N"
  },
  {
  "Company Name": "NMI Holdings Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "NMI Holdings Inc - Common Stock",
  "Symbol": "NMIH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Numerex Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Numerex Corp. - Class A Common Stock",
  "Symbol": "NMRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "NN, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NN, Inc. - Common Stock",
  "Symbol": "NNBR",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Penn Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "National Penn Bancshares, Inc. - Common Stock",
  "Symbol": "NPBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "NPS Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NPS Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "NPSP",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Research Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "National Research Corporation - Class A Common Stock",
  "Symbol": "NRCIA",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Research Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "National Research Corporation - Common Stock",
  "Symbol": "NRCIB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northrim BanCorp Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Northrim BanCorp Inc - Common Stock",
  "Symbol": "NRIM",
  "Test Issue": "N"
  },
  {
  "Company Name": "NephroGenex, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NephroGenex, Inc. - Common Stock",
  "Symbol": "NRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Security Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "National Security Group, Inc. - Common Stock",
  "Symbol": "NSEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Insight Enterprises, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Insight Enterprises, Inc. - Common Stock",
  "Symbol": "NSIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nanosphere, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Nanosphere, Inc. - Common Stock",
  "Symbol": "NSPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "NAPCO Security Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NAPCO Security Technologies, Inc. - Common Stock",
  "Symbol": "NSSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "NanoString Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "NanoString Technologies, Inc. - Common Stock",
  "Symbol": "NSTG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nortech Systems Incorporated",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Nortech Systems Incorporated - Common Stock",
  "Symbol": "NSYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "NetApp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NetApp, Inc. - Common Stock",
  "Symbol": "NTAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "NetScout Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NetScout Systems, Inc. - Common Stock",
  "Symbol": "NTCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "NetEase, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NetEase, Inc. - American Depositary Shares, each representing 25 ordinary shares",
  "Symbol": "NTES",
  "Test Issue": "N"
  },
  {
  "Company Name": "NETGEAR, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NETGEAR, Inc. - Common Stock",
  "Symbol": "NTGR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northern Technologies International Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Northern Technologies International Corporation - Common Stock",
  "Symbol": "NTIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nortek Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nortek Inc. - Common Stock",
  "Symbol": "NTK",
  "Test Issue": "N"
  },
  {
  "Company Name": "NTELOS Holdings Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NTELOS Holdings Corp. - Common Stock",
  "Symbol": "NTLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "NutriSystem Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NutriSystem Inc - Common Stock",
  "Symbol": "NTRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northern Trust Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Northern Trust Corporation - Common Stock",
  "Symbol": "NTRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northern Trust Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Northern Trust Corporation - Depository Shares",
  "Symbol": "NTRSP",
  "Test Issue": "N"
  },
  {
  "Company Name": "NetSol Technologies Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NetSol Technologies Inc. - Common Stock",
  "Symbol": "NTWK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nuance Communications, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nuance Communications, Inc. - Common Stock",
  "Symbol": "NUAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "NeuroMetrix, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NeuroMetrix, Inc. - Common Stock",
  "Symbol": "NURO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nutraceutical International Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nutraceutical International Corporation - Common Stock",
  "Symbol": "NUTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "NuVasive, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NuVasive, Inc. - Common Stock",
  "Symbol": "NUVA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Novavax, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Novavax, Inc. - Common Stock",
  "Symbol": "NVAX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Neovasc Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Neovasc Inc. - Common Shares",
  "Symbol": "NVCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "NVIDIA Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NVIDIA Corporation - Common Stock",
  "Symbol": "NVDA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Novadaq Technologies Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Novadaq Technologies Inc - Common Shares",
  "Symbol": "NVDQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "NVE Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NVE Corporation - Common Stock",
  "Symbol": "NVEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "NV5 Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NV5 Holdings, Inc. - Common Stock",
  "Symbol": "NVEE",
  "Test Issue": "N"
  },
  {
  "Company Name": "NV5 Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NV5 Holdings, Inc. - Warrant",
  "Symbol": "NVEEW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nova Lifestyle, Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Nova Lifestyle, Inc - Common Stock",
  "Symbol": "NVFY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Novogen Limited",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Novogen Limited - American Depositary Shares each representing twenty five Ordinary Shares",
  "Symbol": "NVGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nova Measuring Instruments Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nova Measuring Instruments Ltd. - Ordinary Shares",
  "Symbol": "NVMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Naugatuck Valley Financial Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Naugatuck Valley Financial Corporation - Common Stock",
  "Symbol": "NVSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northwest Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Northwest Bancshares, Inc. - Common Stock",
  "Symbol": "NWBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northwest Biotherapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Northwest Biotherapeutics, Inc. - Common Stock",
  "Symbol": "NWBO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northwest Biotherapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Northwest Biotherapeutics, Inc. - Warrant",
  "Symbol": "NWBOW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Norwood Financial Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Norwood Financial Corp. - Common Stock",
  "Symbol": "NWFL",
  "Test Issue": "N"
  },
  {
  "Company Name": "National Western Life Insurance Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "National Western Life Insurance Company - Class A Common Stock",
  "Symbol": "NWLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Northwest Pipe Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Northwest Pipe Company - Common Stock",
  "Symbol": "NWPX",
  "Test Issue": "N"
  },
  {
  "Company Name": "News Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "News Corporation - Class B Common Stock",
  "Symbol": "NWS",
  "Test Issue": "N"
  },
  {
  "Company Name": "News Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "News Corporation - Class A Common Stock",
  "Symbol": "NWSA",
  "Test Issue": "N"
  },
  {
  "Company Name": "NXP Semiconductors N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NXP Semiconductors N.V. - Common Stock",
  "Symbol": "NXPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nexstar Broadcasting Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nexstar Broadcasting Group, Inc. - Class A Common Stock",
  "Symbol": "NXST",
  "Test Issue": "N"
  },
  {
  "Company Name": "NXT",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NXT-ID Inc. - Common Stock",
  "Symbol": "NXTD",
  "Test Issue": "N"
  },
  {
  "Company Name": "NXT",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "NXT-ID Inc. - Warrant",
  "Symbol": "NXTDW",
  "Test Issue": "N"
  },
  {
  "Company Name": "NxStage Medical, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "NxStage Medical, Inc. - Common Stock",
  "Symbol": "NXTM",
  "Test Issue": "N"
  },
  {
  "Company Name": "New York Mortgage Trust, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "New York Mortgage Trust, Inc. - Common Stock",
  "Symbol": "NYMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "New York Mortgage Trust, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "New York Mortgage Trust, Inc. - 7.75% Series B Cumulative Redeemable Preferred Stock",
  "Symbol": "NYMTP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nymox Pharmaceutical Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Nymox Pharmaceutical Corporation - Common Stock",
  "Symbol": "NYMX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Empire Resorts, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Empire Resorts, Inc. - Common Stock",
  "Symbol": "NYNY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Optibase Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Optibase Ltd. - Ordinary Shares",
  "Symbol": "OBAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ocean Bio",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ocean Bio-Chem, Inc. - Common Stock",
  "Symbol": "OBCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Optical Cable Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Optical Cable Corporation - Common Stock",
  "Symbol": "OCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "OceanFirst Financial Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "OceanFirst Financial Corp. - Common Stock",
  "Symbol": "OCFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oclaro, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Oclaro, Inc. - Common Stock",
  "Symbol": "OCLR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oculus Innovative Sciences, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Oculus Innovative Sciences, Inc. - Common Stock",
  "Symbol": "OCLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ocera Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ocera Therapeutics, Inc. - Common Stock",
  "Symbol": "OCRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ocular Therapeutix, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ocular Therapeutix, Inc. - Common Stock",
  "Symbol": "OCUL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Old Dominion Freight Line, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Old Dominion Freight Line, Inc. - Common Stock",
  "Symbol": "ODFL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Office Depot, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Office Depot, Inc. - Common Stock",
  "Symbol": "ODP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oconee Federal Financial Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Oconee Federal Financial Corp. - Common Stock",
  "Symbol": "OFED",
  "Test Issue": "N"
  },
  {
  "Company Name": "Orthofix International N.V.",
  "Financial Status": "E",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Orthofix International N.V. - Common Stock",
  "Symbol": "OFIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Omega Flex, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Omega Flex, Inc. - Common Stock",
  "Symbol": "OFLX",
  "Test Issue": "N"
  },
  {
  "Company Name": "OFS Capital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "OFS Capital Corporation - Common Stock",
  "Symbol": "OFS",
  "Test Issue": "N"
  },
  {
  "Company Name": "OncoGenex Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "OncoGenex Pharmaceuticals Inc. - Common Shares",
  "Symbol": "OGXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "OHA Investment Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "OHA Investment Corporation - Closed End Fund",
  "Symbol": "OHAI",
  "Test Issue": "N"
  },
  {
  "Company Name": "One Horizon Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "One Horizon Group, Inc. - Common Stock",
  "Symbol": "OHGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ohr Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ohr Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "OHRP",
  "Test Issue": "N"
  },
  {
  "Company Name": "O2Micro International Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "O2Micro International Limited - Ordinary Shares each 50 shares of which are represented by an American Depositary Share",
  "Symbol": "OIIM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Southwest Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Southwest Bancorp, Inc. - Common Stock",
  "Symbol": "OKSB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Old Line Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Old Line Bancshares, Inc. - Common Stock",
  "Symbol": "OLBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Universal Display Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Universal Display Corporation - Common Stock",
  "Symbol": "OLED",
  "Test Issue": "N"
  },
  {
  "Company Name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V. - American Depositary Shares each representing 8 Series B shares",
  "Symbol": "OMAB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Omnicell, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Omnicell, Inc. - Common Stock",
  "Symbol": "OMCL",
  "Test Issue": "N"
  },
  {
  "Company Name": "OncoMed Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "OncoMed Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "OMED",
  "Test Issue": "N"
  },
  {
  "Company Name": "Omeros Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Omeros Corporation - Common Stock",
  "Symbol": "OMER",
  "Test Issue": "N"
  },
  {
  "Company Name": "Odyssey Marine Exploration, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Odyssey Marine Exploration, Inc. - Common Stock",
  "Symbol": "OMEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Old National Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Old National Bancorp - Common Stock",
  "Symbol": "ONB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oncolytics Biotech, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Oncolytics Biotech, Inc. - Common Shares",
  "Symbol": "ONCY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Fidelity Nasdaq Composite Index Tracking Stock",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Fidelity Nasdaq Composite Index Tracking Stock",
  "Symbol": "ONEQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oneida Financial Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Oneida Financial Corp. - Common Stock",
  "Symbol": "ONFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ON Semiconductor Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ON Semiconductor Corporation - Common Stock",
  "Symbol": "ONNN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Onconova Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Onconova Therapeutics, Inc. - Common Stock",
  "Symbol": "ONTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oncothyreon Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Oncothyreon Inc. - Common Shares",
  "Symbol": "ONTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Onvia, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Onvia, Inc. - Common Stock",
  "Symbol": "ONVI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Opus Bank",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Opus Bank - Common Stock",
  "Symbol": "OPB",
  "Test Issue": "N"
  },
  {
  "Company Name": "OptimumBank Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "OptimumBank Holdings, Inc. - Common Stock",
  "Symbol": "OPHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ophthotech Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ophthotech Corporation - Common Stock",
  "Symbol": "OPHT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Old Point Financial Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Old Point Financial Corporation - Common Stock",
  "Symbol": "OPOF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ocean Power Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ocean Power Technologies, Inc. - Common Stock",
  "Symbol": "OPTT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Opexa Therapeutics, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Opexa Therapeutics, Inc. - Common Stock",
  "Symbol": "OPXA",
  "Test Issue": "N"
  },
  {
  "Company Name": "ORBCOMM Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ORBCOMM Inc. - Common Stock",
  "Symbol": "ORBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Orbotech Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Orbotech Ltd. - Ordinary Shares",
  "Symbol": "ORBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Orexigen Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Orexigen Therapeutics, Inc. - Common Stock",
  "Symbol": "OREX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ocean Rig UDW Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ocean Rig UDW Inc. - Common Stock",
  "Symbol": "ORIG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oritani Financial Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Oritani Financial Corp. - Common Stock",
  "Symbol": "ORIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "O'Reilly Automotive, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "O'Reilly Automotive, Inc. - Common Stock",
  "Symbol": "ORLY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oramed Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Oramed Pharmaceuticals Inc. - Common Stock",
  "Symbol": "ORMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bio Blast Pharma Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Bio Blast Pharma Ltd. - Ordinary Shares",
  "Symbol": "ORPN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Orrstown Financial Services Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Orrstown Financial Services Inc - Common Stock",
  "Symbol": "ORRF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Old Second Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Old Second Bancorp, Inc. - Common Stock",
  "Symbol": "OSBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Old Second Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Old Second Bancorp, Inc. - 7.80% Cumulative Trust Preferred Securities",
  "Symbol": "OSBCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ocean Shore Holding Co.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ocean Shore Holding Co. - Common Stock",
  "Symbol": "OSHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Osiris Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Osiris Therapeutics, Inc. - Common Stock",
  "Symbol": "OSIR",
  "Test Issue": "N"
  },
  {
  "Company Name": "OSI Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "OSI Systems, Inc. - Common Stock",
  "Symbol": "OSIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "SLM Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SLM Corporation - Medium Term Notes, Series A, CPI-Linked Notes due March 15, 2017",
  "Symbol": "OSM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ossen Innovation Co., Ltd.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ossen Innovation Co., Ltd. - American Depositary Shares",
  "Symbol": "OSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Overstock.com, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Overstock.com, Inc. - Common Stock",
  "Symbol": "OSTK",
  "Test Issue": "N"
  },
  {
  "Company Name": "OraSure Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "OraSure Technologies, Inc. - Common Stock",
  "Symbol": "OSUR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Otelco Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Otelco Inc. - Common Stock",
  "Symbol": "OTEL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Open Text Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Open Text Corporation - Common Shares",
  "Symbol": "OTEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Otonomy, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Otonomy, Inc. - Common Stock",
  "Symbol": "OTIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "On Track Innovations Ltd",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "On Track Innovations Ltd - Ordinary Shares",
  "Symbol": "OTIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Otter Tail Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Otter Tail Corporation - Common Stock",
  "Symbol": "OTTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Outerwall Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Outerwall Inc. - Common Stock",
  "Symbol": "OUTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "OvaScience Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "OvaScience Inc. - Common Stock",
  "Symbol": "OVAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ohio Valley Banc Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ohio Valley Banc Corp. - Common Stock",
  "Symbol": "OVBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oak Valley Bancorp (CA)",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Oak Valley Bancorp (CA) - Common Stock",
  "Symbol": "OVLY",
  "Test Issue": "N"
  },
  {
  "Company Name": "OmniVision Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "OmniVision Technologies, Inc. - Common Stock",
  "Symbol": "OVTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oxbridge Re Holdings Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Oxbridge Re Holdings Limited - Ordinary Shares",
  "Symbol": "OXBR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oxbridge Re Holdings Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Oxbridge Re Holdings Limited - Warrant",
  "Symbol": "OXBRW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oxford Immunotec Global PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Oxford Immunotec Global PLC - Ordinary Shares",
  "Symbol": "OXFD",
  "Test Issue": "N"
  },
  {
  "Company Name": "OXiGENE, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "OXiGENE, Inc. - Common Stock",
  "Symbol": "OXGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oxford Lane Capital Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Oxford Lane Capital Corp. - Common Stock",
  "Symbol": "OXLC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oxford Lane Capital Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Oxford Lane Capital Corp. - 8.125% Series 2024 Term Preferred Stock",
  "Symbol": "OXLCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oxford Lane Capital Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Oxford Lane Capital Corp. - Term Preferred Shares, 7.50% Series 2023",
  "Symbol": "OXLCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Oxford Lane Capital Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Oxford Lane Capital Corp. - Term Preferred Shares, 8.50% Series 2017",
  "Symbol": "OXLCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bank of the Ozarks",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bank of the Ozarks - Common Stock",
  "Symbol": "OZRK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pan American Silver Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pan American Silver Corp. - Common Stock",
  "Symbol": "PAAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pacific Biosciences of California, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pacific Biosciences of California, Inc. - Common Stock",
  "Symbol": "PACB",
  "Test Issue": "N"
  },
  {
  "Company Name": "PacWest Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PacWest Bancorp - Common Stock",
  "Symbol": "PACW",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares Global Agriculture Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares Global Agriculture Portfolio",
  "Symbol": "PAGG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Phibro Animal Health Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Phibro Animal Health Corporation - Class A Common Stock",
  "Symbol": "PAHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pangaea Logistics Solutions Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pangaea Logistics Solutions Ltd. - Common Stock",
  "Symbol": "PANL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Parnell Pharmaceuticals Holdings Ltd",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Parnell Pharmaceuticals Holdings Ltd - Ordinary Shares",
  "Symbol": "PARN",
  "Test Issue": "N"
  },
  {
  "Company Name": "New Patriot Transportation Holding, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "New Patriot Transportation Holding, Inc. - Common Stock When Issued",
  "Symbol": "PATIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Patrick Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Patrick Industries, Inc. - Common Stock",
  "Symbol": "PATK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Paychex, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Paychex, Inc. - Common Stock",
  "Symbol": "PAYX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Polonia Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Polonia Bancorp, Inc. - Common Stock",
  "Symbol": "PBCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "People's United Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "People's United Financial, Inc. - Common Stock",
  "Symbol": "PBCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pathfinder Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pathfinder Bancorp, Inc. - Common Stock",
  "Symbol": "PBHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Porter Bancorp, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Porter Bancorp, Inc. - Common Stock",
  "Symbol": "PBIB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Prudential Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Prudential Bancorp, Inc. - Common Stock",
  "Symbol": "PBIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Prima BioMed Ltd",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Prima BioMed Ltd - American Depositary Shares",
  "Symbol": "PBMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Potbelly Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Potbelly Corporation - Common Stock",
  "Symbol": "PBPB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Poage Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Poage Bankshares, Inc. - Common Stock",
  "Symbol": "PBSK",
  "Test Issue": "N"
  },
  {
  "Company Name": "PACCAR Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PACCAR Inc. - Common Stock",
  "Symbol": "PCAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pacific Continental Corporation (Ore)",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pacific Continental Corporation (Ore) - Common Stock",
  "Symbol": "PCBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "PC Connection, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PC Connection, Inc. - Common Stock",
  "Symbol": "PCCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Potlatch Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Potlatch Corporation - Common Stock",
  "Symbol": "PCH",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Priceline Group Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Priceline Group Inc.  - Common Stock",
  "Symbol": "PCLN",
  "Test Issue": "N"
  },
  {
  "Company Name": "PCM, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PCM, Inc. - Common Stock",
  "Symbol": "PCMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pendrell Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pendrell Corporation - Class A Common Stock",
  "Symbol": "PCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Points International, Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Points International, Ltd. - Common Shares",
  "Symbol": "PCOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pacira Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pacira Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "PCRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "PC",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PC-Tel, Inc. - Common Stock",
  "Symbol": "PCTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Paylocity Holding Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Paylocity Holding Corporation - Common Stock",
  "Symbol": "PCTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pharmacyclics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pharmacyclics, Inc. - Common Stock",
  "Symbol": "PCYC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Park City Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Park City Group, Inc. - Common Stock",
  "Symbol": "PCYG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pure Cycle Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pure Cycle Corporation - Common Stock",
  "Symbol": "PCYO",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares DB Optimum Yield Diversified Commodity Strategy Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares DB Optimum Yield Diversified Commodity Strategy Portfolio",
  "Symbol": "PDBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "PDC Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PDC Energy, Inc. - Common Stock",
  "Symbol": "PDCE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Patterson Companies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Patterson Companies, Inc. - Common Stock",
  "Symbol": "PDCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pro",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pro-Dex, Inc. - Common Stock",
  "Symbol": "PDEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "PDF Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PDF Solutions, Inc. - Common Stock",
  "Symbol": "PDFS",
  "Test Issue": "N"
  },
  {
  "Company Name": "PDI, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PDI, Inc. - Common Stock",
  "Symbol": "PDII",
  "Test Issue": "N"
  },
  {
  "Company Name": "PDL BioPharma, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PDL BioPharma, Inc. - Common Stock",
  "Symbol": "PDLI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peoples Bancorp of North Carolina, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Peoples Bancorp of North Carolina, Inc. - Common Stock",
  "Symbol": "PEBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peoples Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Peoples Bancorp Inc. - Common Stock",
  "Symbol": "PEBO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pegasystems Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pegasystems Inc. - Common Stock",
  "Symbol": "PEGA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pattern Energy Group Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pattern Energy Group Inc. - Class A Common Stock",
  "Symbol": "PEGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pacific Ethanol, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pacific Ethanol, Inc. - Common Stock",
  "Symbol": "PEIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Penn National Gaming, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Penn National Gaming, Inc. - Common Stock",
  "Symbol": "PENN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Penford Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Penford Corporation - Common Stock",
  "Symbol": "PENX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peoples Federal Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Peoples Federal Bancshares, Inc. - Common Stock",
  "Symbol": "PEOP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Perfumania Holdings, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Perfumania Holdings, Inc - Common Stock",
  "Symbol": "PERF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Perion Network Ltd",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Perion Network Ltd - ordinary shares",
  "Symbol": "PERI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Perry Ellis International Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Perry Ellis International Inc. - Common Stock",
  "Symbol": "PERY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Perma",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Perma-Fix Environmental Services, Inc. - Common Stock",
  "Symbol": "PESI",
  "Test Issue": "N"
  },
  {
  "Company Name": "PetSmart, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PetSmart, Inc - Common Stock",
  "Symbol": "PETM",
  "Test Issue": "N"
  },
  {
  "Company Name": "PetMed Express, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PetMed Express, Inc. - Common Stock",
  "Symbol": "PETS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Aratana Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Aratana Therapeutics, Inc. - Common Stock",
  "Symbol": "PETX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Preferred Bank",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Preferred Bank - Common Stock",
  "Symbol": "PFBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Premier Financial Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Premier Financial Bancorp, Inc. - Common Stock",
  "Symbol": "PFBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peoples Financial Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Peoples Financial Corporation - Common Stock",
  "Symbol": "PFBX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Profire Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Profire Energy, Inc. - Common Stock",
  "Symbol": "PFIE",
  "Test Issue": "N"
  },
  {
  "Company Name": "P & F Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "P & F Industries, Inc. - Class A Common Stock",
  "Symbol": "PFIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peoples Financial Services Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Peoples Financial Services Corp.  - Common Stock",
  "Symbol": "PFIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "PennantPark Floating Rate Capital Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PennantPark Floating Rate Capital Ltd. - Common Stock",
  "Symbol": "PFLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Performant Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Performant Financial Corporation - Common Stock",
  "Symbol": "PFMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Proofpoint, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Proofpoint, Inc. - Common Stock",
  "Symbol": "PFPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "PFSweb, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "PFSweb, Inc. - Common Stock",
  "Symbol": "PFSW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peapack",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Peapack-Gladstone Financial Corporation - Common Stock",
  "Symbol": "PGC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Progenics Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Progenics Pharmaceuticals Inc. - Common Stock",
  "Symbol": "PGNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "PGT, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PGT, Inc. - Common Stock",
  "Symbol": "PGTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "PHI, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PHI, Inc. - Voting Common Stock",
  "Symbol": "PHII",
  "Test Issue": "N"
  },
  {
  "Company Name": "PHI, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PHI, Inc. - Non-Voting Common Stock",
  "Symbol": "PHIIK",
  "Test Issue": "N"
  },
  {
  "Company Name": "PhotoMedex, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PhotoMedex, Inc. - Common Stock",
  "Symbol": "PHMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "PICO Holdings Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PICO Holdings Inc. - Common Stock",
  "Symbol": "PICO",
  "Test Issue": "N"
  },
  {
  "Company Name": "1347 Property Insurance Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "1347 Property Insurance Holdings, Inc. - Common Stock",
  "Symbol": "PIH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Premier, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Premier, Inc. - Class A Common Stock",
  "Symbol": "PINC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Parke Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Parke Bancorp, Inc. - Common Stock",
  "Symbol": "PKBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Park",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Park-Ohio Holdings Corp. - Common Stock",
  "Symbol": "PKOH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Procera Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Procera Networks, Inc. - Common Stock",
  "Symbol": "PKT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Photronics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Photronics, Inc. - Common Stock",
  "Symbol": "PLAB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dave & Buster's Entertainment, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dave & Buster's Entertainment, Inc. - Common Stock",
  "Symbol": "PLAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Plumas Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Plumas Bancorp - Common Stock",
  "Symbol": "PLBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Children's Place, Inc. (The)",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Children's Place, Inc. (The) - Common Stock",
  "Symbol": "PLCE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Polycom, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Polycom, Inc. - Common Stock",
  "Symbol": "PLCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Popeyes Louisiana Kitchen, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Popeyes Louisiana Kitchen, Inc. - Common Stock",
  "Symbol": "PLKI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Palmetto Bancshares, Inc. (SC)",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Palmetto Bancshares, Inc. (SC) - Common Stock",
  "Symbol": "PLMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Planar Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Planar Systems, Inc. - Common Stock",
  "Symbol": "PLNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Preformed Line Products Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Preformed Line Products Company - Common Stock",
  "Symbol": "PLPC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Planet Payment, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Planet Payment, Inc. - Common Stock",
  "Symbol": "PLPM",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust ISE Global Platinum Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust ISE Global Platinum Index Fund",
  "Symbol": "PLTM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Plug Power, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Plug Power, Inc. - Common Stock",
  "Symbol": "PLUG",
  "Test Issue": "N"
  },
  {
  "Company Name": "ePlus inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ePlus inc. - Common Stock",
  "Symbol": "PLUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Plexus Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Plexus Corp. - Common Stock",
  "Symbol": "PLXS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pacific Mercantile Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pacific Mercantile Bancorp - Common Stock",
  "Symbol": "PMBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "PMC",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PMC - Sierra, Inc. - Common Stock",
  "Symbol": "PMCS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Psychemedics Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Psychemedics Corporation - Common Stock",
  "Symbol": "PMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pingtan Marine Enterprise Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pingtan Marine Enterprise Ltd. - Ordinary Shares",
  "Symbol": "PME",
  "Test Issue": "N"
  },
  {
  "Company Name": "PMFG, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PMFG, Inc. - Common Stock",
  "Symbol": "PMFG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Patriot National Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Patriot National Bancorp Inc. - Common Stock",
  "Symbol": "PNBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pinnacle Financial Partners, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pinnacle Financial Partners, Inc. - Common Stock",
  "Symbol": "PNFP",
  "Test Issue": "N"
  },
  {
  "Company Name": "PennantPark Investment Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PennantPark Investment Corporation - common stock",
  "Symbol": "PNNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares Nasdaq Internet Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares Nasdaq Internet Portfolio",
  "Symbol": "PNQI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Panera Bread Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Panera Bread Company - Class A Common Stock",
  "Symbol": "PNRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "PrimeEnergy Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "PrimeEnergy Corporation - Common Stock",
  "Symbol": "PNRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pointer Telocation Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pointer Telocation Ltd. - Ordinary Shares",
  "Symbol": "PNTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Insulet Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Insulet Corporation - Common Stock",
  "Symbol": "PODD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pool Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pool Corporation - Common Stock",
  "Symbol": "POOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pope Resources",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pope Resources - Limited Partnership",
  "Symbol": "POPE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Power Integrations, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Power Integrations, Inc. - Common Stock",
  "Symbol": "POWI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Powell Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Powell Industries, Inc. - Common Stock",
  "Symbol": "POWL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pozen, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pozen, Inc. - Common Stock",
  "Symbol": "POZN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pacific Premier Bancorp Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pacific Premier Bancorp Inc - Common Stock",
  "Symbol": "PPBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pilgrim's Pride Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pilgrim's Pride Corporation - Common Stock",
  "Symbol": "PPC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peregrine Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Peregrine Pharmaceuticals Inc. - Common Stock",
  "Symbol": "PPHM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peregrine Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Peregrine Pharmaceuticals Inc. - 10.50% Series E Convertible Preferred Stock",
  "Symbol": "PPHMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pioneer Power Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pioneer Power Solutions, Inc. - Common Stock",
  "Symbol": "PPSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "PRA Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PRA Group, Inc. - Common Stock",
  "Symbol": "PRAA",
  "Test Issue": "N"
  },
  {
  "Company Name": "PRA Health Sciences, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PRA Health Sciences, Inc. - Common Stock",
  "Symbol": "PRAH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Prana Biotechnology Ltd",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Prana Biotechnology Ltd - American Depositary Shares each representing ten Ordinary Shares",
  "Symbol": "PRAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Perceptron, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Perceptron, Inc. - Common Stock",
  "Symbol": "PRCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Perficient, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Perficient, Inc. - Common Stock",
  "Symbol": "PRFT",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares FTSE RAFI US 1500 Small",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares FTSE RAFI US 1500 Small-Mid Portfolio",
  "Symbol": "PRFZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Paragon Shipping Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Paragon Shipping Inc. - Common Stock",
  "Symbol": "PRGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Paragon Shipping Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Paragon Shipping Inc. - 8.375% Senior Notes due 2021",
  "Symbol": "PRGNL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Progress Software Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Progress Software Corporation - Common Stock",
  "Symbol": "PRGS",
  "Test Issue": "N"
  },
  {
  "Company Name": "PRGX Global, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PRGX Global, Inc. - Common Stock",
  "Symbol": "PRGX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Primoris Services Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Primoris Services Corporation - Common Stock",
  "Symbol": "PRIM",
  "Test Issue": "N"
  },
  {
  "Company Name": "ParkerVision, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ParkerVision, Inc. - Common Stock",
  "Symbol": "PRKR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peerless Systems Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Peerless Systems Corporation - Common Stock",
  "Symbol": "PRLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Primo Water Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Primo Water Corporation - Common Stock",
  "Symbol": "PRMW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Provident Financial Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Provident Financial Holdings, Inc. - Common Stock",
  "Symbol": "PROV",
  "Test Issue": "N"
  },
  {
  "Company Name": "ProPhase Labs, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ProPhase Labs, Inc. - Common Stock",
  "Symbol": "PRPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "ProQR Therapeutics N.V.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ProQR Therapeutics N.V. - Ordinary Shares",
  "Symbol": "PRQR",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Providence Service Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Providence Service Corporation - Common Stock",
  "Symbol": "PRSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "CafePress Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "CafePress Inc. - Common Stock",
  "Symbol": "PRSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Prothena Corporation plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Prothena Corporation plc - Ordinary Shares",
  "Symbol": "PRTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Paratek Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Paratek Pharmaceuticals, Inc.  - Common Stock",
  "Symbol": "PRTK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Proteon Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Proteon Therapeutics, Inc. - Common Stock",
  "Symbol": "PRTO",
  "Test Issue": "N"
  },
  {
  "Company Name": "U.S. Auto Parts Network, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "U.S. Auto Parts Network, Inc. - Common Stock",
  "Symbol": "PRTS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Premier Exhibitions, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Premier Exhibitions, Inc. - Common Stock",
  "Symbol": "PRXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "PAREXEL International Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PAREXEL International Corporation - Common Stock",
  "Symbol": "PRXL",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares Global Gold & Precious Metals Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares Global Gold & Precious Metals Portfolio",
  "Symbol": "PSAU",
  "Test Issue": "N"
  },
  {
  "Company Name": "PSB Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "PSB Holdings, Inc. - Common Stock",
  "Symbol": "PSBH",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Consumer Staples Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Consumer Staples Portfolio",
  "Symbol": "PSCC",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Consumer Discretionary Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Consumer Discretionary Portfolio",
  "Symbol": "PSCD",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Energy Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Energy Portfolio",
  "Symbol": "PSCE",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Financials Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Financials Portfolio",
  "Symbol": "PSCF",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Health Care Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Health Care Portfolio",
  "Symbol": "PSCH",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Industrials Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Industrials Portfolio",
  "Symbol": "PSCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Materials Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Materials Portfolio",
  "Symbol": "PSCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Information Technology Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Information Technology Portfolio",
  "Symbol": "PSCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares S&P SmallCap Utilities Portfolio",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares S&P SmallCap Utilities Portfolio",
  "Symbol": "PSCU",
  "Test Issue": "N"
  },
  {
  "Company Name": "pSivida Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "pSivida Corp. - Common Stock",
  "Symbol": "PSDV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Prospect Capital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Prospect Capital Corporation - Common Stock",
  "Symbol": "PSEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pericom Semiconductor Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pericom Semiconductor Corporation - Common Stock",
  "Symbol": "PSEM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Power Solutions International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Power Solutions International, Inc. - Common Stock",
  "Symbol": "PSIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "PriceSmart, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PriceSmart, Inc. - Common Stock",
  "Symbol": "PSMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Park Sterling Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Park Sterling Corporation - Common Stock",
  "Symbol": "PSTB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pluristem Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Pluristem Therapeutics, Inc. - Common Stock",
  "Symbol": "PSTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "PostRock Energy Corporation",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PostRock Energy Corporation - Common Stock",
  "Symbol": "PSTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pacific Sunwear of California, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pacific Sunwear of California, Inc. - Common Stock",
  "Symbol": "PSUN",
  "Test Issue": "N"
  },
  {
  "Company Name": "PlasmaTech Biopharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "PlasmaTech Biopharmaceuticals, Inc. - Common Stock",
  "Symbol": "PTBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "PlasmaTech Biopharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "PlasmaTech Biopharmaceuticals, Inc. - Warrant",
  "Symbol": "PTBIW",
  "Test Issue": "N"
  },
  {
  "Company Name": "PTC Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PTC Inc. - Common Stock",
  "Symbol": "PTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "PTC Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PTC Therapeutics, Inc. - Common Stock",
  "Symbol": "PTCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Patterson",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Patterson-UTI Energy, Inc. - Common Stock",
  "Symbol": "PTEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pain Therapeutics",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pain Therapeutics - Common Stock",
  "Symbol": "PTIE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Portola Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Portola Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "PTLA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Partner Communications Company Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Partner Communications Company Ltd. - American Depositary Shares, each representing one ordinary share",
  "Symbol": "PTNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Internet Patents Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Internet Patents Corporation - Common Stock",
  "Symbol": "PTNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Pantry, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Pantry, Inc. - Common Stock",
  "Symbol": "PTRY",
  "Test Issue": "N"
  },
  {
  "Company Name": "P.A.M. Transportation Services, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "P.A.M. Transportation Services, Inc. - Common Stock",
  "Symbol": "PTSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pernix Therapeutics Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Pernix Therapeutics Holdings, Inc. - Common Stock",
  "Symbol": "PTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pulaski Financial Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Pulaski Financial Corp. - Common Stock",
  "Symbol": "PULB",
  "Test Issue": "N"
  },
  {
  "Company Name": "PrivateBancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PrivateBancorp, Inc. - Common Stock",
  "Symbol": "PVTB",
  "Test Issue": "N"
  },
  {
  "Company Name": "PrivateBancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "PrivateBancorp, Inc. - PrivateBancorp Capital Trust IV - 10% Trust Preferred",
  "Symbol": "PVTBP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Penns Woods Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Penns Woods Bancorp, Inc. - Common Stock",
  "Symbol": "PWOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Perfect World Co., Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Perfect World Co., Ltd. - American Depositary Shares, each representing five Class B ordinary shares",
  "Symbol": "PWRD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Providence and Worcester Railroad Company",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Providence and Worcester Railroad Company - Common Stock",
  "Symbol": "PWX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Pixelworks, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Pixelworks, Inc. - Common Stock",
  "Symbol": "PXLW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Papa John'S International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Papa John'S International, Inc. - Common Stock",
  "Symbol": "PZZA",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ ABA Community Bank Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ ABA Community Bank Index Fund",
  "Symbol": "QABA",
  "Test Issue": "N"
  },
  {
  "Company Name": "QAD Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "QAD Inc. - Class A Common Stock",
  "Symbol": "QADA",
  "Test Issue": "N"
  },
  {
  "Company Name": "QAD Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "QAD Inc. - Common Stock",
  "Symbol": "QADB",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI Qatar Capped ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI Qatar Capped ETF",
  "Symbol": "QAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Qualstar Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Qualstar Corporation - Common Stock",
  "Symbol": "QBAK",
  "Test Issue": "N"
  },
  {
  "Company Name": "QC Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "QC Holdings, Inc. - Common Stock",
  "Symbol": "QCCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ Clean Edge Green Energy Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ Clean Edge Green Energy Index Fund",
  "Symbol": "QCLN",
  "Test Issue": "N"
  },
  {
  "Company Name": "QUALCOMM Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "QUALCOMM Incorporated - Common Stock",
  "Symbol": "QCOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "QCR Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "QCR Holdings, Inc. - Common Stock",
  "Symbol": "QCRH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Quidel Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Quidel Corporation - Common Stock",
  "Symbol": "QDEL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Qiagen N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Qiagen N.V. - Common Shares",
  "Symbol": "QGEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust RBA Quality Income ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust RBA Quality Income ETF",
  "Symbol": "QINC",
  "Test Issue": "N"
  },
  {
  "Company Name": "QIWI plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "QIWI plc - American Depositary Shares",
  "Symbol": "QIWI",
  "Test Issue": "N"
  },
  {
  "Company Name": "QKL Stores, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "QKL Stores, Inc. - Common Stock",
  "Symbol": "QKLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "QLogic Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "QLogic Corporation - Common Stock",
  "Symbol": "QLGC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Qlik Technologies Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Qlik Technologies Inc. - Common Stock",
  "Symbol": "QLIK",
  "Test Issue": "N"
  },
  {
  "Company Name": "QLT Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "QLT Inc. - Common Shares",
  "Symbol": "QLTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Quality Distribution, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Quality Distribution, Inc. - Common Stock",
  "Symbol": "QLTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Qualys, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Qualys, Inc. - Common Stock",
  "Symbol": "QLYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "QuinStreet, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "QuinStreet, Inc. - Common Stock",
  "Symbol": "QNST",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ-100 Equal Weighted Index Fund",
  "Symbol": "QQEW",
  "Test Issue": "N"
  },
  {
  "Company Name": "PowerShares QQQ Trust, Series 1",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "PowerShares QQQ Trust, Series 1",
  "Symbol": "QQQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Global X NASDAQ China Technology ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Global X NASDAQ China Technology ETF",
  "Symbol": "QQQC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Nuveen NASDAQ 100 Dynamic Overwrite Fund",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Nuveen NASDAQ 100 Dynamic Overwrite Fund - Shares of Beneficial Interest",
  "Symbol": "QQQX",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ-100 Ex-Technology Sector Index Fund",
  "Symbol": "QQXT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Quest Resource Holding Corporation.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Quest Resource Holding Corporation. - Common Stock",
  "Symbol": "QRHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Qorvo, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Qorvo, Inc. - Common Stock",
  "Symbol": "QRVO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Quality Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Quality Systems, Inc. - Common Stock",
  "Symbol": "QSII",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ-100- Technology Index Fund",
  "Symbol": "QTEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Quotient Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Quotient Limited - Ordinary Shares",
  "Symbol": "QTNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Quotient Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Quotient Limited - Warrant",
  "Symbol": "QTNTW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Quantum Fuel Systems Technologies Worldwide, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Quantum Fuel Systems Technologies Worldwide, Inc. - Common Stock",
  "Symbol": "QTWW",
  "Test Issue": "N"
  },
  {
  "Company Name": "QuickLogic Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "QuickLogic Corporation - Common Stock",
  "Symbol": "QUIK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Qumu Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Qumu Corporation - Common Stock",
  "Symbol": "QUMU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Qunar Cayman Islands Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Qunar Cayman Islands Limited - American Depositary Shares",
  "Symbol": "QUNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "uniQure N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "uniQure N.V. - Ordinary Shares",
  "Symbol": "QURE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Interactive Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Interactive Corporation - Series A Liberty Interactive Common Stock",
  "Symbol": "QVCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Interactive Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Interactive Corporation - Series B Liberty Interactive common stock",
  "Symbol": "QVCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Recon Capital NASDAQ",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Recon Capital NASDAQ-100 Covered Call ETF",
  "Symbol": "QYLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rada Electronics Industries Limited",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Rada Electronics Industries Limited - Ordinary Shares",
  "Symbol": "RADA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Freightcar America, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Freightcar America, Inc. - Common Stock",
  "Symbol": "RAIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rand Capital Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Rand Capital Corporation - Common Stock ($0.10 Par Value)",
  "Symbol": "RAND",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ultragenyx Pharmaceutical Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ultragenyx Pharmaceutical Inc. - Common Stock",
  "Symbol": "RARE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rave Restaurant Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Rave Restaurant Group, Inc. - Common Stock",
  "Symbol": "RAVE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Raven Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Raven Industries, Inc. - Common Stock",
  "Symbol": "RAVN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Republic Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Republic Bancorp, Inc. - Class A Common Stock",
  "Symbol": "RBCAA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rubicon Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rubicon Technology, Inc. - Common Stock",
  "Symbol": "RBCN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Royal Bancshares of Pennsylvania, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Royal Bancshares of Pennsylvania, Inc. - Class A Common Stock",
  "Symbol": "RBPAA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rent",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rent-A-Center Inc. - Common Stock",
  "Symbol": "RCII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rocky Brands, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rocky Brands, Inc. - Common Stock",
  "Symbol": "RCKY",
  "Test Issue": "N"
  },
  {
  "Company Name": "RCM Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "RCM Technologies, Inc. - Common Stock",
  "Symbol": "RCMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Recon Technology, Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Recon Technology, Ltd. - Ordinary Shares",
  "Symbol": "RCON",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rock Creek Pharmaceuticals, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Rock Creek Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "RCPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Receptos, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Receptos, Inc. - Common Stock",
  "Symbol": "RCPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Radcom Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Radcom Ltd. - Ordinary Shares",
  "Symbol": "RDCM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Elizabeth Arden, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Elizabeth Arden, Inc. - Common Stock",
  "Symbol": "RDEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Redhill Biopharma Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Redhill Biopharma Ltd. - American Depositary Shares",
  "Symbol": "RDHL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Reading International Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Reading International Inc - Class A Non-voting Common Stock",
  "Symbol": "RDI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Reading International Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Reading International Inc - Class B Voting Common Stock",
  "Symbol": "RDIB",
  "Test Issue": "N"
  },
  {
  "Company Name": "RadNet, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "RadNet, Inc. - Common Stock",
  "Symbol": "RDNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Radius Health, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Radius Health, Inc. - Common Stock",
  "Symbol": "RDUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust NASDAQ Rising Dividend Achievers ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust NASDAQ Rising Dividend Achievers ETF",
  "Symbol": "RDVY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Radware Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Radware Ltd. - Ordinary Shares",
  "Symbol": "RDWR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Resources Connection, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Resources Connection, Inc. - Common Stock",
  "Symbol": "RECN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rediff.com India Limited",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Rediff.com India Limited - American Depositary Shares, each represented by one-half of one equity share",
  "Symbol": "REDF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Research Frontiers Incorporated",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Research Frontiers Incorporated - Common Stock",
  "Symbol": "REFR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Renewable Energy Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Renewable Energy Group, Inc. - Common Stock",
  "Symbol": "REGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Regeneron Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Regeneron Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "REGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Reis, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Reis, Inc - Common Stock",
  "Symbol": "REIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Richardson Electronics, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Richardson Electronics, Ltd. - Common Stock",
  "Symbol": "RELL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Reliv' International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Reliv' International, Inc. - Common Stock",
  "Symbol": "RELV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Remy International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Remy International, Inc. - Common Stock",
  "Symbol": "REMY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rentrak Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rentrak Corporation - Common Stock",
  "Symbol": "RENT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Recro Pharma, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Recro Pharma, Inc. - Common Stock",
  "Symbol": "REPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Resonant Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Resonant Inc. - Common Stock",
  "Symbol": "RESN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Resource America, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Resource America, Inc. - Class A Common Stock",
  "Symbol": "REXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rex Energy Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rex Energy Corporation - Common Stock",
  "Symbol": "REXX",
  "Test Issue": "N"
  },
  {
  "Company Name": "RF Industries, Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "RF Industries, Ltd. - Common Stock",
  "Symbol": "RFIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "RGC Resources Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "RGC Resources Inc. - Common Stock",
  "Symbol": "RGCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Regado BioSciences, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Regado BioSciences, Inc. - Common Stock",
  "Symbol": "RGDO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Response Genetics, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Response Genetics, Inc. - Common Stock",
  "Symbol": "RGDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Repligen Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Repligen Corporation - Common Stock",
  "Symbol": "RGEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Royal Gold, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Royal Gold, Inc. - Common Stock",
  "Symbol": "RGLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Regulus Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Regulus Therapeutics Inc. - Common Stock",
  "Symbol": "RGLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Real Goods Solar, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Real Goods Solar, Inc. - Class A Common Stock",
  "Symbol": "RGSE",
  "Test Issue": "N"
  },
  {
  "Company Name": "RiceBran Technologies",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "RiceBran Technologies - Common Stock",
  "Symbol": "RIBT",
  "Test Issue": "N"
  },
  {
  "Company Name": "RiceBran Technologies",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "RiceBran Technologies - Warrant",
  "Symbol": "RIBTW",
  "Test Issue": "N"
  },
  {
  "Company Name": "RCI Hospitality Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "RCI Hospitality Holdings, Inc. - Common Stock",
  "Symbol": "RICK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rigel Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rigel Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "RIGL",
  "Test Issue": "N"
  },
  {
  "Company Name": "RIT Technologies Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "RIT Technologies Ltd. - ordinary shares",
  "Symbol": "RITT",
  "Test Issue": "N"
  },
  {
  "Company Name": "RIT Technologies Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "RIT Technologies Ltd. - Warrants",
  "Symbol": "RITTW",
  "Test Issue": "N"
  },
  {
  "Company Name": "River Valley Bancorp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "River Valley Bancorp. - Common Stock",
  "Symbol": "RIVR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Republic Airways Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Republic Airways Holdings, Inc. - Common Stock",
  "Symbol": "RJET",
  "Test Issue": "N"
  },
  {
  "Company Name": "RLJ Entertainment, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "RLJ Entertainment, Inc. - Common Stock",
  "Symbol": "RLJE",
  "Test Issue": "N"
  },
  {
  "Company Name": "ReachLocal, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ReachLocal, Inc. - Common Stock",
  "Symbol": "RLOC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rand Logistics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Rand Logistics, Inc. - Common Stock",
  "Symbol": "RLOG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Relypsa, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Relypsa, Inc. - Common Stock",
  "Symbol": "RLYP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rambus, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rambus, Inc. - Common Stock",
  "Symbol": "RMBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rocky Mountain Chocolate Factory, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Rocky Mountain Chocolate Factory, Inc. - Common Stock",
  "Symbol": "RMCF",
  "Test Issue": "N"
  },
  {
  "Company Name": "RMG Networks Holding Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "RMG Networks Holding Corporation - Common Stock",
  "Symbol": "RMGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rockwell Medical, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Rockwell Medical, Inc. - Common Stock",
  "Symbol": "RMTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Prosensa Holding N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Prosensa Holding N.V. - Ordinary Shares",
  "Symbol": "RNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "RigNet, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RigNet, Inc. - Common Stock",
  "Symbol": "RNET",
  "Test Issue": "N"
  },
  {
  "Company Name": "Renasant Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Renasant Corporation - Common Stock",
  "Symbol": "RNST",
  "Test Issue": "N"
  },
  {
  "Company Name": "RealNetworks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RealNetworks, Inc. - Common Stock",
  "Symbol": "RNWK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Robo",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Robo-Stox Global Robotics and Automation Index ETF",
  "Symbol": "ROBO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gibraltar Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gibraltar Industries, Inc. - Common Stock",
  "Symbol": "ROCK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Radio One, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Radio One, Inc. - Class A Common Stock",
  "Symbol": "ROIA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Radio One, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Radio One, Inc. - Class D Common Stock",
  "Symbol": "ROIAK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Retail Opportunity Investments Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Retail Opportunity Investments Corp. - Common Stock",
  "Symbol": "ROIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ROI Acquisition Corp. II",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ROI Acquisition Corp. II - Common Stock",
  "Symbol": "ROIQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "ROI Acquisition Corp. II",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ROI Acquisition Corp. II - Units",
  "Symbol": "ROIQU",
  "Test Issue": "N"
  },
  {
  "Company Name": "ROI Acquisition Corp. II",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ROI Acquisition Corp. II - Warrants",
  "Symbol": "ROIQW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Roka Bioscience, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Roka Bioscience, Inc. - Common Stock",
  "Symbol": "ROKA",
  "Test Issue": "N"
  },
  {
  "Company Name": "RBC Bearings Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RBC Bearings Incorporated - Common Stock",
  "Symbol": "ROLL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rosetta Resources Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rosetta Resources Inc. - Common Stock",
  "Symbol": "ROSE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rosetta Genomics Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Rosetta Genomics Ltd. - ordinary shares",
  "Symbol": "ROSG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ross Stores, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ross Stores, Inc. - Common Stock",
  "Symbol": "ROST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rovi Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rovi Corporation - Common Stock",
  "Symbol": "ROVI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Royale Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Royale Energy, Inc. - Common Stock",
  "Symbol": "ROYL",
  "Test Issue": "N"
  },
  {
  "Company Name": "RealPage, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RealPage, Inc. - Common Stock",
  "Symbol": "RP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Repros Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Repros Therapeutics Inc. - Common Stock",
  "Symbol": "RPRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Repros Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Repros Therapeutics Inc. - Series A Warrant",
  "Symbol": "RPRXW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Repros Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Repros Therapeutics Inc. - Series B warrant",
  "Symbol": "RPRXZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Raptor Pharmaceutical Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Raptor Pharmaceutical Corp. - Common Stock",
  "Symbol": "RPTP",
  "Test Issue": "N"
  },
  {
  "Company Name": "RPX Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RPX Corporation - Common Stock",
  "Symbol": "RPXC",
  "Test Issue": "N"
  },
  {
  "Company Name": "R.R. Donnelley & Sons Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "R.R. Donnelley & Sons Company - Common Stock",
  "Symbol": "RRD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Red Robin Gourmet Burgers, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Red Robin Gourmet Burgers, Inc. - Common Stock",
  "Symbol": "RRGB",
  "Test Issue": "N"
  },
  {
  "Company Name": "RRSat Global Communications Network Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RRSat Global Communications Network Ltd. - Ordinary Shares",
  "Symbol": "RRST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rofin",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rofin-Sinar Technologies, Inc. - Common Stock",
  "Symbol": "RSTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "RadiSys Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RadiSys Corporation - Common Stock",
  "Symbol": "RSYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ruthigen, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ruthigen, Inc. - Common Stock",
  "Symbol": "RTGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "RTI Surgical, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RTI Surgical, Inc. - Common Stock",
  "Symbol": "RTIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rentech, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Rentech, Inc. - Common Stock",
  "Symbol": "RTK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Retrophin, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Retrophin, Inc. - Common Stock",
  "Symbol": "RTRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rush Enterprises, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rush Enterprises, Inc. - Class A Common Stock",
  "Symbol": "RUSHA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Rush Enterprises, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Rush Enterprises, Inc. - Class B Common Stock",
  "Symbol": "RUSHB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ruth's Hospitality Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ruth's Hospitality Group, Inc. - Common Stock",
  "Symbol": "RUTH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Riverbed Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Riverbed Technology, Inc. - Common Stock",
  "Symbol": "RVBD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Revolution Lighting Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Revolution Lighting Technologies, Inc. - Class A Common Stock",
  "Symbol": "RVLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Revance Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Revance Therapeutics, Inc. - Common Stock",
  "Symbol": "RVNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Riverview Bancorp Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Riverview Bancorp Inc - Common Stock",
  "Symbol": "RVSB",
  "Test Issue": "N"
  },
  {
  "Company Name": "ReWalk Robotics Ltd",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ReWalk Robotics Ltd - Ordinary Shares",
  "Symbol": "RWLK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ignyta, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Ignyta, Inc. - Common Stock",
  "Symbol": "RXDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "RXi Pharmaceuticals Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "RXi Pharmaceuticals Corporation - Common Stock",
  "Symbol": "RXII",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ryanair Holdings plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ryanair Holdings plc - American Depositary Shares, each representing five Ordinary Shares",
  "Symbol": "RYAAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "inContact, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "inContact, Inc. - Common Stock",
  "Symbol": "SAAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sabre Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sabre Corporation - Common Stock",
  "Symbol": "SABR",
  "Test Issue": "N"
  },
  {
  "Company Name": "SAExploration Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SAExploration Holdings, Inc. - Common Stock",
  "Symbol": "SAEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sanderson Farms, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sanderson Farms, Inc. - Common Stock",
  "Symbol": "SAFM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Safety Insurance Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Safety Insurance Group, Inc. - Common Stock",
  "Symbol": "SAFT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sage Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sage Therapeutics, Inc. - Common Stock",
  "Symbol": "SAGE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Saia, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Saia, Inc. - Common Stock",
  "Symbol": "SAIA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sajan, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sajan, Inc. - Common Stock",
  "Symbol": "SAJA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Salisbury Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Salisbury Bancorp, Inc. - Common Stock",
  "Symbol": "SAL",
  "Test Issue": "N"
  },
  {
  "Company Name": "RetailMeNot, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "RetailMeNot, Inc. - Series 1 Common Stock",
  "Symbol": "SALE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Salem Communications Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Salem Communications Corporation - Class A Common Stock",
  "Symbol": "SALM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Silvercrest Asset Management Group Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Silvercrest Asset Management Group Inc. - Common Stock",
  "Symbol": "SAMG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sanmina Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sanmina Corporation - Common Stock",
  "Symbol": "SANM",
  "Test Issue": "N"
  },
  {
  "Company Name": "S&W Seed Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "S&W Seed Company - Common Stock",
  "Symbol": "SANW",
  "Test Issue": "N"
  },
  {
  "Company Name": "S&W Seed Company",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "S&W Seed Company - Warrants Class B 04/23/2015",
  "Symbol": "SANWZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sapient Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sapient Corporation - Common Stock",
  "Symbol": "SAPE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sandy Spring Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sandy Spring Bancorp, Inc. - Common Stock",
  "Symbol": "SASR",
  "Test Issue": "N"
  },
  {
  "Company Name": "EchoStar Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "EchoStar Corporation - common stock",
  "Symbol": "SATS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Spirit Airlines, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Spirit Airlines, Inc. - Common Stock",
  "Symbol": "SAVE",
  "Test Issue": "N"
  },
  {
  "Company Name": "SBA Communications Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SBA Communications Corporation - Common Stock",
  "Symbol": "SBAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sussex Bancorp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sussex Bancorp - Common Stock",
  "Symbol": "SBBX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Seacoast Banking Corporation of Florida",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Seacoast Banking Corporation of Florida - Common Stock",
  "Symbol": "SBCF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sunshine Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sunshine Bancorp, Inc. - Common Stock",
  "Symbol": "SBCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "SB Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "SB Financial Group, Inc. - Common Stock",
  "Symbol": "SBFG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sinclair Broadcast Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sinclair Broadcast Group, Inc. - Class A Common Stock",
  "Symbol": "SBGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Star Bulk Carriers Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Star Bulk Carriers Corp. - Common Stock",
  "Symbol": "SBLK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Star Bulk Carriers Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Star Bulk Carriers Corp. - 8.00% Senior Notes Due 2019",
  "Symbol": "SBLKL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Signature Bank",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Signature Bank - Common Stock",
  "Symbol": "SBNY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Signature Bank",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Signature Bank - Warrants 12/12/2018",
  "Symbol": "SBNYW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sabra Healthcare REIT, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sabra Healthcare REIT, Inc. - Common Stock",
  "Symbol": "SBRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sabra Healthcare REIT, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sabra Healthcare REIT, Inc. - 7.125% Preferred Series A (United States)",
  "Symbol": "SBRAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Spanish Broadcasting System, Inc.",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Spanish Broadcasting System, Inc. - Class A Common Stock",
  "Symbol": "SBSA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Southside Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Southside Bancshares, Inc. - Common Stock",
  "Symbol": "SBSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Starbucks Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Starbucks Corporation - Common Stock",
  "Symbol": "SBUX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Surgical Care Affiliates, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Surgical Care Affiliates, Inc. - Common Stock",
  "Symbol": "SCAI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Scholastic Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Scholastic Corporation - Common Stock",
  "Symbol": "SCHL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Schnitzer Steel Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Schnitzer Steel Industries, Inc. - Class A Common Stock",
  "Symbol": "SCHN",
  "Test Issue": "N"
  },
  {
  "Company Name": "SciClone Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SciClone Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "SCLN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sucampo Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sucampo Pharmaceuticals, Inc. - Class A Common Stock",
  "Symbol": "SCMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "SinoCoking Coal and Coke Chemical Industries, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "SinoCoking Coal and Coke Chemical Industries, Inc - Common Stock",
  "Symbol": "SCOK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Superconductor Technologies Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Superconductor Technologies Inc. - Common Stock",
  "Symbol": "SCON",
  "Test Issue": "N"
  },
  {
  "Company Name": "comScore, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "comScore, Inc. - Common Stock",
  "Symbol": "SCOR",
  "Test Issue": "N"
  },
  {
  "Company Name": "ScanSource, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ScanSource, Inc. - Common Stock",
  "Symbol": "SCSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Select Comfort Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Select Comfort Corporation - Common Stock",
  "Symbol": "SCSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "SolarCity Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SolarCity Corporation - Common Stock",
  "Symbol": "SCTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Shoe Carnival, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Shoe Carnival, Inc. - Common Stock",
  "Symbol": "SCVL",
  "Test Issue": "N"
  },
  {
  "Company Name": "SCYNEXIS, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SCYNEXIS, Inc. - Common Stock",
  "Symbol": "SCYX",
  "Test Issue": "N"
  },
  {
  "Company Name": "SeaChange International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SeaChange International, Inc. - Common Stock",
  "Symbol": "SEAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Origin Agritech Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Origin Agritech Limited - Common Stock",
  "Symbol": "SEED",
  "Test Issue": "N"
  },
  {
  "Company Name": "SEI Investments Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SEI Investments Company - Common Stock",
  "Symbol": "SEIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "SunEdison Semiconductor Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SunEdison Semiconductor Limited - Ordinary Shares",
  "Symbol": "SEMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Seneca Foods Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Seneca Foods Corp. - Class A Common Stock",
  "Symbol": "SENEA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Seneca Foods Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Seneca Foods Corp. - Class B Common Stock",
  "Symbol": "SENEB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sevcon, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sevcon, Inc. - Common Stock",
  "Symbol": "SEV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sound Financial Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sound Financial Bancorp, Inc. - Common Stock",
  "Symbol": "SFBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "ServisFirst Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ServisFirst Bancshares, Inc. - Common Stock",
  "Symbol": "SFBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Shutterfly, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Shutterfly, Inc. - Common Stock",
  "Symbol": "SFLY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sprouts Farmers Market, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sprouts Farmers Market, Inc. - Common Stock",
  "Symbol": "SFM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Simmons First National Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Simmons First National Corporation - Common Stock",
  "Symbol": "SFNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Southern First Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Southern First Bancshares, Inc. - Common Stock",
  "Symbol": "SFST",
  "Test Issue": "N"
  },
  {
  "Company Name": "SFX Entertainment, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SFX Entertainment, Inc. - Common Stock",
  "Symbol": "SFXE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stonegate Bank",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stonegate Bank - Common Stock",
  "Symbol": "SGBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Superior Uniform Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Superior Uniform Group, Inc. - Common Stock",
  "Symbol": "SGC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Seattle Genetics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Seattle Genetics, Inc. - Common Stock",
  "Symbol": "SGEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Silicon Graphics International Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Silicon Graphics International Corp - Common Stock",
  "Symbol": "SGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "SigmaTron International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "SigmaTron International, Inc. - Common Stock",
  "Symbol": "SGMA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sangamo BioSciences, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sangamo BioSciences, Inc. - Common Stock",
  "Symbol": "SGMO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Scientific Games Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Scientific Games Corp - Class A Common Stock",
  "Symbol": "SGMS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Signal Genetics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Signal Genetics, Inc. - Common Stock",
  "Symbol": "SGNL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sagent Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sagent Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "SGNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "SGOCO Group, Ltd",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "SGOCO Group, Ltd - Ordinary Shares (Cayman Islands)",
  "Symbol": "SGOC",
  "Test Issue": "N"
  },
  {
  "Company Name": "SPAR Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "SPAR Group, Inc. - Common Stock",
  "Symbol": "SGRP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synergy Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Synergy Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "SGYP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synergy Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Synergy Pharmaceuticals, Inc. - Unit",
  "Symbol": "SGYPU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synergy Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Synergy Pharmaceuticals, Inc. - Warrants",
  "Symbol": "SGYPW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Shore Bancshares Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Shore Bancshares Inc - Common Stock",
  "Symbol": "SHBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Shenandoah Telecommunications Co",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Shenandoah Telecommunications Co - Common Stock",
  "Symbol": "SHEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Seanergy Maritime Holdings Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Seanergy Maritime Holdings Corp - Common Stock",
  "Symbol": "SHIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sears Holdings Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sears Holdings Corporation - Common Stock",
  "Symbol": "SHLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sears Holdings Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sears Holdings Corporation - Warrant",
  "Symbol": "SHLDW",
  "Test Issue": "N"
  },
  {
  "Company Name": "A. Schulman, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "A. Schulman, Inc. - Common Stock",
  "Symbol": "SHLM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Shiloh Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Shiloh Industries, Inc. - Common Stock",
  "Symbol": "SHLO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Steven Madden, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Steven Madden, Ltd. - Common Stock",
  "Symbol": "SHOO",
  "Test Issue": "N"
  },
  {
  "Company Name": "ShoreTel, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ShoreTel, Inc. - Common Stock",
  "Symbol": "SHOR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sears Hometown and Outlet Stores, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sears Hometown and Outlet Stores, Inc. - Common Stock",
  "Symbol": "SHOS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Shire plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Shire plc - American Depositary Shares, each representing three Ordinary Shares",
  "Symbol": "SHPG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sigma",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sigma-Aldrich Corporation - Common Stock",
  "Symbol": "SIAL",
  "Test Issue": "N"
  },
  {
  "Company Name": "State Investors Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "State Investors Bancorp, Inc. - Common Stock",
  "Symbol": "SIBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Siebert Financial Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Siebert Financial Corp. - Common Stock",
  "Symbol": "SIEB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sientra, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sientra, Inc. - Common Stock",
  "Symbol": "SIEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "SI Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SI Financial Group, Inc. - Common Stock",
  "Symbol": "SIFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sify Technologies Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sify Technologies Limited - American Depository Shares, each represented by one Equity Share",
  "Symbol": "SIFY",
  "Test Issue": "N"
  },
  {
  "Company Name": "SIGA Technologies Inc.",
  "Financial Status": "Q",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SIGA Technologies Inc. - Common Stock",
  "Symbol": "SIGA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Selective Insurance Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Selective Insurance Group, Inc. - Common Stock",
  "Symbol": "SIGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sigma Designs, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sigma Designs, Inc. - Common Stock",
  "Symbol": "SIGM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Silicom Ltd",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Silicom Ltd - Ordinary Shares",
  "Symbol": "SILC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Silicon Image, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Silicon Image, Inc. - Common Stock",
  "Symbol": "SIMG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Silicon Motion Technology Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Silicon Motion Technology Corporation - American Depositary Shares, each representing four ordinary shares",
  "Symbol": "SIMO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sina Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sina Corporation - Ordinary Shares",
  "Symbol": "SINA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sino",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sino-Global Shipping America, Ltd. - Common Stock",
  "Symbol": "SINO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sirius XM Holdings Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sirius XM Holdings Inc. - Common Stock",
  "Symbol": "SIRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sirona Dental Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sirona Dental Systems, Inc. - Common Stock",
  "Symbol": "SIRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "SVB Financial Group",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SVB Financial Group - Common Stock",
  "Symbol": "SIVB",
  "Test Issue": "N"
  },
  {
  "Company Name": "SVB Financial Group",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SVB Financial Group - 7% Cumulative Trust Preferred Securities - SVB Capital II",
  "Symbol": "SIVBO",
  "Test Issue": "N"
  },
  {
  "Company Name": "6D Global Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "6D Global Technologies, Inc. - Common Stock",
  "Symbol": "SIXD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Skystar Bio",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Skystar Bio-Pharmaceutical Company - Common Stock",
  "Symbol": "SKBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Peak Resorts, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Peak Resorts, Inc. - Common Stock",
  "Symbol": "SKIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "FlexShares Credit",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "FlexShares Credit-Scored US Corporate Bond Index Fund",
  "Symbol": "SKOR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Skullcandy, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Skullcandy, Inc. - Common Stock",
  "Symbol": "SKUL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sky Solar Holdings, Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sky Solar Holdings, Ltd. - American Depositary Shares",
  "Symbol": "SKYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "SkyWest, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SkyWest, Inc. - Common Stock",
  "Symbol": "SKYW",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust ISE Cloud Computing Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust ISE Cloud Computing Index Fund",
  "Symbol": "SKYY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Silicon Laboratories, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Silicon Laboratories, Inc. - Common Stock",
  "Symbol": "SLAB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Select Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Select Bancorp, Inc. - Common Stock",
  "Symbol": "SLCT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Silgan Holdings Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Silgan Holdings Inc. - Common Stock",
  "Symbol": "SLGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "SLM Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SLM Corporation - Common Stock",
  "Symbol": "SLM",
  "Test Issue": "N"
  },
  {
  "Company Name": "SLM Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SLM Corporation - 6.97% Cumulative Redeemable Preferred Stock, Series A",
  "Symbol": "SLMAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "SLM Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SLM Corporation - Floating Rate Non-Cumulative Preferred Stock, Series B",
  "Symbol": "SLMBP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Simulations Plus, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Simulations Plus, Inc. - Common Stock",
  "Symbol": "SLP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Solar Capital Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Solar Capital Ltd. - Common Stock",
  "Symbol": "SLRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Selectica, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Selectica, Inc. - Common Stock",
  "Symbol": "SLTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - Credit Suisse Silver Shares Covered Call Exchange Traded Notes",
  "Symbol": "SLVO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Salix Pharmaceuticals, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Salix Pharmaceuticals, Ltd. - Common Stock",
  "Symbol": "SLXP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sino Mercury Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sino Mercury Acquisition Corp. - Common Stock",
  "Symbol": "SMAC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sino Mercury Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sino Mercury Acquisition Corp. - Right",
  "Symbol": "SMACR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sino Mercury Acquisition Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sino Mercury Acquisition Corp. - Unit",
  "Symbol": "SMACU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Southern Missouri Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Southern Missouri Bancorp, Inc. - Common Stock",
  "Symbol": "SMBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Super Micro Computer, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Super Micro Computer, Inc. - Common Stock",
  "Symbol": "SMCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sharps Compliance Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sharps Compliance Corp - Common Stock",
  "Symbol": "SMED",
  "Test Issue": "N"
  },
  {
  "Company Name": "Schmitt Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Schmitt Industries, Inc. - Common Stock",
  "Symbol": "SMIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Semler Scientific, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Semler Scientific, Inc. - Common Stock",
  "Symbol": "SMLR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Summit Financial Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Summit Financial Group, Inc. - Common Stock",
  "Symbol": "SMMF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Simplicity Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Simplicity Bancorp Inc. - Common Stock",
  "Symbol": "SMPL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stein Mart, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stein Mart, Inc. - Common Stock",
  "Symbol": "SMRT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Smith Micro Software, Inc.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Smith Micro Software, Inc. - Common Stock",
  "Symbol": "SMSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "SMART Technologies Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SMART Technologies Inc. - Common Shares",
  "Symbol": "SMT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Semtech Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Semtech Corporation - Common Stock",
  "Symbol": "SMTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "SMTP, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "SMTP, Inc. - Common Stock",
  "Symbol": "SMTP",
  "Test Issue": "N"
  },
  {
  "Company Name": "SMTC Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SMTC Corporation - Common Stock",
  "Symbol": "SMTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Inventure Foods, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Inventure Foods, Inc. - Common Stock",
  "Symbol": "SNAK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sun Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sun Bancorp, Inc. - Common Stock",
  "Symbol": "SNBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "State National Companies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "State National Companies, Inc. - Common Stock",
  "Symbol": "SNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synchronoss Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Synchronoss Technologies, Inc. - Common Stock",
  "Symbol": "SNCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "SanDisk Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SanDisk Corporation - Common Stock",
  "Symbol": "SNDK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Security National Financial Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Security National Financial Corporation - Class A Common Stock",
  "Symbol": "SNFCA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sun Hydraulics Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sun Hydraulics Corporation - Common Stock",
  "Symbol": "SNHY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Senomyx, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Senomyx, Inc. - Common Stock",
  "Symbol": "SNMX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synopsys, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Synopsys, Inc. - Common Stock",
  "Symbol": "SNPS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sunesis Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sunesis Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "SNSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synta Pharmaceuticals Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Synta Pharmaceuticals Corp. - Common Stock",
  "Symbol": "SNTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Southcoast Financial Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Southcoast Financial Corporation - Common Stock",
  "Symbol": "SOCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Global X Social Media Index ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Global X Social Media Index ETF",
  "Symbol": "SOCL",
  "Test Issue": "N"
  },
  {
  "Company Name": "SodaStream International Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SodaStream International Ltd. - Ordinary Shares",
  "Symbol": "SODA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sonic Foundry, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sonic Foundry, Inc. - Common Stock",
  "Symbol": "SOFO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sotherly Hotels Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sotherly Hotels Inc. - Common Stock",
  "Symbol": "SOHO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sotherly Hotels LP",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sotherly Hotels LP - 8.00% Senior Unsecured Notes Due 2018",
  "Symbol": "SOHOL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sotherly Hotels LP",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sotherly Hotels LP - 7.00% Senior Notes",
  "Symbol": "SOHOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sohu.com Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sohu.com Inc. - Common Stock",
  "Symbol": "SOHU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Southern National Bancorp of Virginia, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Southern National Bancorp of Virginia, Inc. - Common Stock",
  "Symbol": "SONA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sonic Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sonic Corp. - Common Stock",
  "Symbol": "SONC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sonus Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sonus Networks, Inc. - Common Stock",
  "Symbol": "SONS",
  "Test Issue": "N"
  },
  {
  "Company Name": "SORL Auto Parts, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SORL Auto Parts, Inc. - Common Stock",
  "Symbol": "SORL",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares PHLX SOX Semiconductor Sector Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares PHLX SOX Semiconductor Sector Index Fund",
  "Symbol": "SOXX",
  "Test Issue": "N"
  },
  {
  "Company Name": "SP Plus Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SP Plus Corporation - Common Stock",
  "Symbol": "SP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Span",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Span-America Medical Systems, Inc. - Common Stock",
  "Symbol": "SPAN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Spartan Motors, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Spartan Motors, Inc. - Common Stock",
  "Symbol": "SPAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "SuperCom, Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "SuperCom, Ltd. - Ordinary Shares",
  "Symbol": "SPCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Speed Commerce, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Speed Commerce, Inc. - Common Stock",
  "Symbol": "SPDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Spherix Incorporated",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Spherix Incorporated - Common Stock",
  "Symbol": "SPEX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sophiris Bio, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sophiris Bio, Inc. - Common Shares",
  "Symbol": "SPHS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Siliconware Precision Industries Company, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Siliconware Precision Industries Company, Ltd. - ADS represents common shares",
  "Symbol": "SPIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Spark Energy, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Spark Energy, Inc. - Class A Common Stock",
  "Symbol": "SPKE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Splunk Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Splunk Inc. - Common Stock",
  "Symbol": "SPLK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Staples, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Staples, Inc. - Common Stock",
  "Symbol": "SPLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Spectranetics Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Spectranetics Corporation - Common Stock",
  "Symbol": "SPNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sapiens International Corporation N.V.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sapiens International Corporation N.V. - Common Shares",
  "Symbol": "SPNS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Spok Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Spok Holdings, Inc. - Common Stock",
  "Symbol": "SPOK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Spectrum Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Spectrum Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "SPPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Supertel Hospitality, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Supertel Hospitality, Inc. - Common Stock",
  "Symbol": "SPPR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Supertel Hospitality, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Supertel Hospitality, Inc. - Series B Cumulative Preferred Stock",
  "Symbol": "SPPRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Supertel Hospitality, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Supertel Hospitality, Inc. - Series A Convertible Preferred Stock",
  "Symbol": "SPPRP",
  "Test Issue": "N"
  },
  {
  "Company Name": "SmartPros Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "SmartPros Ltd. - Common Stock",
  "Symbol": "SPRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "support.com, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "support.com, Inc. - Common Stock",
  "Symbol": "SPRT",
  "Test Issue": "N"
  },
  {
  "Company Name": "SPS Commerce, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SPS Commerce, Inc. - Common Stock",
  "Symbol": "SPSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "SpartanNash Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SpartanNash Company - Common Stock",
  "Symbol": "SPTN",
  "Test Issue": "N"
  },
  {
  "Company Name": "SkyPeople Fruit Juice, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "SkyPeople Fruit Juice, Inc. - Common Stock",
  "Symbol": "SPU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sportsman's Warehouse Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sportsman's Warehouse Holdings, Inc. - Common Stock",
  "Symbol": "SPWH",
  "Test Issue": "N"
  },
  {
  "Company Name": "SunPower Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SunPower Corporation - Common Stock",
  "Symbol": "SPWR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sequential Brands Group, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sequential Brands Group, Inc. - Common Stock",
  "Symbol": "SQBG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Square 1 Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Square 1 Financial, Inc. - Class A Common Stock",
  "Symbol": "SQBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "SciQuest, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SciQuest, Inc. - Common Stock",
  "Symbol": "SQI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sequenom, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sequenom, Inc. - Common Stock",
  "Symbol": "SQNM",
  "Test Issue": "N"
  },
  {
  "Company Name": "ProShares UltraPro Short QQQ",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ProShares UltraPro Short QQQ",
  "Symbol": "SQQQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "1st Source Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "1st Source Corporation - Common Stock",
  "Symbol": "SRCE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stericycle, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stericycle, Inc. - Common Stock",
  "Symbol": "SRCL",
  "Test Issue": "N"
  },
  {
  "Company Name": "SurModics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SurModics, Inc. - Common Stock",
  "Symbol": "SRDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "ServiceSource International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ServiceSource International, Inc. - Common Stock",
  "Symbol": "SREV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sorrento Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sorrento Therapeutics, Inc. - Common Stock",
  "Symbol": "SRNE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sarepta Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sarepta Therapeutics, Inc. - Common Stock",
  "Symbol": "SRPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sears Canada Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sears Canada Inc.  - Common Shares",
  "Symbol": "SRSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "South State Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "South State Corporation - Common Stock",
  "Symbol": "SSB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Summit State Bank",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Summit State Bank - Common Stock",
  "Symbol": "SSBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stewardship Financial Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Stewardship Financial Corp - Common Stock",
  "Symbol": "SSFN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sunshine Heart Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sunshine Heart Inc - Common Stock",
  "Symbol": "SSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "SS&C Technologies Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SS&C Technologies Holdings, Inc. - Common Stock",
  "Symbol": "SSNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Symmetry Surgical Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Symmetry Surgical Inc. - Common Stock",
  "Symbol": "SSRG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Silver Standard Resources Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Silver Standard Resources Inc. - Common Stock",
  "Symbol": "SSRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stratasys, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stratasys, Ltd. - Common Stock",
  "Symbol": "SSYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "STAAR Surgical Company",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "STAAR Surgical Company - Common Stock",
  "Symbol": "STAA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Student Transportation Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Student Transportation Inc - Common shares",
  "Symbol": "STB",
  "Test Issue": "N"
  },
  {
  "Company Name": "S&T Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "S&T Bancorp, Inc. - Common Stock",
  "Symbol": "STBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "State Bank Financial Corporation.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "State Bank Financial Corporation. - Common Stock",
  "Symbol": "STBZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stock Building Supply Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stock Building Supply Holdings, Inc. - Common Stock",
  "Symbol": "STCK",
  "Test Issue": "N"
  },
  {
  "Company Name": "StemCells, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "StemCells, Inc. - Common Stock",
  "Symbol": "STEM",
  "Test Issue": "N"
  },
  {
  "Company Name": "State Auto Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "State Auto Financial Corporation - Common Stock",
  "Symbol": "STFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "SunOpta, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "SunOpta, Inc. - Common Stock",
  "Symbol": "STKL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Steel Dynamics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Steel Dynamics, Inc. - Common Stock",
  "Symbol": "STLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stanley Furniture Company, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stanley Furniture Company, Inc. - Common Stock",
  "Symbol": "STLY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stemline Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Stemline Therapeutics, Inc. - Common Stock",
  "Symbol": "STML",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stamps.com Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stamps.com Inc. - Common Stock",
  "Symbol": "STMP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Steiner Leisure Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Steiner Leisure Limited - Common Shares",
  "Symbol": "STNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - iPath US Treasury Steepener ETN",
  "Symbol": "STPP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Strayer Education, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Strayer Education, Inc. - Common Stock",
  "Symbol": "STRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sterling Construction Company Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sterling Construction Company Inc - Common Stock",
  "Symbol": "STRL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Streamline Health Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Streamline Health Solutions, Inc. - Common Stock",
  "Symbol": "STRM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sutron Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sutron Corporation - Common Stock",
  "Symbol": "STRN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stratus Properties, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stratus Properties, Inc. - Common Stock",
  "Symbol": "STRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Strattec Security Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Strattec Security Corporation - Common Stock",
  "Symbol": "STRT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Starz",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Starz - Series A Common Stock",
  "Symbol": "STRZA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Starz",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Starz - Series B Common Stock",
  "Symbol": "STRZB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Seagate Technology.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Seagate Technology. - Common Stock",
  "Symbol": "STX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stereotaxis, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Stereotaxis, Inc. - Common Stock",
  "Symbol": "STXS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Suffolk Bancorp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Suffolk Bancorp - Common Stock",
  "Symbol": "SUBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Summer Infant, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Summer Infant, Inc. - Common Stock",
  "Symbol": "SUMR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Solar Senior Capital Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Solar Senior Capital Ltd. - Common Stock",
  "Symbol": "SUNS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Supernus Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Supernus Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "SUPN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synergetics USA, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Synergetics USA, Inc. - Common Stock",
  "Symbol": "SURG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Susquehanna Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Susquehanna Bancshares, Inc. - Common Stock",
  "Symbol": "SUSQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sutor Technology Group Limited",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sutor Technology Group Limited - Common Stock",
  "Symbol": "SUTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sinovac Biotech, Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sinovac Biotech, Ltd. - Ordinary Shares (Antigua/Barbudo)",
  "Symbol": "SVA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Severn Bancorp Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Severn Bancorp Inc - Common Stock",
  "Symbol": "SVBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Firsthand Technology Value Fund, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Firsthand Technology Value Fund, Inc. - Common Stock",
  "Symbol": "SVVC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Smith & Wesson Holding Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Smith & Wesson Holding Corporation - Common Stock",
  "Symbol": "SWHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sierra Wireless, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sierra Wireless, Inc. - Common Stock",
  "Symbol": "SWIR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Skyworks Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Skyworks Solutions, Inc. - Common Stock",
  "Symbol": "SWKS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Swisher Hygiene, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Swisher Hygiene, Inc. - Common Stock",
  "Symbol": "SWSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Stock Yards Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Stock Yards Bancorp, Inc. - Common Stock",
  "Symbol": "SYBT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sykes Enterprises, Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sykes Enterprises, Incorporated - Common Stock",
  "Symbol": "SYKE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Symantec Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Symantec Corporation - Common Stock",
  "Symbol": "SYMC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synthesis Energy Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Synthesis Energy Systems, Inc. - Common Stock",
  "Symbol": "SYMX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synaptics Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Synaptics Incorporated - Common Stock",
  "Symbol": "SYNA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synacor, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Synacor, Inc. - Common Stock",
  "Symbol": "SYNC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synalloy Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Synalloy Corporation - Common Stock",
  "Symbol": "SYNL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Syntel, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Syntel, Inc. - Common Stock",
  "Symbol": "SYNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sypris Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Sypris Solutions, Inc. - Common Stock",
  "Symbol": "SYPR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sysorex Global Holding Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Sysorex Global Holding Corp. - Common Stock",
  "Symbol": "SYRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Synutra International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Synutra International, Inc. - Common Stock",
  "Symbol": "SYUT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Sizmek Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Sizmek Inc. - Common Stock",
  "Symbol": "SZMK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Solazyme, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Solazyme, Inc. - Common Stock",
  "Symbol": "SZYM",
  "Test Issue": "N"
  },
  {
  "Company Name": "TransAct Technologies Incorporated",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "TransAct Technologies Incorporated - Common Stock",
  "Symbol": "TACT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Taitron Components Incorporated",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Taitron Components Incorporated - Class A Common Stock",
  "Symbol": "TAIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Barclays PLC",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Barclays PLC - Barclays Inverse US Treasury Composite ETN",
  "Symbol": "TAPR",
  "Test Issue": "N"
  },
  {
  "Company Name": "TASER International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TASER International, Inc. - Common Stock",
  "Symbol": "TASR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Carrols Restaurant Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Carrols Restaurant Group, Inc. - Common Stock",
  "Symbol": "TAST",
  "Test Issue": "N"
  },
  {
  "Company Name": "TAT Technologies Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "TAT Technologies Ltd. - Ordinary Shares",
  "Symbol": "TATT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Liberty Tax, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Liberty Tax, Inc. - Class A Common Stock",
  "Symbol": "TAX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Medallion Financial Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Medallion Financial Corp. - Common Stock",
  "Symbol": "TAXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Taylor Devices, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Taylor Devices, Inc. - Common Stock",
  "Symbol": "TAYD",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Bancorp, Inc. - Common Stock",
  "Symbol": "TBBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Transgenomic, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Transgenomic, Inc. - Common Stock",
  "Symbol": "TBIO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Triumph Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Triumph Bancorp, Inc. - Common Stock",
  "Symbol": "TBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Territorial Bancorp Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Territorial Bancorp Inc. - Common Stock",
  "Symbol": "TBNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Theravance Biopharma, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Theravance Biopharma, Inc. - Ordinary Shares",
  "Symbol": "TBPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Texas Capital Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Texas Capital Bancshares, Inc. - Common Stock",
  "Symbol": "TCBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Texas Capital Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Texas Capital Bancshares, Inc. - 6.50% Subordinated Notes due 2042",
  "Symbol": "TCBIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Texas Capital Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Texas Capital Bancshares, Inc. - Non Cumulative Preferred Perpetual Stock Series A",
  "Symbol": "TCBIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Texas Capital Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Texas Capital Bancshares, Inc. - Warrants 01/16/2019",
  "Symbol": "TCBIW",
  "Test Issue": "N"
  },
  {
  "Company Name": "TriCo Bancshares",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TriCo Bancshares - Common Stock",
  "Symbol": "TCBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Technical Communications Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Technical Communications Corporation - Common Stock",
  "Symbol": "TCCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Community Financial Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "The Community Financial Corporation - Common Stock",
  "Symbol": "TCFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "TCP Capital Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TCP Capital Corp. - Common Stock",
  "Symbol": "TCPC",
  "Test Issue": "N"
  },
  {
  "Company Name": "THL Credit, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "THL Credit, Inc. - Common Stock",
  "Symbol": "TCRD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tucows Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Tucows Inc. - Common Stock",
  "Symbol": "TCX",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Exchange",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Exchange-Traded Fund VI First Trust NASDAQ Technology Dividend Index Fund",
  "Symbol": "TDIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "TearLab Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "TearLab Corporation - Common Stock",
  "Symbol": "TEAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tech Data Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tech Data Corporation - Common Stock",
  "Symbol": "TECD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Bio",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Bio-Techne Corp - Common Stock",
  "Symbol": "TECH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tecumseh Products Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tecumseh Products Company - Common Stock",
  "Symbol": "TECU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tarena International, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tarena International, Inc. - American Depositary Shares",
  "Symbol": "TEDU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tenax Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Tenax Therapeutics, Inc. - Common Stock",
  "Symbol": "TENX",
  "Test Issue": "N"
  },
  {
  "Company Name": "TerraForm Power, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TerraForm Power, Inc. - Class A Common Stock",
  "Symbol": "TERP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tesco Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tesco Corporation - Common Stock",
  "Symbol": "TESO",
  "Test Issue": "N"
  },
  {
  "Company Name": "TESSCO Technologies Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TESSCO Technologies Incorporated - Common Stock",
  "Symbol": "TESS",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Fresh Market, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Fresh Market, Inc. - Common Stock",
  "Symbol": "TFM",
  "Test Issue": "N"
  },
  {
  "Company Name": "1347 Capital Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "1347 Capital Corp. - Common Stock",
  "Symbol": "TFSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "1347 Capital Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "1347 Capital Corp. - Right",
  "Symbol": "TFSCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "1347 Capital Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "1347 Capital Corp. - Unit",
  "Symbol": "TFSCU",
  "Test Issue": "N"
  },
  {
  "Company Name": "1347 Capital Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "1347 Capital Corp. - Warrant",
  "Symbol": "TFSCW",
  "Test Issue": "N"
  },
  {
  "Company Name": "TFS Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TFS Financial Corporation - Common Stock",
  "Symbol": "TFSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Transglobe Energy Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Transglobe Energy Corp - Ordinary Shares",
  "Symbol": "TGA",
  "Test Issue": "N"
  },
  {
  "Company Name": "TGC Industries, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TGC Industries, Inc. - Common Stock",
  "Symbol": "TGE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tecogen Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Tecogen Inc. - Common Stock",
  "Symbol": "TGEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tecnoglass Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Tecnoglass Inc. - Ordinary Shares",
  "Symbol": "TGLS",
  "Test Issue": "N"
  },
  {
  "Company Name": "TG Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "TG Therapeutics, Inc. - Common Stock",
  "Symbol": "TGTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Financial Corporation Indiana",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "First Financial Corporation Indiana - Common Stock",
  "Symbol": "THFF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Threshold Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Threshold Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "THLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Thoratec Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Thoratec Corporation - Common Stock",
  "Symbol": "THOR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Gentherm Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Gentherm Inc - Common Stock",
  "Symbol": "THRM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Theravance, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Theravance, Inc. - Common Stock",
  "Symbol": "THRX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Truett",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Truett-Hurst, Inc. - Class A Common Stock",
  "Symbol": "THST",
  "Test Issue": "N"
  },
  {
  "Company Name": "THT Heat Transfer Technology, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "THT Heat Transfer Technology, Inc. - Common Stock",
  "Symbol": "THTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "TICC Capital Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TICC Capital Corp. - Closed End Fund",
  "Symbol": "TICC",
  "Test Issue": "N"
  },
  {
  "Company Name": "TigerLogic Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "TigerLogic Corporation - Common Stock",
  "Symbol": "TIGR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Interface, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Interface, Inc. - Common Stock",
  "Symbol": "TILE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Harris & Harris Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Harris & Harris Group, Inc. - Common Stock",
  "Symbol": "TINY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tiptree Financial Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Tiptree Financial Inc. - Class A Common Stock",
  "Symbol": "TIPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Top Image Systems, Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Top Image Systems, Ltd. - Ordinary Shares",
  "Symbol": "TISA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Titan Machinery Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Titan Machinery Inc. - Common Stock",
  "Symbol": "TITN",
  "Test Issue": "N"
  },
  {
  "Company Name": "TiVo Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TiVo Inc. - Common Stock",
  "Symbol": "TIVO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tokai Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Tokai Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "TKAI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tekmira Pharmaceuticals Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Tekmira Pharmaceuticals Corp - Common Stock",
  "Symbol": "TKMR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tandy Leather Factory, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Tandy Leather Factory, Inc. - Common Stock",
  "Symbol": "TLF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Talmer Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Talmer Bancorp, Inc. - Class A Common Stock",
  "Symbol": "TLMR",
  "Test Issue": "N"
  },
  {
  "Company Name": "TetraLogic Pharmaceuticals Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "TetraLogic Pharmaceuticals Corporation - Common Stock",
  "Symbol": "TLOG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Telenav, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Telenav, Inc. - Common Stock",
  "Symbol": "TNAV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tandem Diabetes Care, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Tandem Diabetes Care, Inc. - Common Stock",
  "Symbol": "TNDM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tangoe, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tangoe, Inc. - Common Stock",
  "Symbol": "TNGO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tonix Pharmaceuticals Holding Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Tonix Pharmaceuticals Holding Corp. - Common Stock",
  "Symbol": "TNXP",
  "Test Issue": "N"
  },
  {
  "Company Name": "TOP Ships Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TOP Ships Inc. - Common Stock",
  "Symbol": "TOPS",
  "Test Issue": "N"
  },
  {
  "Company Name": "TOR Minerals International Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "TOR Minerals International Inc - Common Stock",
  "Symbol": "TORM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tuniu Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Tuniu Corporation - American Depositary Shares",
  "Symbol": "TOUR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Towne Bank",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Towne Bank - Common Stock",
  "Symbol": "TOWN",
  "Test Issue": "N"
  },
  {
  "Company Name": "ProShares UltraPro QQQ",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ProShares UltraPro QQQ",
  "Symbol": "TQQQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Dealertrack Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Dealertrack Technologies, Inc. - Common Stock",
  "Symbol": "TRAK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Two River Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Two River Bancorp - Common Stock",
  "Symbol": "TRCB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Torchlight Energy Resources, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Torchlight Energy Resources, Inc. - Common Stock",
  "Symbol": "TRCH",
  "Test Issue": "N"
  },
  {
  "Company Name": "LendingTree, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "LendingTree, Inc. - Common Stock",
  "Symbol": "TREE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Targacept, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Targacept, Inc. - Common Stock",
  "Symbol": "TRGT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Trinity Biotech plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Trinity Biotech plc - American Depositary Shares each representing 4 A Ordinary Shares",
  "Symbol": "TRIB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Trillium Therapeutics Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Trillium Therapeutics Inc. - Common Shares",
  "Symbol": "TRIL",
  "Test Issue": "N"
  },
  {
  "Company Name": "TripAdvisor, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TripAdvisor, Inc. - Common Stock",
  "Symbol": "TRIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "TriVascular Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TriVascular Technologies, Inc. - Common Stock",
  "Symbol": "TRIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Trimble Navigation Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Trimble Navigation Limited - Common Stock",
  "Symbol": "TRMB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Trustmark Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Trustmark Corporation - Common Stock",
  "Symbol": "TRMK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Transcat, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Transcat, Inc. - Common Stock",
  "Symbol": "TRNS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tornier N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tornier N.V. - Ordinary Shares",
  "Symbol": "TRNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "TrovaGene, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "TrovaGene, Inc. - Common Stock",
  "Symbol": "TROV",
  "Test Issue": "N"
  },
  {
  "Company Name": "TrovaGene, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "TrovaGene, Inc. - Unit",
  "Symbol": "TROVU",
  "Test Issue": "N"
  },
  {
  "Company Name": "TrovaGene, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "TrovaGene, Inc. - Warrant",
  "Symbol": "TROVW",
  "Test Issue": "N"
  },
  {
  "Company Name": "T. Rowe Price Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "T. Rowe Price Group, Inc. - Common Stock",
  "Symbol": "TROW",
  "Test Issue": "N"
  },
  {
  "Company Name": "TriMas Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TriMas Corporation - Common Stock",
  "Symbol": "TRS",
  "Test Issue": "N"
  },
  {
  "Company Name": "TrustCo Bank Corp NY",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TrustCo Bank Corp NY - Common Stock",
  "Symbol": "TRST",
  "Test Issue": "N"
  },
  {
  "Company Name": "Terrapin 3 Acquisition Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Terrapin 3 Acquisition Corporation - Class A Common Stock",
  "Symbol": "TRTL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Terrapin 3 Acquisition Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Terrapin 3 Acquisition Corporation - Units",
  "Symbol": "TRTLU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Terrapin 3 Acquisition Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Terrapin 3 Acquisition Corporation - Warrants",
  "Symbol": "TRTLW",
  "Test Issue": "N"
  },
  {
  "Company Name": "TrueCar, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TrueCar, Inc. - Common Stock",
  "Symbol": "TRUE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Trevena, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Trevena, Inc. - Common Stock",
  "Symbol": "TRVN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Timberland Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Timberland Bancorp, Inc. - Common Stock",
  "Symbol": "TSBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "TriState Capital Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TriState Capital Holdings, Inc. - Common Stock",
  "Symbol": "TSC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tractor Supply Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tractor Supply Company - Common Stock",
  "Symbol": "TSCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tower Semiconductor Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tower Semiconductor Ltd. - Ordinary Shares",
  "Symbol": "TSEM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tesla Motors, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tesla Motors, Inc. - Common Stock",
  "Symbol": "TSLA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tessera Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tessera Technologies, Inc. - Common Stock",
  "Symbol": "TSRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Trade Street Residential, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Trade Street Residential, Inc. - Common Stock",
  "Symbol": "TSRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "TSR, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "TSR, Inc. - Common Stock",
  "Symbol": "TSRI",
  "Test Issue": "N"
  },
  {
  "Company Name": "TESARO, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TESARO, Inc. - Common Stock",
  "Symbol": "TSRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "TheStreet, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "TheStreet, Inc. - Common Stock",
  "Symbol": "TST",
  "Test Issue": "N"
  },
  {
  "Company Name": "TeleCommunication Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TeleCommunication Systems, Inc. - Class A Common Stock",
  "Symbol": "TSYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "TeleTech Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TeleTech Holdings, Inc. - Common Stock",
  "Symbol": "TTEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tetra Tech, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tetra Tech, Inc. - Common Stock",
  "Symbol": "TTEK",
  "Test Issue": "N"
  },
  {
  "Company Name": "TechTarget, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "TechTarget, Inc. - Common Stock",
  "Symbol": "TTGT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Transition Therapeutics, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Transition Therapeutics, Inc. - Ordinary Shares (Canada)",
  "Symbol": "TTHI",
  "Test Issue": "N"
  },
  {
  "Company Name": "TTM Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TTM Technologies, Inc. - Common Stock",
  "Symbol": "TTMI",
  "Test Issue": "N"
  },
  {
  "Company Name": "T2 Biosystems, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "T2 Biosystems, Inc. - Common Stock",
  "Symbol": "TTOO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tetraphase Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tetraphase Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "TTPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tile Shop Hldgs, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tile Shop Hldgs, Inc. - Common Stock",
  "Symbol": "TTS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Take",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Take-Two Interactive Software, Inc. - Common Stock",
  "Symbol": "TTWO",
  "Test Issue": "N"
  },
  {
  "Company Name": "TubeMogul, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "TubeMogul, Inc. - Common Stock",
  "Symbol": "TUBE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Tuesday Morning Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Tuesday Morning Corp. - Common Stock",
  "Symbol": "TUES",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust Total US Market AlphaDEX ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust Total US Market AlphaDEX ETF",
  "Symbol": "TUSA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares Daily 2x VIX Short Term ETN",
  "Symbol": "TVIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares Daily 2x VIX Medium Term ETN",
  "Symbol": "TVIZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Towerstream Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Towerstream Corporation - Common Stock",
  "Symbol": "TWER",
  "Test Issue": "N"
  },
  {
  "Company Name": "Twin Disc, Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Twin Disc, Incorporated - Common Stock",
  "Symbol": "TWIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Trans World Entertainment Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Trans World Entertainment Corp. - Common Stock",
  "Symbol": "TWMC",
  "Test Issue": "N"
  },
  {
  "Company Name": "2U, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "2U, Inc. - Common Stock",
  "Symbol": "TWOU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Texas Instruments Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Texas Instruments Incorporated - Common Stock",
  "Symbol": "TXN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Texas Roadhouse, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Texas Roadhouse, Inc. - Common Stock",
  "Symbol": "TXRH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Monotype Imaging Holdings Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Monotype Imaging Holdings Inc. - Common Stock",
  "Symbol": "TYPE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Travelzoo Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Travelzoo Inc. - Common Stock",
  "Symbol": "TZOO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Universal Truckload Services, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Universal Truckload Services, Inc. - Common Stock",
  "Symbol": "UACL",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares MSCI UAE Capped ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares MSCI UAE Capped ETF",
  "Symbol": "UAE",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "United Bancorp, Inc. - Common Stock",
  "Symbol": "UBCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Security Bancshares",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Security Bancshares - Common Stock",
  "Symbol": "UBFO",
  "Test Issue": "N"
  },
  {
  "Company Name": "UBIC, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "UBIC, Inc. - American Depositary Shares",
  "Symbol": "UBIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Financial Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Financial Bancorp, Inc.  - Common Stock",
  "Symbol": "UBNK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ubiquiti Networks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ubiquiti Networks, Inc. - Common Stock",
  "Symbol": "UBNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "United Bancshares, Inc. - Common Stock",
  "Symbol": "UBOH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Union Bankshares Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Union Bankshares Corporation - Common Stock",
  "Symbol": "UBSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Bankshares, Inc. - Common Stock",
  "Symbol": "UBSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Community Bancorp",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "United Community Bancorp - Common Stock",
  "Symbol": "UCBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Community Banks, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Community Banks, Inc. - Common Stock",
  "Symbol": "UCBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Community Financial Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Community Financial Corp. - Common Stock",
  "Symbol": "UCFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ultra Clean Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ultra Clean Holdings, Inc. - Common Stock",
  "Symbol": "UCTT",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Development Funding IV",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Development Funding IV - Common Shares of Beneficial Interest",
  "Symbol": "UDF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Universal Electronics Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Universal Electronics Inc. - Common Stock",
  "Symbol": "UEIC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Net 1 UEPS Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Net 1 UEPS Technologies, Inc. - Common Stock",
  "Symbol": "UEPS",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Fire Group, Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Fire Group, Inc - Common Stock",
  "Symbol": "UFCS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Universal Forest Products, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Universal Forest Products, Inc. - Common Stock",
  "Symbol": "UFPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "UFP Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "UFP Technologies, Inc. - Common Stock",
  "Symbol": "UFPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "United",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "United-Guardian, Inc. - Common Stock",
  "Symbol": "UG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares 3x Long Gold ETN",
  "Symbol": "UGLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Amerco",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Amerco - Common Stock",
  "Symbol": "UHAL",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Insurance Holdings Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "United Insurance Holdings Corp. - Common Stock",
  "Symbol": "UIHC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ultralife Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Ultralife Corporation - Common Stock",
  "Symbol": "ULBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ulta Salon, Cosmetics & Fragrance, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ulta Salon, Cosmetics & Fragrance, Inc. - Common Stock",
  "Symbol": "ULTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Ultimate Software Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Ultimate Software Group, Inc. - Common Stock",
  "Symbol": "ULTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ultrapetrol (Bahamas) Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ultrapetrol (Bahamas) Limited - common stock",
  "Symbol": "ULTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "UMB Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "UMB Financial Corporation - Common Stock",
  "Symbol": "UMBF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Umpqua Holdings Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Umpqua Holdings Corporation - Common Stock",
  "Symbol": "UMPQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Unico American Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Unico American Corporation - Common Stock",
  "Symbol": "UNAM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Union Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Union Bankshares, Inc. - Common Stock",
  "Symbol": "UNB",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Natural Foods, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Natural Foods, Inc. - Common Stock",
  "Symbol": "UNFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Unilife Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Unilife Corporation - Common Stock",
  "Symbol": "UNIS",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Online, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Online, Inc. - Common Stock",
  "Symbol": "UNTD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Unity Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Unity Bancorp, Inc. - Common Stock",
  "Symbol": "UNTY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Uni",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Uni-Pixel, Inc. - Common Stock",
  "Symbol": "UNXL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Uroplasty, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Uroplasty, Inc. - Common Stock",
  "Symbol": "UPI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Unwired Planet, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Unwired Planet, Inc. - Common Stock",
  "Symbol": "UPIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Upland Software, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Upland Software, Inc. - Common Stock",
  "Symbol": "UPLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Urban Outfitters, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Urban Outfitters, Inc. - Common Stock",
  "Symbol": "URBN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Uranium Resources, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Uranium Resources, Inc. - Common Stock",
  "Symbol": "URRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "USA Truck, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "USA Truck, Inc. - Common Stock",
  "Symbol": "USAK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Universal Stainless & Alloy Products, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Universal Stainless & Alloy Products, Inc. - Common Stock",
  "Symbol": "USAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "USA Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "USA Technologies, Inc. - Common Stock",
  "Symbol": "USAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "USA Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "USA Technologies, Inc. - Preferred Stock",
  "Symbol": "USATP",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Security Bancshares, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "United Security Bancshares, Inc. - Common Stock",
  "Symbol": "USBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "U S Concrete, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "U S Concrete, Inc. - Common Stock",
  "Symbol": "USCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "U.S. Energy Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "U.S. Energy Corp. - Common Stock",
  "Symbol": "USEG",
  "Test Issue": "N"
  },
  {
  "Company Name": "United States Lime & Minerals, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United States Lime & Minerals, Inc. - Common Stock",
  "Symbol": "USLM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares 3x Long Silver ETN",
  "Symbol": "USLV",
  "Test Issue": "N"
  },
  {
  "Company Name": "USMD Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "USMD Holdings, Inc. - Common Stock",
  "Symbol": "USMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Stationers Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Stationers Inc. - Common Stock",
  "Symbol": "USTR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ultratech, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ultratech, Inc. - Common Stock",
  "Symbol": "UTEK",
  "Test Issue": "N"
  },
  {
  "Company Name": "United Therapeutics Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "United Therapeutics Corporation - Common Stock",
  "Symbol": "UTHR",
  "Test Issue": "N"
  },
  {
  "Company Name": "UTi Worldwide Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "UTi Worldwide Inc. - Ordinary Shares",
  "Symbol": "UTIW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Utah Medical Products, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Utah Medical Products, Inc. - Common Stock",
  "Symbol": "UTMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "UTStarcom Holdings Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "UTStarcom Holdings Corp - Ordinary Shares",
  "Symbol": "UTSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Univest Corporation of Pennsylvania",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Univest Corporation of Pennsylvania - Common Stock",
  "Symbol": "UVSP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Virgin America Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Virgin America Inc. - Common Stock",
  "Symbol": "VA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Value Line, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Value Line, Inc. - Common Stock",
  "Symbol": "VALU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Validea Market Legends ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Validea Market Legends ETF",
  "Symbol": "VALX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vascular Solutions, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vascular Solutions, Inc. - Common Stock",
  "Symbol": "VASC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Village Bank and Trust Financial Corp.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Village Bank and Trust Financial Corp. - Common Stock",
  "Symbol": "VBFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "VBI Vaccines Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "VBI Vaccines Inc. - Common Stock",
  "Symbol": "VBIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vascular Biogenics Ltd.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vascular Biogenics Ltd. - Ordinary Shares",
  "Symbol": "VBLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vident Core U.S. Bond Strategy Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vident Core U.S. Bond Strategy Fund",
  "Symbol": "VBND",
  "Test Issue": "N"
  },
  {
  "Company Name": "Veritex Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Veritex Holdings, Inc. - Common Stock",
  "Symbol": "VBTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vericel Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Vericel Corporation - Common Stock",
  "Symbol": "VCEL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Intermediate",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Intermediate-Term Corporate Bond ETF",
  "Symbol": "VCIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Long",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Long-Term Corporate Bond ETF",
  "Symbol": "VCLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Short",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Short-Term Corporate Bond ETF",
  "Symbol": "VCSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Veracyte, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Veracyte, Inc. - Common Stock",
  "Symbol": "VCYT",
  "Test Issue": "N"
  },
  {
  "Company Name": "VASCO Data Security International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "VASCO Data Security International, Inc. - Common Stock",
  "Symbol": "VDSI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Veeco Instruments Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Veeco Instruments Inc. - Common Stock",
  "Symbol": "VECO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Viggle Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Viggle Inc. - Common Stock",
  "Symbol": "VGGL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Intermediate",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Intermediate -Term Government Bond ETF",
  "Symbol": "VGIT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Long",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Long-Term Government Bond ETF",
  "Symbol": "VGLT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Short",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Short-Term Government ETF",
  "Symbol": "VGSH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Viacom Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Viacom Inc. - Class A Common Stock",
  "Symbol": "VIA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Viacom Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Viacom Inc. - Class B Common Stock",
  "Symbol": "VIAB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Viasystems Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Viasystems Group, Inc. - Common Stock",
  "Symbol": "VIAS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vical Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vical Incorporated - Common Stock",
  "Symbol": "VICL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vicor Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vicor Corporation - Common Stock",
  "Symbol": "VICR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Video Display Corporation",
  "Financial Status": "D",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Video Display Corporation - Common Stock",
  "Symbol": "VIDE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vident International Equity Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vident International Equity Fund",
  "Symbol": "VIDI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Viewtran Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Viewtran Group, Inc. - Common Stock",
  "Symbol": "VIEW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares VIX Short Term ETN",
  "Symbol": "VIIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares VIX Medium Term ETN",
  "Symbol": "VIIZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vimicro International Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vimicro International Corporation - American depositary shares, each representing four ordinary shares",
  "Symbol": "VIMC",
  "Test Issue": "N"
  },
  {
  "Company Name": "VimpelCom Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "VimpelCom Ltd. - American Depositary Shares",
  "Symbol": "VIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Virco Manufacturing Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Virco Manufacturing Corporation - Common Stock",
  "Symbol": "VIRC",
  "Test Issue": "N"
  },
  {
  "Company Name": "VisionChina Media, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "VisionChina Media, Inc. - American Depositary Shares, each representing one Common Share",
  "Symbol": "VISN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Meridian Bioscience Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Meridian Bioscience Inc. - Common Stock",
  "Symbol": "VIVO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Knightsbridge Shipping Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Knightsbridge Shipping Limited - Common Stock",
  "Symbol": "VLCCF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Village Super Market, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Village Super Market, Inc. - Class A Common Stock",
  "Symbol": "VLGEA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Voltari Corporation",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Voltari Corporation - Common Stock",
  "Symbol": "VLTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Valley National Bancorp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Valley National Bancorp - Warrants 07/01/2015",
  "Symbol": "VLYWW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Mortgage",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Mortgage-Backed Securities ETF",
  "Symbol": "VMBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanda Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanda Pharmaceuticals Inc. - Common Stock",
  "Symbol": "VNDA",
  "Test Issue": "N"
  },
  {
  "Company Name": "21Vianet Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "21Vianet Group, Inc. - American Depositary Shares",
  "Symbol": "VNET",
  "Test Issue": "N"
  },
  {
  "Company Name": "Viper Energy Partners LP",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Viper Energy Partners LP - Common Unit",
  "Symbol": "VNOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Global ex",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Global ex-U.S. Real Estate ETF",
  "Symbol": "VNQI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Natural Resources LLC",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Natural Resources LLC - Common Units",
  "Symbol": "VNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Natural Resources LLC",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Natural Resources LLC - 7.875% Series A Cumulative Redeemable Perpetual Preferred Unit",
  "Symbol": "VNRAP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Natural Resources LLC",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Natural Resources LLC - 7.625% Series B Cumulative Redeemable Perpetual Preferred Unit",
  "Symbol": "VNRBP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Natural Resources LLC",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Natural Resources LLC - 7.75% Series C Cumulative Redeemable Perpetual Preferred Unit",
  "Symbol": "VNRCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vodafone Group Plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vodafone Group Plc - American Depositary Shares each representing ten Ordinary Shares",
  "Symbol": "VOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Volcano Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Volcano Corporation - Common Stock",
  "Symbol": "VOLC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Russell 1000 ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Russell 1000 ETF",
  "Symbol": "VONE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Russell 1000 Growth ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Russell 1000 Growth ETF",
  "Symbol": "VONG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Russell 1000 Value ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Russell 1000 Value ETF",
  "Symbol": "VONV",
  "Test Issue": "N"
  },
  {
  "Company Name": "VOXX International Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "VOXX International Corporation - Class A Common Stock",
  "Symbol": "VOXX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vapor Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Vapor Corp. - Common Stock",
  "Symbol": "VPCO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vera Bradley, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vera Bradley, Inc. - Common Stock",
  "Symbol": "VRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vermillion, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Vermillion, Inc. - Common Stock",
  "Symbol": "VRML",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vringo, Inc.",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Vringo, Inc. - Common Stock",
  "Symbol": "VRNG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vringo, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Vringo, Inc. - Warrants",
  "Symbol": "VRNGW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Varonis Systems, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Varonis Systems, Inc. - Common Stock",
  "Symbol": "VRNS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Verint Systems Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Verint Systems Inc. - Common Stock",
  "Symbol": "VRNT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Verisk Analytics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Verisk Analytics, Inc. - Class A Common Stock",
  "Symbol": "VRSK",
  "Test Issue": "N"
  },
  {
  "Company Name": "VeriSign, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "VeriSign, Inc. - Common Stock",
  "Symbol": "VRSN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vestin Realty Mortgage I, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vestin Realty Mortgage I, Inc. - Common Stock",
  "Symbol": "VRTA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vestin Realty Mortgage II, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vestin Realty Mortgage II, Inc. - Common Stock",
  "Symbol": "VRTB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Virtus Investment Partners, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Virtus Investment Partners, Inc. - Common Stock",
  "Symbol": "VRTS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Virtusa Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Virtusa Corporation - common stock",
  "Symbol": "VRTU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vertex Pharmaceuticals Incorporated",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vertex Pharmaceuticals Incorporated - Common Stock",
  "Symbol": "VRTX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Versartis, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Versartis, Inc. - Common Stock",
  "Symbol": "VSAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "ViaSat, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ViaSat, Inc. - Common Stock",
  "Symbol": "VSAT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vision",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Vision-Sciences, Inc. - Common Stock",
  "Symbol": "VSCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "VirtualScopics, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "VirtualScopics, Inc. - Common Stock",
  "Symbol": "VSCP",
  "Test Issue": "N"
  },
  {
  "Company Name": "VSE Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "VSE Corporation - Common Stock",
  "Symbol": "VSEC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Verastem, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Verastem, Inc. - Common Stock",
  "Symbol": "VSTM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vitae Pharmaceuticals, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vitae Pharmaceuticals, Inc. - Common Stock",
  "Symbol": "VTAE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Russell 3000 ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Russell 3000 ETF",
  "Symbol": "VTHR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Short",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Short-Term Inflation-Protected Securities Index Fund",
  "Symbol": "VTIP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vital Therapies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Vital Therapies, Inc. - Common Stock",
  "Symbol": "VTL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vertex Energy, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Vertex Energy, Inc - Common Stock",
  "Symbol": "VTNR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vitesse Semiconductor Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vitesse Semiconductor Corporation - Common Stock",
  "Symbol": "VTSS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Russell 2000 Growth ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Russell 2000 Growth ETF",
  "Symbol": "VTWG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Russell 2000 ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Russell 2000 ETF",
  "Symbol": "VTWO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Russell 2000 Value ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Russell 2000 Value ETF",
  "Symbol": "VTWV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vident Core US Equity ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vident Core US Equity ETF",
  "Symbol": "VUSE",
  "Test Issue": "N"
  },
  {
  "Company Name": "VIVUS, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "VIVUS, Inc. - Common Stock",
  "Symbol": "VVUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Emerging Markets Government Bond ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Emerging Markets Government Bond ETF",
  "Symbol": "VWOB",
  "Test Issue": "N"
  },
  {
  "Company Name": "VWR Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "VWR Corporation - Common Stock",
  "Symbol": "VWR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Vanguard Total International Stock ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Vanguard Total International Stock ETF",
  "Symbol": "VXUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Valley Financial Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Valley Financial Corporation - Common Stock",
  "Symbol": "VYFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Westamerica Bancorporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Westamerica Bancorporation - Common Stock",
  "Symbol": "WABC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Washington Federal, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Washington Federal, Inc. - Common Stock",
  "Symbol": "WAFD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Washington Federal, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Washington Federal, Inc. - Warrants 11/14/2018",
  "Symbol": "WAFDW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Washington Trust Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Washington Trust Bancorp, Inc. - Common Stock",
  "Symbol": "WASH",
  "Test Issue": "N"
  },
  {
  "Company Name": "Energous Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Energous Corporation - Common Stock",
  "Symbol": "WATT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wave Systems Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Wave Systems Corp. - Class A Common Stock",
  "Symbol": "WAVX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wayne Savings Bancshares Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Wayne Savings Bancshares Inc. - Common Stock",
  "Symbol": "WAYN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Weibo Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Weibo Corporation - American Depositary Share",
  "Symbol": "WB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Walgreens Boots Alliance, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Walgreens Boots Alliance, Inc. - Common Stock",
  "Symbol": "WBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Westbury Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Westbury Bancorp, Inc. - Common Stock",
  "Symbol": "WBB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wolverine Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Wolverine Bancorp, Inc. - Common Stock",
  "Symbol": "WBKC",
  "Test Issue": "N"
  },
  {
  "Company Name": "WebMD Health Corp",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WebMD Health Corp - Common Stock",
  "Symbol": "WBMD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Western Digital Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Western Digital Corporation - Common Stock",
  "Symbol": "WDC",
  "Test Issue": "N"
  },
  {
  "Company Name": "WD",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WD-40 Company - Common Stock",
  "Symbol": "WDFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wellesley Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Wellesley Bancorp, Inc. - Common Stock",
  "Symbol": "WEBK",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wendy's Company (The)",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Wendy's Company (The) - Common Stock",
  "Symbol": "WEN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Werner Enterprises, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Werner Enterprises, Inc. - Common Stock",
  "Symbol": "WERN",
  "Test Issue": "N"
  },
  {
  "Company Name": "WisdomTree Investments, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WisdomTree Investments, Inc. - Common Stock",
  "Symbol": "WETF",
  "Test Issue": "N"
  },
  {
  "Company Name": "Weyco Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Weyco Group, Inc. - Common Stock",
  "Symbol": "WEYS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WashingtonFirst Bankshares Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "WashingtonFirst Bankshares Inc - Common Stock",
  "Symbol": "WFBI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Westfield Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Westfield Financial, Inc. - Common Stock",
  "Symbol": "WFD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Whole Foods Market, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Whole Foods Market, Inc. - Common Stock",
  "Symbol": "WFM",
  "Test Issue": "N"
  },
  {
  "Company Name": "WaferGen Bio",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "WaferGen Bio-systems, Inc. - Common Stock",
  "Symbol": "WGBS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WhiteHorse Finance, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WhiteHorse Finance, Inc. - Common Stock",
  "Symbol": "WHF",
  "Test Issue": "N"
  },
  {
  "Company Name": "WhiteHorse Finance, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WhiteHorse Finance, Inc. - 6.50% Senior Notes due 2020",
  "Symbol": "WHFBL",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wilhelmina International, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Wilhelmina International, Inc. - Common Stock",
  "Symbol": "WHLM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wheeler Real Estate Investment Trust, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Wheeler Real Estate Investment Trust, Inc. - Common Stock",
  "Symbol": "WHLR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wheeler Real Estate Investment Trust, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Wheeler Real Estate Investment Trust, Inc. - Preferred Stock",
  "Symbol": "WHLRP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wheeler Real Estate Investment Trust, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Wheeler Real Estate Investment Trust, Inc. - Warrants",
  "Symbol": "WHLRW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wilshire Bancorp, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Wilshire Bancorp, Inc. - Common Stock",
  "Symbol": "WIBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Boingo Wireless, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Boingo Wireless, Inc. - Common Stock",
  "Symbol": "WIFI",
  "Test Issue": "N"
  },
  {
  "Company Name": "G. Willi",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "G. Willi-Food International,  Ltd. - Ordinary Shares",
  "Symbol": "WILC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wi",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Wi-LAN Inc - Common Shares",
  "Symbol": "WILN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Windstream Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Windstream Holdings, Inc. - Common Stock",
  "Symbol": "WIN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Winmark Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Winmark Corporation - Common Stock",
  "Symbol": "WINA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Encore Wire Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Encore Wire Corporation - Common Stock",
  "Symbol": "WIRE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wix.com Ltd.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Wix.com Ltd. - Ordinary Shares",
  "Symbol": "WIX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Westmoreland Coal Company",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Westmoreland Coal Company - Common Stock",
  "Symbol": "WLB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Westmoreland Coal Company",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Westmoreland Coal Company - Depositary Shares, rep. 1/4 of a share of Ser. A Preferred Stock",
  "Symbol": "WLBPZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Willdan Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Willdan Group, Inc. - Common Stock",
  "Symbol": "WLDN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Willis Lease Finance Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Willis Lease Finance Corporation - Common Stock",
  "Symbol": "WLFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "WL Ross Holding Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "WL Ross Holding Corp. - Common Stock",
  "Symbol": "WLRH",
  "Test Issue": "N"
  },
  {
  "Company Name": "WL Ross Holding Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "WL Ross Holding Corp. - Unit",
  "Symbol": "WLRHU",
  "Test Issue": "N"
  },
  {
  "Company Name": "WL Ross Holding Corp.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "WL Ross Holding Corp. - Warrant",
  "Symbol": "WLRHW",
  "Test Issue": "N"
  },
  {
  "Company Name": "West Marine, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "West Marine, Inc. - Common Stock",
  "Symbol": "WMAR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wright Medical Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Wright Medical Group, Inc. - Common Stock",
  "Symbol": "WMGI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wright Medical Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Wright Medical Group, Inc. - Contingent Value Right",
  "Symbol": "WMGIZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "iShares S&P Global Timber & Forestry Index Fund",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "iShares S&P Global Timber & Forestry Index Fund",
  "Symbol": "WOOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "VCA Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "VCA Inc.  - Common Stock",
  "Symbol": "WOOF",
  "Test Issue": "N"
  },
  {
  "Company Name": "WPCS International Incorporated",
  "Financial Status": "D",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "WPCS International Incorporated - Common Stock",
  "Symbol": "WPCS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WPP plc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WPP plc - American Depositary Shares each representing five Ordinary Shares",
  "Symbol": "WPPGY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Westport Innovations Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Westport Innovations Inc - Ordinary Shares",
  "Symbol": "WPRT",
  "Test Issue": "N"
  },
  {
  "Company Name": "Warren Resources, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Warren Resources, Inc. - Common Stock",
  "Symbol": "WRES",
  "Test Issue": "N"
  },
  {
  "Company Name": "World Acceptance Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "World Acceptance Corporation - Common Stock",
  "Symbol": "WRLD",
  "Test Issue": "N"
  },
  {
  "Company Name": "WesBanco, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WesBanco, Inc. - Common Stock",
  "Symbol": "WSBC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Waterstone Financial, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Waterstone Financial, Inc. - Common Stock",
  "Symbol": "WSBF",
  "Test Issue": "N"
  },
  {
  "Company Name": "WSI Industries Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "WSI Industries Inc. - Common Stock",
  "Symbol": "WSCI",
  "Test Issue": "N"
  },
  {
  "Company Name": "WSFS Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WSFS Financial Corporation - Common Stock",
  "Symbol": "WSFS",
  "Test Issue": "N"
  },
  {
  "Company Name": "WSFS Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "WSFS Financial Corporation - 6.25% Senior Notes Due 2019",
  "Symbol": "WSFSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "West Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "West Corporation - Common Stock",
  "Symbol": "WSTC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wayside Technology Group, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Wayside Technology Group, Inc. - Common Stock",
  "Symbol": "WSTG",
  "Test Issue": "N"
  },
  {
  "Company Name": "Westell Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Westell Technologies, Inc. - Class A Common Stock",
  "Symbol": "WSTL",
  "Test Issue": "N"
  },
  {
  "Company Name": "West Bancorporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "West Bancorporation - Common Stock",
  "Symbol": "WTBA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wintrust Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Wintrust Financial Corporation - Common Stock",
  "Symbol": "WTFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wintrust Financial Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Wintrust Financial Corporation - Warrants",
  "Symbol": "WTFCW",
  "Test Issue": "N"
  },
  {
  "Company Name": "The Wet Seal, Inc.",
  "Financial Status": "D",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The Wet Seal, Inc. - Class A Common Stock",
  "Symbol": "WTSL",
  "Test Issue": "N"
  },
  {
  "Company Name": "WVS Financial Corp.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "WVS Financial Corp. - Common Stock",
  "Symbol": "WVFC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Willamette Valley Vineyards, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Willamette Valley Vineyards, Inc. - Common Stock",
  "Symbol": "WVVI",
  "Test Issue": "N"
  },
  {
  "Company Name": "Woodward, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Woodward, Inc. - Common Stock",
  "Symbol": "WWD",
  "Test Issue": "N"
  },
  {
  "Company Name": "Web.com Group, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Web.com Group, Inc. - Common Stock",
  "Symbol": "WWWW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Wynn Resorts, Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Wynn Resorts, Limited - Common Stock",
  "Symbol": "WYNN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Xenith Bankshares, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Xenith Bankshares, Inc. - Common Stock",
  "Symbol": "XBKS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Xcerra Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Xcerra Corporation - Common Stock",
  "Symbol": "XCRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Xenon Pharmaceuticals Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Xenon Pharmaceuticals Inc. - Common Shares",
  "Symbol": "XENE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Intersect ENT, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Intersect ENT, Inc. - Common Stock",
  "Symbol": "XENT",
  "Test Issue": "N"
  },
  {
  "Company Name": "XG Technology, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "XG Technology, Inc - Common Stock",
  "Symbol": "XGTI",
  "Test Issue": "N"
  },
  {
  "Company Name": "XG Technology, Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "XG Technology, Inc - Warrants",
  "Symbol": "XGTIW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares Daily Inverse VIX Short Term ETN",
  "Symbol": "XIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Xilinx, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Xilinx, Inc. - Common Stock",
  "Symbol": "XLNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Acceleron Pharma Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Acceleron Pharma Inc. - Common Stock",
  "Symbol": "XLRN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Xencor, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Xencor, Inc. - Common Stock",
  "Symbol": "XNCR",
  "Test Issue": "N"
  },
  {
  "Company Name": "Xunlei Limited",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Xunlei Limited - American Depositary Receipts",
  "Symbol": "XNET",
  "Test Issue": "N"
  },
  {
  "Company Name": "XenoPort, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "XenoPort, Inc. - Common Stock",
  "Symbol": "XNPT",
  "Test Issue": "N"
  },
  {
  "Company Name": "XOMA Corporation",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "XOMA Corporation - Common Stock",
  "Symbol": "XOMA",
  "Test Issue": "N"
  },
  {
  "Company Name": "The ExOne Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The ExOne Company - Common Stock",
  "Symbol": "XONE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Xoom Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Xoom Corporation - Common Stock",
  "Symbol": "XOOM",
  "Test Issue": "N"
  },
  {
  "Company Name": "Xplore Technologies Corp",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Xplore Technologies Corp - Common Stock",
  "Symbol": "XPLR",
  "Test Issue": "N"
  },
  {
  "Company Name": "DENTSPLY International Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "DENTSPLY International Inc. - Common Stock",
  "Symbol": "XRAY",
  "Test Issue": "N"
  },
  {
  "Company Name": "XTL Biopharmaceuticals Ltd.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "XTL Biopharmaceuticals Ltd. - American Depositary Shares",
  "Symbol": "XTLB",
  "Test Issue": "N"
  },
  {
  "Company Name": "Ixia",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Ixia - Common Stock",
  "Symbol": "XXIA",
  "Test Issue": "N"
  },
  {
  "Company Name": "First Trust International Multi",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "First Trust International Multi-Asset Diversified Income Index Fund",
  "Symbol": "YDIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Yodlee, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Yodlee, Inc. - Common Stock",
  "Symbol": "YDLE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Yahoo! Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Yahoo! Inc. - Common Stock",
  "Symbol": "YHOO",
  "Test Issue": "N"
  },
  {
  "Company Name": "Yandex N.V.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Yandex N.V. - Class A Ordinary Shares",
  "Symbol": "YNDX",
  "Test Issue": "N"
  },
  {
  "Company Name": "You On Demand Holdings, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "You On Demand Holdings, Inc. - Common Stock",
  "Symbol": "YOD",
  "Test Issue": "N"
  },
  {
  "Company Name": "The York Water Company",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "The York Water Company - Common Stock",
  "Symbol": "YORW",
  "Test Issue": "N"
  },
  {
  "Company Name": "AdvisorShares YieldPro ETF",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "AdvisorShares YieldPro ETF",
  "Symbol": "YPRO",
  "Test Issue": "N"
  },
  {
  "Company Name": "YRC Worldwide, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "YRC Worldwide, Inc. - Common Stock",
  "Symbol": "YRCW",
  "Test Issue": "N"
  },
  {
  "Company Name": "YY Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "YY Inc. - American Depositary Shares",
  "Symbol": "YY",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zillow, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zillow, Inc. - Class A Common Stock",
  "Symbol": "Z",
  "Test Issue": "N"
  },
  {
  "Company Name": "ZAGG Inc",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ZAGG Inc - Common Stock",
  "Symbol": "ZAGG",
  "Test Issue": "N"
  },
  {
  "Company Name": "ZaZa Energy Corporation",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ZaZa Energy Corporation - Common Stock",
  "Symbol": "ZAZA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zebra Technologies Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zebra Technologies Corporation - Class A Common Stock",
  "Symbol": "ZBRA",
  "Test Issue": "N"
  },
  {
  "Company Name": "Olympic Steel, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Olympic Steel, Inc. - Common Stock",
  "Symbol": "ZEUS",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zafgen, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zafgen, Inc. - Common Stock",
  "Symbol": "ZFGN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zogenix, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Zogenix, Inc. - Common Stock",
  "Symbol": "ZGNX",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zhone Technologies, Inc.",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "Zhone Technologies, Inc. - Common Stock",
  "Symbol": "ZHNE",
  "Test Issue": "N"
  },
  {
  "Company Name": "Horsehead Holding Corp.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Horsehead Holding Corp. - Common Stock",
  "Symbol": "ZINC",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zions Bancorporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zions Bancorporation - Common Stock",
  "Symbol": "ZION",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zions Bancorporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zions Bancorporation - Warrants 05/21/2020",
  "Symbol": "ZIONW",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zions Bancorporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zions Bancorporation - Warrants",
  "Symbol": "ZIONZ",
  "Test Issue": "N"
  },
  {
  "Company Name": "ZIOPHARM Oncology Inc",
  "Financial Status": "N",
  "Market Category": "S",
  "Round Lot Size": 100,
  "Security Name": "ZIOPHARM Oncology Inc - Common Stock",
  "Symbol": "ZIOP",
  "Test Issue": "N"
  },
  {
  "Company Name": "Credit Suisse AG",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Credit Suisse AG - VelocityShares Daily Inverse VIX Medium Term ETN",
  "Symbol": "ZIV",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zix Corporation",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zix Corporation - Common Stock",
  "Symbol": "ZIXI",
  "Test Issue": "N"
  },
  {
  "Company Name": "ZELTIQ Aesthetics, Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "ZELTIQ Aesthetics, Inc. - Common Stock",
  "Symbol": "ZLTQ",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zion Oil & Gas Inc",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "Zion Oil & Gas Inc - Common Stock",
  "Symbol": "ZN",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zynga Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zynga Inc. - Class A Common Stock",
  "Symbol": "ZNGA",
  "Test Issue": "N"
  },
  {
  "Company Name": "ZS Pharma, Inc.",
  "Financial Status": "N",
  "Market Category": "G",
  "Round Lot Size": 100,
  "Security Name": "ZS Pharma, Inc. - Common Stock",
  "Symbol": "ZSPH",
  "Test Issue": "N"
  },
  {
  "Company Name": "zulily, inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "zulily, inc. - Class A Common Stock",
  "Symbol": "ZU",
  "Test Issue": "N"
  },
  {
  "Company Name": "Zumiez Inc.",
  "Financial Status": "N",
  "Market Category": "Q",
  "Round Lot Size": 100,
  "Security Name": "Zumiez Inc. - Common Stock",
  "Symbol": "ZUMZ",
  "Test Issue": "N"
  }
  ];

db.SymbolName
  .remove({})
  .then(() => db.SymbolName.collection.insertMany(companyNameSymbolSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
