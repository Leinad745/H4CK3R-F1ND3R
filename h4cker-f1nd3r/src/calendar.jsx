import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

const datos =[
  {
    "organizers": [
      {
        "id": 114509,
        "name": "MadrHacks"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2419/",
    "ctf_id": 994,
    "weight": 0.00,
    "duration": {
      "hours": 0,
      "days": 3
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/events/LogoCroppable_2.png",
    "id": 2419,
    "title": "snakeCTF 2024 Finals",
    "start": "2024-12-05T08:00:00+00:00",
    "participants": 17,
    "location": "Lignano Sabbiadoro, Udine, Italy",
    "finish": "2024-12-08T08:00:00+00:00",
    "description": "The top 8 teams from the Schengen area will be invited to partecipate in the Finals in Lignano Sabbiadoro, Udine, Italy.\r\n\r\nThe event will be a jeopardy-style CTF featuring challenges from many categories, including pwn, web, reversing, crypto, forensics and network.",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "Prizes will be available (TBD)",
    "format_id": 1,
    "onsite": true,
    "restrictions": "Open",
    "url": "https://2024.snakectf.org/",
    "public_votable": true
  },
  {
    "organizers": [
      {
        "id": 8241,
        "name": "ISITDTU"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2510/",
    "ctf_id": 258,
    "weight": 0.00,
    "duration": {
      "hours": 9,
      "days": 1
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/events/index_3.gif",
    "id": 2510,
    "title": "ISITDTU CTF 2024 Finals",
    "start": "2024-12-07T02:00:00+00:00",
    "participants": 10,
    "location": "Danang, Vietnam",
    "finish": "2024-12-08T11:00:00+00:00",
    "description": "Danang is a combination of the buzz of a big city with beautiful beaches and great restaurants. Tree-lined boulevards, bridges, and beachside resorts are now attracting more and more attention of travelers near and far. Coming to Danang, you will have the opportunity to visit the famous picturesque spots such as Ba Na Mountain, Marble Mountains, Hai Van Pass, Son Tra Peninsula. And, it is definitely delighted to swim in the waters at the beautiful white-sand beaches that stretch for tens of kilometers.\r\nWelcome top teams pass the equals to join our final CTF at Duy Tan University, Da Nang, Vietnam..",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "Final Round Prizes: 12 prizes (1 First Prize, 1 Second Prize, 2 Third Prizes, 8 Consolation Prizes)\r\n\r\nFirst Prize: 40.000.000 VND\r\nSecond Prize: 20.000.000 VND\r\nThird Prize: 10.000.000 VND\r\nConsolation Prize: 3.000.000 VND",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Open",
    "url": "https://ctf.isitdtu.com/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 36281,
        "name": "BinaryBears"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2595/",
    "ctf_id": 164,
    "weight": 0.00,
    "duration": {
      "hours": 9,
      "days": 0
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/events/IMG_2613_1.PNG",
    "id": 2595,
    "title": "M*CTF 2024 Finals",
    "start": "2024-12-07T07:30:00+00:00",
    "participants": 1,
    "location": "Russia, Moscow",
    "finish": "2024-12-07T16:30:00+00:00",
    "description": "Final tournament M*CTF 2024 among the 10 strongest universities of the city of Moscow, who have passed qualifying event.\r\n\r\nQuals: https://ctftime.org/event/2534",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "Prizes and presents from sponsors",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Open",
    "url": "https://mctf.ru/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 213673,
        "name": "o1d_bu7_go1d"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2538/",
    "ctf_id": 1179,
    "weight": 0.00,
    "duration": {
      "hours": 9,
      "days": 0
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/events/5202034882946130981.jpg",
    "id": 2538,
    "title": "RedShift.Eclipse 2 Finals",
    "start": "2024-12-07T10:00:00+00:00",
    "participants": 9,
    "location": "Moscow, Russia",
    "finish": "2024-12-07T19:00:00+00:00",
    "description": "The in-person final of the RedShift.Eclipse 2 competition—a Defense-only CTF — will take place on December 7, 2024, in Moscow, at the premises of the Programming and Cybersecurity College of RTU MIREA.\r\n\r\nEvent's Telegram channel: https://t.me/redshift_ctf\r\nEvent's Telegram chat: https://t.me/redshift_ctf_chat",
    "format": "Attack-Defense",
    "is_votable_now": false,
    "prizes": "",
    "format_id": 2,
    "onsite": true,
    "restrictions": "Open",
    "url": "",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 112550,
        "name": "Platypwnies"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2407/",
    "ctf_id": 979,
    "weight": 24.75,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/events/Platypwnie.png",
    "id": 2407,
    "title": "Platypwn 2024",
    "start": "2024-12-07T14:00:00+00:00",
    "participants": 242,
    "location": "",
    "finish": "2024-12-08T14:00:00+00:00",
    "description": "The Platypwn 2024 is an online Jeopardy CTF which offers easy challenges for beginners, but also medium and difficult challenges for advanced players.\r\n\r\nSee https://platypwnies.de/events/platypwn for further details.\r\n\r\nNOTE: Due to the overwhelming amount of teams and resulting infrastructure issues, the CTF has been extended by 4 hours, so it now ends at 2024-12-08T18:00Z.",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "tbd",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "https://platypwn.ctf.platypwnies.de/",
    "public_votable": true
  },
  {
    "organizers": [
      {
        "id": 309500,
        "name": "The DFIR Report"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2488/",
    "ctf_id": 1149,
    "weight": 0,
    "duration": {
      "hours": 4,
      "days": 0
    },
    "live_feed": "",
    "logo": "",
    "id": 2488,
    "title": "DFIR Labs CTF by The DFIR Report",
    "start": "2024-12-07T16:00:00+00:00",
    "participants": 0,
    "location": "",
    "finish": "2024-12-07T20:00:00+00:00",
    "description": "DFIR Labs CTF Details:\r\nDuration: Each CTF lasts 4 hours.\r\nSIEM Options: Choose between Splunk and Elastic for your SIEM tool.\r\nCommunication: Join our DFIR Labs CTF Discord Server for support and real-time updates.\r\nCases: You will receive access to two detailed intrusion cases.\r\nQuestions: Complete 20 questions within the 4-hour timeframe.\r\nAccess: You’ll receive access to both cases 1 hour before the start of the CTF. All you need is a web browser.\r\nSupport: Live support on Discord and via email.",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "Top 3 players will receive free swag, as well as names in the CTF winners book.",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Individual",
    "url": "https://thedfirreport.com/services/dfir-labs/ctf/",
    "public_votable": false
  },
  {
    "organizers": [
      {
        "id": 53791,
        "name": "polygl0ts"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2502/",
    "ctf_id": 818,
    "weight": 35.94,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/events/7fb065c04dbec7e33dfbb1f4456196c7.png",
    "id": 2502,
    "title": "LakeCTF Quals 24-25",
    "start": "2024-12-07T18:00:00+00:00",
    "participants": 98,
    "location": "",
    "finish": "2024-12-08T18:00:00+00:00",
    "description": "Qualifications for third edition of LakeCTF",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "Academic bracket\r\nTop 10 academic: invited to LakeCTF finals\r\n\r\nProfessional bracket\r\nTop 6 professional: 8x tickets each for the Insomni'hack 2025 conference\r\nTop 3 professional: accommodation paid for 3 nights during the Insomni'hack 2025 conference",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "https://lakectf.epfl.ch/",
    "public_votable": true
  },
  {
    "organizers": [
      {
        "id": 138431,
        "name": "Wanna.One"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2515/",
    "ctf_id": 1000,
    "weight": 19.80,
    "duration": {
      "hours": 0,
      "days": 1
    },
    "live_feed": "https://ctftime.org/live/2515/",
    "logo": "https://ctftime.org//media/events/WGC2024_2.png",
    "id": 2515,
    "title": "WannaGame Championship 2024",
    "start": "2024-12-13T01:00:00+00:00",
    "participants": 109,
    "location": "",
    "finish": "2024-12-14T01:00:00+00:00",
    "description": "WannaGame Championship is a CTF hosted by VNUHCM - University of Information Technology.\r\nThis is a Jeopardy-style CTF competition, created by UIT students and researchers from InSecLab. You will have 24 hours to take on challenging tasks that push your skills to the limit, with various challenges from many categories including Binary Exploitation, Reverse Engineering, Web Exploitation, Cryptography, Web3 and Forensics. We hope that this competition will be a great place for enhancing cybersecurity skills and making new friends from around the globe!\r\n\r\nRegistration will be opened on Sunday, 24/11/2024!\r\nJoin our Discord for more information: https://discord.gg/wcr2vTHBHM\r\n\r\n",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "Prize for Vietnamese students:\r\n- 1st: 2.500.000 VND\r\n- 2nd: 1.500.000 VND\r\n- 3rd: 1.000.000 VND\r\n\r\nPrize for\u200c UIT students:\r\n- 1st: 2.000.000 VND\r\n\r\nRegistration link for Vietnamese students:  https://forms.gle/wkqEXT7vkJk7VyCF8",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "https://cnsc.com.vn/ctf/",
    "public_votable": true
  },
  {
    "organizers": [
      {
        "id": 62713,
        "name": "Cryptonite"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2461/",
    "ctf_id": 663,
    "weight": 29.33,
    "duration": {
      "hours": 0,
      "days": 2
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/events/nitectf_2024_logo.jpg",
    "id": 2461,
    "title": "niteCTF 2024",
    "start": "2024-12-13T12:00:00+00:00",
    "participants": 167,
    "location": "",
    "finish": "2024-12-15T12:00:00+00:00",
    "description": "niteCTF is a jeopardy style CTF for students interested in cybersecurity. It is designed to help students explore newer domains in cybersecurity as well as help existing professionals practice their skills. We will feature challenges which cover various domains of cybersecurity including cryptography, hardware security, forensics, web exploitation, pwn and more!\r\n\r\n~ hosted by Cryptonite\r\n\r\nJoin the official discord for updates: https://discord.gg/nf7zt3yUAB",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "1st&nbsp;&nbsp;- $ 500\r\n2nd&nbsp;- $ 300\r\n3rd&nbsp;&nbsp;- $ 200\r\n\r\nTitle Sponsor: <a href=\"https://trustlab.iitb.ac.in/\" target=\"_blank\">IIT Bombay Trust Lab</a>\r\n\r\nInfra sponsored by https://goo.gle/ctfsponsorship",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Open",
    "url": "https://play.nitectf2024.live/",
    "public_votable": true
  },
  {
    "organizers": [
      {
        "id": 136056,
        "name": "Hack The Box"
      }
    ],
    "ctftime_url": "https://ctftime.org/event/2539/",
    "ctf_id": 554,
    "weight": 0,
    "duration": {
      "hours": 8,
      "days": 2
    },
    "live_feed": "",
    "logo": "https://ctftime.org//media/events/htbctf-logo_1.png",
    "id": 2539,
    "title": "HTB University CTF 2024: Binary Badlands",
    "start": "2024-12-13T13:00:00+00:00",
    "participants": 89,
    "location": "",
    "finish": "2024-12-15T21:00:00+00:00",
    "description": "Life ain't easy for an outlaw. But we bet our lucky stars we know how to take down those responsible for that!\r\n\r\nHey gunslinger, do you think you have the spurs to reach for the stars? Get the gang together for hours of high-octane hacking challenges to learn new skills, compete with the best universities, and earn $90,000 in prizes. Sign up for free!\r\n\r\nHOW TO REGISTER\r\n\r\n1. Click the \"SIGN UP\" button.\r\n2. You'll be given the option to select your university from a dropdown menu. Search this list carefully and select your institution.\r\n3. Enter your Full Name and Academic Email. If you make a mistake here, you'll need to reach out to our support team to correct it.\r\n4. If the domain name or subdomain you entered for your academic email matches what we have on file for your institution, you'll be sent a verification code in your email inbox. This is the final step in the registration process.\r\n5. After verifying, you'll be given a message confirming your registration and will be ready to compete in the CTF. Good luck! ?",
    "format": "Jeopardy",
    "is_votable_now": false,
    "prizes": "Prize Pool\r\n$90,000",
    "format_id": 1,
    "onsite": false,
    "restrictions": "Academic",
    "url": "https://ctf.hackthebox.com/event/details/university-ctf-2024-binary-badlands-1822",
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
                            href={events.url} //Algunos pueden no cargar por mala conexion
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
                    <div className="list-group-item text-center text-muted">
                        No hay eventos para mostrar.
                    </div>
                )}

            </div>
        </div>
    );
}