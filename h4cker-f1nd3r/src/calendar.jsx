import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

const datos =[
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/82/",
    "ctf_id": 5,
    "weight": 0.00,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "",
    "logo": "",
    "id": 82,
    "title": "UCSB iCTF 2005",
    "start": "2005-12-01T00:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2005-12-02T00:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ictf.cs.ucsb.edu/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/81/",
    "ctf_id": 5,
    "weight": 0.00,
    "duration": {
      "hours": 0,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 81,
    "title": "UCSB iCTF 2006",
    "start": "2006-12-01T00:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2006-12-01T00:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ictf.cs.ucsb.edu/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/80/",
    "ctf_id": 5,
    "weight": 0.00,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "",
    "logo": "",
    "id": 80,
    "title": "UCSB iCTF 2007",
    "start": "2007-12-01T00:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2007-12-02T00:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ictf.cs.ucsb.edu/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 552,
        "name": "HackerDom"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/379/",
    "ctf_id": 7,
    "weight": 0.00,
    "duration": {
      "hours": 8,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 379,
    "title": "RuCTF Finals 2008",
    "start": "2008-04-27T06:00:00+00:00",
    "participants": 0,
    "location": "Yekaterinburg, Russia",
    "finish": "2008-04-27T14:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Open",
    "url": "https://ructf.org/2008/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/79/",
    "ctf_id": 5,
    "weight": 0.00,
    "duration": {
      "hours": 0,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 79,
    "title": "UCSB iCTF 2008",
    "start": "2008-12-01T00:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2008-12-01T00:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ictf.cs.ucsb.edu/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 552,
        "name": "HackerDom"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/378/",
    "ctf_id": 7,
    "weight": 0.00,
    "duration": {
      "hours": 9,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 378,
    "title": "RuCTF Finals 2009",
    "start": "2009-04-26T04:00:00+00:00",
    "participants": 0,
    "location": "Yekaterinburg, Russia",
    "finish": "2009-04-26T13:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Open",
    "url": "https://ructf.org/2009/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/78/",
    "ctf_id": 5,
    "weight": 0.00,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "",
    "logo": "",
    "id": 78,
    "title": "UCSB iCTF 2009",
    "start": "2009-12-01T00:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2009-12-02T00:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ictf.cs.ucsb.edu/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 552,
        "name": "HackerDom"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/377/",
    "ctf_id": 7,
    "weight": 0.00,
    "duration": {
      "hours": 10,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 377,
    "title": "RuCTF Finals 2010",
    "start": "2010-04-26T04:00:00+00:00",
    "participants": 0,
    "location": "Yekaterinburg, Russia",
    "finish": "2010-04-26T14:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Open",
    "url": "https://ructf.org/2010",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/77/",
    "ctf_id": 5,
    "weight": 0.00,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "",
    "logo": "",
    "id": 77,
    "title": "UCSB iCTF 2010",
    "start": "2010-12-01T00:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2010-12-02T00:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ictf.cs.ucsb.edu/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 552,
        "name": "HackerDom"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/124/",
    "ctf_id": 6,
    "weight": 0.00,
    "duration": {
      "hours": 12,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 124,
    "title": "RuCTF 2010",
    "start": "2010-12-18T16:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2010-12-19T04:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ructf.org/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/20/",
    "ctf_id": 4,
    "weight": 70.00,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "",
    "logo": "",
    "id": 20,
    "title": "Codegate CTF Finals 2011",
    "start": "2011-04-01T17:32:43+00:00",
    "participants": 0,
    "location": "Seoul, Republic of Korea",
    "finish": "2011-04-02T17:32:53+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": true,
    "restrictions": "Open",
    "url": "http://www.codegate.org/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/5/",
    "ctf_id": 15,
    "weight": 20.00,
    "duration": {
      "hours": 0,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 5,
    "title": "Nuit du Hack CTF Quals 2011",
    "start": "2011-04-03T21:13:20+00:00",
    "participants": 0,
    "location": "",
    "finish": "2011-04-03T21:13:22+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://nuitduhack.com/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 3477,
        "name": "andgein"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/376/",
    "ctf_id": 7,
    "weight": 0.00,
    "duration": {
      "hours": 9,
      "days": 4
    },
    "live_feed": "",
    "logo": "",
    "id": 376,
    "title": "RuCTF Finals 2011",
    "start": "2011-04-14T04:00:00+00:00",
    "participants": 0,
    "location": "Yekaterinburg, Russia",
    "finish": "2011-04-18T13:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Open",
    "url": "https://ructf.org/2011",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 284,
        "name": "Plaid Parliament of Pwning"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/12/",
    "ctf_id": 10,
    "weight": 90.00,
    "duration": {
      "hours": 0,
      "days": 2
    },
    "live_feed": "",
    "logo": "",
    "id": 12,
    "title": "PlaidCTF 2011",
    "start": "2011-04-22T00:00:00+00:00",
    "participants": 145,
    "location": "",
    "finish": "2011-04-24T00:00:00+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://plaidctf.com/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/24/",
    "ctf_id": 13,
    "weight": 40.00,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/eventos/phd1_1.png",
    "id": 24,
    "title": "PHD CTF Finals 2011",
    "start": "2011-05-19T15:00:00+00:00",
    "participants": 0,
    "location": "Moscow, Russia",
    "finish": "2011-05-20T15:00:00+00:00",
    "description": "",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Open",
    "url": "http://phdays.com/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/28/",
    "ctf_id": 21,
    "weight": 50.00,
    "duration": {
      "hours": 8,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 28,
    "title": "dCTF 2011",
    "start": "2011-05-28T04:30:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2011-05-28T12:30:00+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://www.cs.vu.nl/~sullivan/dCTF/dCTF.php",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/1/",
    "ctf_id": 1,
    "weight": 100.00,
    "duration": {
      "hours": 6,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 1,
    "title": "DEF CON CTF Qualifier 2011",
    "start": "2011-06-03T19:00:00+00:00",
    "participants": 267,
    "location": "",
    "finish": "2011-06-04T01:00:00+00:00",
    "description": "The qualification round will yet again be in the style of game board, but answers need not be in the form of a question.\r\nCategories will require teams to demonstrate the superiority of hacking across a vast realm of security knowledge and practice, and their ability to form coherent questions.\r\n\r\nQuit \"playing\" with your shake-weight on leatherchapsroulette.com long enough to visit ddtek.biz to register. Only those that pre-register for quals are permitted entry. Each individual should register, first team member to register will receive a team code to share with other mates before they register. \r\n\r\nRegistration site: <a href=\"https://www.ddtek.biz/reg/dc19_reg.jsp\">https://www.ddtek.biz/reg/dc19_reg.jsp</a>\r\nRegistration opens: 01 Apr 2011 00:00:00 UTC\r\nRegistration ends: 03 Jun 2011 00:00:00 UTC\r\n\r\nQualifications open: 03 Jun 2011 19:00:00 UTC\r\nQualifications ends: 06 Jun 2011 01:00:00 UTC\r\n\r\nIn hysteretical fashion ACME Pharm will be automatically be permitted contest entry. NEW THIS YEAR! We are also pre-qualifying teams from two other worldwide CTFs! We have scientifically chosen the iCTF and Codegate contests as potentially worthy qualifiers for 2011. The winners of said competitions have reserved seats at this years show. As always, pre-qualified teams that don't participate in quals should be ashamed by their weakness and apply to be a CEH or SANS instructor / cyber security poser. Depending on how these teams fare, future winners of these contests may or may not be invited again, so you bitches better represent!\r\n\r\nIt wouldn't be fair to reduce the number of spots available to the public at large, so we're upping the number of tables in Vegas to 12 total. Yes, when the dust clears the _12_ best will be invited to join us this summer in sin city for the annual DEFCON deathmatch.\r\n\r\nAlso, DDTEK is tired of this bullshit[2] and has decided to fix it by jumping on the certification band wagon! Be sure to swing by the CTF room to attempt to obtain the GIAC-OFFENSIVE certification in person. It is _certainly_ the only cert anyone wants to be affiliated with. HR panties and manties are definitely gonna get wet over this one.\r\n\r\nMore infoz will follow via your registered email address.\r\n\r\nVulc@n\r\nDifensiva Senior Engineer, GIAC-OFFENSIVE\r\nDiuntinus Defense Technologies, plc., Co., Gmbh., Inc.\r\n",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "Top 12 go to DEF CON CTF Finals",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ddtek.biz/dc19.html",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/36/",
    "ctf_id": 20,
    "weight": 40.00,
    "duration": {
      "hours": 0,
      "days": 2
    },
    "live_feed": "",
    "logo": "",
    "id": 36,
    "title": "SibCTF Quals 2011",
    "start": "2011-06-30T20:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2011-07-02T20:00:00+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://blackbox.sibears.ru/",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/23/",
    "ctf_id": 2,
    "weight": 80.00,
    "duration": {
      "hours": 8,
      "days": 3
    },
    "live_feed": "",
    "logo": "",
    "id": 23,
    "title": "DEF CON CTF 2011",
    "start": "2011-08-04T06:00:00+00:00",
    "participants": 0,
    "location": "Las Vegas, NV, USA",
    "finish": "2011-08-07T14:00:00+00:00",
    "description": "Binjitsu III by ddtek",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Prequalified",
    "url": "http://ddtek.biz/dc19.html",
    "public_votable": false
  },
  {
    "organizers": [],
    "ctftime_url": "https://ctftime.org/events/37/",
    "ctf_id": 33,
    "weight": 20.00,
    "duration": {
      "hours": 8,
      "days": 1
    },
    "live_feed": "",
    "logo": "",
    "id": 37,
    "title": "SibCTF Finals 2011",
    "start": "2011-09-11T06:00:00+00:00",
    "participants": 0,
    "location": "Tomsk, Russia",
    "finish": "2011-09-12T14:00:00+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": true,
    "restrictions": "Open",
    "url": "http://blackbox.sibears.ru/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 551,
        "name": "FluxFingers"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/13/",
    "ctf_id": 8,
    "weight": 80.00,
    "duration": {
      "hours": 0,
      "days": 2
    },
    "live_feed": "",
    "logo": "",
    "id": 13,
    "title": "Hack.lu CTF 2011",
    "start": "2011-09-19T09:00:00+00:00",
    "participants": 101,
    "location": "",
    "finish": "2011-09-21T09:00:00+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "https://flu.xxx/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 2488,
        "name": "CSAW CTF Organizers"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/4/",
    "ctf_id": 18,
    "weight": 45.00,
    "duration": {
      "hours": 0,
      "days": 2
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/eventos/csaw.png",
    "id": 4,
    "title": "CSAW CTF Qualification Round 2011",
    "start": "2011-09-23T20:00:00+00:00",
    "participants": 194,
    "location": "",
    "finish": "2011-09-25T20:00:00+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "https://ctf.csaw.io/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 324,
        "name": "0ldEur0pe"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/3/",
    "ctf_id": 17,
    "weight": 70.00,
    "duration": {
      "hours": 11,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 3,
    "title": "rwthCTF 2011",
    "start": "2011-09-30T17:00:00+00:00",
    "participants": 69,
    "location": null,
    "finish": "2011-10-01T04:00:00+00:00",
    "description": "The research group IT-Security of the RWTH Aachen University and the associated 0ldEur0pe CTF team are proud to announce that they are organizing the first rwthCTF to happen in fall 2011.\r\n\r\nThe CTF starts on Friday, September 30th at 5pm (CEST) and ends on Saturday, October 1st 4am (Worldclock Event). Attendance is primarily for university teams, but we can make exceptions for verified other organisations or institutions. You will have to cope with your own server image as well as a series of challenges.\r\n\r\nFurther information will follow in time.\r\n\r\nFeel free to discuss in our Google group or to follow us on Twitter. ",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": false,
    "restrictions": "Open",
    "url": "http://ctf.itsec.rwth-aachen.de/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 1438,
        "name": "ENOFLAG"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/29/",
    "ctf_id": 24,
    "weight": 25.00,
    "duration": {
      "hours": 8,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 29,
    "title": "ENOWARS 2011",
    "start": "2011-10-07T06:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2011-10-07T14:00:00+00:00",
    "description": "",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "https://enowars.com/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 3263,
        "name": "SISS"
      }
    ],
    "ctftime_url": "https://ctftime.org/events/58/",
    "ctf_id": 28,
    "weight": 0.00,
    "duration": {
      "hours": 10,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 58,
    "title": "Power of XX 2011",
    "start": "2011-11-03T01:00:00+00:00",
    "participants": 0,
    "location": "On-site, Seoul, Korea",
    "finish": "2011-11-03T11:00:00+00:00",
    "description": "The 1st Power of XX\r\n\r\n- Date\r\n(Qualifying Round) Oct. 29, 2011, 10:00 ~ 22:00\r\n(Final Round) Nov. 3, 2011, 10:00 ~ 20:00\r\n\r\n- Winners\r\nThe First | SecurityFirst (Korea, Soonchunhyang University)\r\nThe Second | Aegis (Korea, Dankook University)\r\nThe Third | JinSeul (Korea, None)",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "The 1st Prize: A gift voucher worth 300,000 Won\r\nThe 2nd Prize: A gift voucher worth 150,000 Won\r\nThe 3rd Prize: A gift voucher worth 50,000 Won",
    "format_id": 1,
    "onsite": true,
    "restrictions": "Open",
    "url": "http://www.powerofxx.com/",
    "public_votable": false
  }
];


export default function Calendar() {

    // Estado de eventos almacenados
    const [eventos] = useState(datos);

    
    const convFecha = (fecha) => {
        const options = { dateStyle: 'medium', timeStyle: 'short' };
        return new Date(fecha).toLocaleString('es-CL', options);
    };

    return (
        <div className="container mt-4">
            <div className="">
                <h1 style={{textAlign: "center",color: "white"}}>Calendario de CTFs</h1>
            </div>

            <div id="eventos-list" className="list-group mt-4">

                {eventos.length > 0 ? (
                    eventos.map(events => (
                        <a 
                            href={events.url} // enlace al evento
                            target="_blank"
                            rel="noopener noreferrer"
                            className="list-group-item list-group-item-action"
                            style={{backgroundColor: "black"}}
                        >
                            <div style={{color: "white"}}>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{events.title}</h5>
                                <small>Formato: {events.format}</small>
                            </div>
                            <p className="mb-1">
                                <strong>Inicio:</strong> {convFecha(events.start)} <br />
                                <strong>Fin:</strong> {convFecha(events.finish)}
                            </p>
                            <small>Organizador(es): {events.organizers.map(org => org.name).join(', ')}</small>
                            </div>
                        </a>
                    ))
                ) : (
                    // Mensaje por si el array 'datos' estuviera vacío
                    <div className="list-group-item text-center text-muted">
                        No hay eventos para mostrar.
                    </div>
                )}

            </div>
        </div>
    );
}