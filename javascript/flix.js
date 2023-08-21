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
      img.src = val._embedded.show.image.medium;
      centerdiv.appendChild(img);
      console.log(val._embedded.show.image.medium);
      
    });
  });

