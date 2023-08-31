//for search bar header
$('.img').click(function() { 
    $('.input').toggleClass('toggle')
  });
  
  $(document).click(function(e) {
    if (!$(e.target).parent(".search").length) {
      $(".search").find(".input").removeClass("toggle");
    }
  });

//image of series set

  const centerdiv=document.getElementById("centerdiv");

  fetch("netflix.json").then((apidata)=>{
    return apidata.json();
  })
  .then((jsondata)=>{
    jsondata.map((val)=>{
      key = val.id;
      let img = document.createElement("img");
      img.classList.add("img_poster");
      img.src = val._embedded.show.image.original;
      centerdiv.appendChild(img);
      // console.log(val._embedded.show.image.medium);
      });
  });

  const centerdiv1=document.getElementById("centerdiv1");


  fetch("netflix.json").then((apidata)=>{
    return apidata.json();
  })
  .then((jsondata)=>{
    jsondata.map((value)=>{
      key = value.id;
      let img1 = document.createElement("img");
      img1.classList.add("img_poster");
      img1.src = value._embedded.show.image.medium;
      centerdiv1.appendChild(img1);
      console.log(value._embedded.show.image.medium);
      });
  });

