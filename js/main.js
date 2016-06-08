var yearval=2005;
var bip;
var dat=[
  {
    "Name": "Kabhi Aisa Lagta Hai",
    "Link": "Sj51hczJ5Gc",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Yaaron",
    "Link": "LCfvYo3ILG0",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Piya basanti Re",
    "Link": "XFT2niDEy28",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Aur Ahista",
    "Link": "ty55I66-Mrk",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Maine Payal Hai Chhankai",
    "Link": "0tjVtYtZ384",
    "Year": 1999,
    "Tags": "Music"
  },
  {
    "Name": "Dooba Dooba Rehta Hoon",
    "Link": "Y5OQAIjjrag",
    "Year": 1998,
    "Tags": "Music"
  },
  {
    "Name": "Action Shoes Ad",
    "Link": "ax5Fl7huJZw",
    "Year": 1999,
    "Tags": "Advertisement"
  },
  {
    "Name": "Kaisi Hai Ye Rut Ki Jisme",
    "Link": "3dEbiCjbXfI",
    "Year": 2001,
    "Tags": "Music"
  },
  {
    "Name": "Amul Ad",
    "Link": "tl7Lnb2ocC4",
    "Year": 1997,
    "Tags": "Advertisement"
  },
  {
    "Name": "Maaye Ri",
    "Link": "PffJxdLZ9cI",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Made in India",
    "Link": "IvloHsmi_vg",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Jab Koi Baat Bigad Jaaye",
    "Link": "BAqgHmIwp00",
    "Year": 1995,
    "Tags": "Music"
  },
  {
    "Name": "Bulla ki jaana",
    "Link": "lLghKpy60LY",
    "Year": 2004,
    "Tags": "Music"
  },
  {
    "Name": "Shaktimaan Title Track",
    "Link": "xiM1-zUDOnc",
    "Year": 1997,
    "Tags": "Serial"
  },
  {
    "Name": "Hip Hip Hurray Title Track",
    "Link": "BMEjYK7ye_4",
    "Year": 1998,
    "Tags": "Serial"
  },
  {
    "Name": "Just Mohabbat Title Track",
    "Link": "lHubJBEs6CY",
    "Year": 1996,
    "Tags": "Serial"
  },
  {
    "Name": "Aakhon Mein",
    "Link": "roJL3mIueTE",
    "Year": 2006,
    "Tags": "Music"
  },
  {
    "Name": "Tanha Dil",
    "Link": "__qkzfWhi6g",
    "Year": 2000,
    "Tags": "Music"
  },
  {
    "Name": "Shaka Laka Boom Boom Title",
    "Link": "78RbfVlXc7g",
    "Year": 2001,
    "Tags": "Serial"
  },
  {
    "Name": "Kasauti Zindagi Kay Title",
    "Link": "ooz-JaLzQjg",
    "Year": 2001,
    "Tags": "Serial"
  },
  {
    "Name": "Kahin To Hoga Title",
    "Link": "SVfu4KioI_4",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Remix Title Track",
    "Link": "FHgREt1EQfQ",
    "Year": 2004,
    "Tags": "Serial"
  },
  {
    "Name": "Star Parivaar Song",
    "Link": "HHYhLyng-W0",
    "Year": 2003,
    "Tags": "Serial"
  },
  {
    "Name": "Hum Paanch",
    "Link": "7YFfKjjwI9M",
    "Year": 1995,
    "Tags": "Serial"
  },
  {
    "Name": "Amul Ad 2",
    "Link": "RW9DSUbZX34",
    "Year": 1996,
    "Tags": "Advertisement"
  },
  {
    "Name": "Hum Naye Geet Sunae",
    "Link": "dVGmxkZPBps",
    "Year": 2005,
    "Tags": "Music"
  },
  {
    "Name": "Chandu ke Chacha",
    "Link": "b9Ni-Bh488Y",
    "Year": 2004,
    "Tags": "Music"
  }
];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(dat);
    $(function() {
        $(".dial").knob({

        	change: function (value) {
        yearval=Math.round(value).toString();
    }
    ,'min':1990,
    'max':2005
});
    });
    function yalgaar(){
    	var cook="";
    	for(var i=0;i<dat.length;i++){
    		if((dat[i].Tags=="Music" && $('#mu').is(':checked')==false)||(dat[i].Tags=="Advertisement" && $('#ad').is(':checked')==false)||(dat[i].Tags=="Serial" && $('#tv').is(':checked')==false)){
    			continue;
    		}
    		if((dat[i].Year.toString()==yearval.toString() || dat[i].Year=="any")){
    			cook=cook+'<a href="#" onclick="forshana(this);" damn='+dat[i].Link+'><li>'+dat[i].Name+'</li></a>';
    			//onclick="forshana('+dat[i].Link+');"
    		}
    	}
    	$('nav ul').html(cook);
    }

function forshana(abra){
	bip=abra;
	var videoid=abra.getAttribute("damn");
var dork="https://www.youtube.com/embed/"+videoid+"?autoplay=1&showinfo=0&controls=1";

$('#ytplayer').attr('src', dork);
}
