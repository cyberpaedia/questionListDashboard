const allCourses = {
    "tma1_2020_1": ["MTH232", "MTH212", "STT211"],
    "tma2_2020_1": ["MTH232", "MTH212", "STT211"],
    "tma3_2020_1": ["MTH232", "MTH212", "STT211"],
    "tma1_2020_2": ["CHM191", "ESM222", "ENT308", "ENT304", "ESM343", 
"CHM202", "CHM204", "CHM292", "MTH212", "PHY202",
"PHY204", "BIO216", "PHS210", "ENT306", "ENT303", 
"FMS304", "ENT310", "ENG223", "MAC211", "MAC213", 
"MAC221", "MAC223", "MAC225", "ENG224", "MAC322", 
"MAC316", "MAC314", "MAC312", "EDU711", "EDU712",
"EDU716", "EDU721", "EDU724", "EDU726", "CIT311", 
"CIT341", "CIT353", "CIT383", "ACC201", "ACC206", 
"ACC313", "ACC411", "ARA281", "ARA282", "BFN203", 
"BFN209", "BFN303", "BFN304", "BFN310", "BFN411", 
"BFN421", "BIO201", "BIO203", "BIO205", "BIO204", 
"BIO207", "BIO206", "BIO208", "BIO210", "BIO211", 
"BIO212", "BIO209", "BIO214", "BIO215", "BIO217", 
"BIO218", "BIO220", "BIO306", "BIO307", "BIO316", 
"BIO402", "BIO403", "BIO404", "BIO406", "BIO407", 
"BIO411", "BIO413", "BIO415", "BUS205", "BUS317", 
"BUS401", "BUS403", "BUS322", "BUS424", "BUS428", 
"CHM203", "CHM205", "CHM201", "CHM291", "CHM301", 
"CHM302", "CHM303", "CHM304", "CHM305", "CHM307", 
"CHM309", "CHM306", "CHM311", "CHM312", "CHM314", 
"CHM315", "CHM316", "CHM318", "CHM391", "CHM402",
"CHM405", "CHM413", "CHM414", "CHM415", "CHM424", 
"CHM426", "CIT211", "CIT208", "CIT212", "CIT213", 
"CIT215", "CIT236", "CHM192", "CHM101", "MAC316",
"MAC314", "MAC312", "MAC333", "MAC322", "MAC334", 
"MAC332", "FMS304", "ENT302", "ENT304", "ENT306", 
"ENT308", "ENT310", "BUS322", "EDU723", "CIT104", 
"CIT143", "CIT236", "CIT237", "CIT246", "CIT292", 
"CIT303", "CIT309", "CIT322", "CIT333", "CIT342", 
"CIT351", "CIT371", "CIT381", "CIT463", "CIT392", 
"CIT467", "CLL307", "DAM205", "DAM207", "PHY191", 
"PHY192", "ESM407", "ESM431", "CRD124", "ECO122", 
"ENT102", "MTH106", "MKT108", "PAD122", "BUS106", 
"CIT102", "CSS134", "POL123", "POL126", "POL124", 
"CSS112", "ACC102", "MTH282", "CRD124", "MAC232", 
"MAC214", "MAC212", "CRS101", "CRS111", "CRS131", 
"CRS141", "CRS173", "POL337", "POL301", "POL315", 
"POL311", "POL341", "POL317", "EDA811", "EDA821", 
"EDA825", "EDU821", "EDU823", "BIO201", "STT206", 
"ECO231", "ENT101", "CHM191", "ESM222", "ENT308", 
"ENT304", "ESM343", "CHM202", "CHM204", "CHM292", 
"MTH212", "PHY202", "PHY204", "BIO216", "PHS210", 
"ENT306", "ENT303", "FMS304", "ENT310", "ENG223", 
"MAC211", "MAC213", "MAC221", "MAC223", "MAC225", 
"ENG224", "MAC322", "MAC316", "MAC314", "MAC312", 
"EDU711", "EDU712", "EDU716", "EDU721", "EDU724", 
"EDU726", "CIT311", "CIT341", "CIT353", "CIT383", 
"ACC201", "ACC206", "ACC313", "ACC411", "ARA281", 
"ARA282", "BFN203", "BFN209", "BFN303", "BFN304", 
"BFN310", "BFN411", "BFN421", "BIO201", "BIO203", 
"BIO205", "BIO204", "BIO207", "BIO206", "BIO208", 
"BIO210", "BIO211", "BIO212", "BIO209", "BIO214", 
"BIO215", "BIO217", "BIO218", "BIO220", "BIO306",
"BIO307", "BIO316", "BIO402", "BIO403", "BIO404",
"BIO406", "BIO407", "BIO411", "BIO413", "BIO415", 
"BUS205", "BUS317", "BUS401", "BUS403", "BUS322", 
"BUS424", "BUS428", "CHM203", "CHM205", "CHM201",
"CHM291", "CHM301", "CHM302", "CHM303", "CHM304", 
"CHM305", "CHM307", "CHM309", "CHM306", "CHM311", 
"CHM312", "CHM314", "CHM315", "CHM316", "CHM318", 
"CHM391", "CHM402", "CHM405", "CHM413", "CHM414", 
"CHM415", "CHM424", "CHM426", "CIT211", "CIT208", 
"CIT212", "CIT213", "CIT215", "CIT236", "CHM101", 
"CIT208", "CIT212", "CIT246", "CIT292", "MTH282", 
"STT211", "ESM112", "ESM204", "ESM206", "ESM236", 
"BIO101", "BIO191", "CHM103", "MTH101", "PHY101", 
"STT102", "CHM102", "MTH102", "BIO102", "BIO192", 
"MTH105", "POL111", "CIT342", "MTH232", "PHY208", 
"MTH213", "MTH281", "PHY102", "BIO213", "ESM405", 
"CSS111", "CSS121", "CSS133", "ECO121", "CIT202", 
"ENT202", "PAD204", "PAD202", "ECE221", "ECE223", 
"ECE225", "ECE227", "ECE231", "ENG121", "ACC203", 
"BUS207", "STT205", "ACC204", "ENT204", "MKT206", 
"ESM212", "ESM221", "ESM234", "ESM238", "CIT344", 
"MTH211", "PED221", "CSS136", "CSS132", "PCR276", 
"PCR274", "PCR272", "POL228", "BFN104", "ENG211", 
"ENG215", "ENG221", "ENG241", "ENG251", "ENG281", 
"BUS105", "PCR331", "EDU231", "EDU233", "ECO292", 
"ECO256", "ECO254", "ECO232", "CRD204", "ECO355", 
"PHY201", "PHY207", "PHY261", "PHY203", "PHY205", 
"ECO344", "ECO346", "ECO314", "ECO348", "ECO356", 
"ECO324", "ECO342", "ECO332", "CSS212", "POL343", 
"POL322", "POL318", "POL316", "POL312", "CSS242", 
"CSS244", "CSS246", "INR112", "MAC116", "MAC132", 
"MAC134", "MAC142", "EDU214", "EDU212", "PED236", 
"MAC343", "MAC341", "MAC331", "MAC323", "MAC313", 
"MAC311", "EDU250", "CSS441", "CSS411", "CSS443", 
"PCR375", "EDU332", "EDU314", "PED234", "PED322", 
"PED271", "ECE413", "CRS131", "CRS141", "CRS173", 
"ESM102", "ESM104", "PCR112", "POL121", "NSC111", 
"CIT461", "CIT432", "CIT412", "CIT484", "MTH382", 
"PCR373", "CSS343", "CSS331", "CSS342", "CSS356", 
"CSS354", "ENG434", "ENG414", "ENG454", "ENG426", 
"ENG415", "ENG432", "ECE121", "ENG162", "ENG114", 
"EDU112", "EDU114", "LIN112", "ENG151", "ENG122", 
"CIT411", "CIT465", "ACC101", "CSS491", "CSS452", 
"CSS442", "JIL211", "PCR362", "CSS455", "CIT425", 
"PAD251", "PAD341", "ACC419", "EDU423", "EDU323", 
"BED112", "ESM392", "ESM311", "ESM317", "ESM231", 
"PHS322", "PHS312", "PHS308", "PUL337", "POL214", 
"PAD405", "BIO308", "EMT300", "ESM326", "ESM342", 
"ESM346", "SLM305", "EMT301", "EMT311", "ESM341", 
"MTH241", "MAC411", "MAC413", "MAC421", "MAC425", 
"MAC427", "MAC441", "PCR114", "CIT474", "DAM461", 
"PHS801", "PHS803", "PHS805", "PHS807", "PHS809", 
"PHS811", "BUS330", "PAD308", "ECO431", "PAD326", 
"PAD302", "PAD312", "FMS304", "PAD306", "PCR415", 
"POL411", "POL431", "POL441", "BIO304", "PHS813", 
"PHS815", "PHS817", "PHS819", "BUS330", "BIO310", 
"BIO314", "ENT305", "MKT309", "MKT301", "CRD305", 
"PCR261", "PCR271", "CSS211", "ENG226", "ENG222", 
"ENG212", "POL212", "MAC242", "MAC246", "PED420", 
"PED421", "PED431", "PED433", "ECE410", "ECE421", 
"EDU290", "PCR211", "PCR261", "PCR271", "POL221", 
"ENG411", "ENG415", "ENG421", "ENG423", "ENG426", 
"ENG491", "ENG355", "ENG372", "EDU111", "PED121", 
"ECE113", "ENT208", "PHY291", "MAC113", "MAC117", 
"MAC121", "ECO341", "ECO343", "ECO347", "ECO329", 
"ECO311", "BUS325", "PCR419", "PCR417", "PCR421", 
"PCR422", "PCR424", "EDU258", "CIT726", "ENT415", 
"ENT401", "ENT411", "ENT413", "EDU726", "PCR111", 
"CIT415", "MKT730", "ESM106", "MTH103", "PAD784", 
"PAD756", "PAD742", "PAD724", "PAD712", "PAD710", 
"BUS714", "BUS727", "CIT705", "PAD771", "PUL743", 
"CSS381", "CSS361", "CSS351", "CSS341", "CIT701", 
"CIT753", "CSS745", "CSS747", "CSS753", "CSS755", 
"CSS757", "JLS813", "JLS814", "JLS815", "JLS823", 
"JLS825", "JLS845", "INR251", "PCR271", "POL215", 
"POL221", "POL223", "POL231", "CSS243", "CSS245", 
"ENG113", "MAC111", "MAC115", "PAD305", "ACC311", 
"TSM141", "TSM142", "ACC210", "ECO255", "CSS241", 
"ISL271", "ISL245", "ISL241", "ISL231", "ISL213", 
"ENG251", "CSS211", "ARA283", "ARA281", "PHY103", 
"PCR813", "PCR815", "PCR819", "PCR872", "PCR851", 
"EDA832", "EDA833", "EDA834"
    ],
    // "tma2_2020_2": ["MTH232", "MTH212", "STT211"],
    // "tma3_2020_2": ["MTH232", "MTH212", "STT211"],
};