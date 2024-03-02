var cyberfolksNs = ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.'];

D_EXTEND('zhp.pl',

    // dolnoslaska.zhp.pl    
        Ms365_Subdomain('dolnoslaska','zhp.pl'),
        Delegation_A('dolnoslaska', '213.32.10.111'),

	// Bazy
        Delegation_NS('czarna', cyberfolksNs),
        Delegation_A('pobierowo', '213.32.10.111'),
        Delegation_A('rozewie', '213.32.10.111'),


    // Imprezy
        Delegation_NS('bumerang', ['ns.lh.pl.', 'ns2.lighthosting.net.', 'ns2.lh.pl.']),
        Delegation_NS('rajdgranica', ['ns1.cyberfolks.pl.', 'ns2.cyberfolks.pl.', 'ns3.cyberfolks.pl.']),
         
    // Hufce
         // Boleslawiec
	        Delegation_NS('boleslawiec', ['ns1.cba.pl.', 'ns2.cba.pl.', 'ns3.cba.pl.']),
         // Bystrzyca Klodzka
	        Delegation_NS('bystrzycaklodzka', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
         // Dzierżoniów
            Delegation_NS('dzierzoniow', ['ns.lh.pl.', 'ns2.lighthosting.net.', 'ns2.lh.pl.']),
         // Glogów
  	        Delegation_A('glogow', '213.32.10.111'),
            Ms365_Subdomain('glogow', 'zhp.pl'),
         // Jawor
	        Delegation_NS('jawor', ['dns11.linuxpl.com.', 'ns11.linuxpl.com.']),
         // Karkonoski
	        Delegation_NS('karkonoski', ['ns1.ehost.pl.', 'ns2.ehost.pl.']),
         // Klodzko
	        Delegation_NS('klodzko', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
         // Legnica
            Delegation_NS('legnica', cyberfolksNs),  // MS365-14080
         // Lubań
	        Delegation_NS('luban', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
         // Lubin
	        Delegation_NS('lubin', ['ns1.hostdmk.net.', 'ns2.hostdmk.net.']),
	    // Lagiewniki
            Delegation_A('lagiewniki', '109.95.156.188'),
            Ms365_Subdomain('lagiewniki', 'zhp.pl'),
        // Milicz
  	        Delegation_A('milicz', '213.32.10.111'),
	        Ms365_Subdomain('milicz', 'zhp.pl'),
         // Olesnica
	        Delegation_NS('olesnica', ['ns1.datanet.pl.', 'ns2.datanet.pl.']),
         // Olawa
	        Delegation_NS('olawa', ['ns12.linuxpl.com.', 'dns12.linuxpl.com.']),
        // Sroda Slaska
            Delegation_NS('srodaslaska', ['dns8.linuxpl.com.', 'ns8.linuxpl.com.']),
	    // Swidnica
            Delegation_NS('swidnica', ['ns1.ogicom.pl.', 'ns2.ogicom.pl.', 'ns3.ogicom.pl.']),
   	    // Walbrzych
            Delegation_NS('walbrzych', ['ns1.hekko.net.pl.', 'ns2.hekko.net.pl.']),
	    // Wroclaw
            Delegation_NS('wroclaw', ['dns20.ovh.net.', 'ns20.ovh.net.']),
	    // Wroclaw Pólnoc
            Delegation_NS('wroclawpolnoc', ['ns1.atthost.pl.', 'ns2.atthost.pl.']),
	    // Wroclaw Poludnie
            Delegation_NS('wroclawpoludnie', ['ns.lh.pl.', 'ns2.lighthosting.net.', 'ns2.lh.pl.']),
	    // Wroclaw Wschód
            Delegation_NS('wroclawwschod', ['ns1.hostido.net.pl.','ns2.hostido.net.pl.', 'ns3.hostido.net.pl.']),
        // Hufiec Ziemi Trzebnickiej
            Delegation_NS('zmigrod', ['ns.lh.pl.', 'ns2.lighthosting.net.']),
  	        Delegation_A('trzebnica', '213.32.10.111'),
	        Ms365_Subdomain('trzebnica', 'zhp.pl')
);
