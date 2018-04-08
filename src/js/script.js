var $body = $("body");
var $this = $(this);
var $galleryModal = $(".gallery-modal");
var $galleryModalItem = $(".gallery-item");

projObj = [
  {
    name: "Project 1",
    label: "Enterprise pencil solution",
    info: "Project 1 Description"
  },
  {
    name: "Project 2",
    label: "A mobile adventure",
    info: "Project 2 Description"
  },
  {
    name: "Project 3",
    label: "Hacking",
    info: "Project 3 Description"
  },
  {
    name: "Project 4",
    label: "Read more about project 4",
    info: "Project 4 Description"
  },
  {
    name: "Project 5",
    info: "Project 5 Description"
  }
];

/*
 * Loop through asset folders with matching names. Commented out to show with placeholder images. 
*/
var i;
var projectImg;
var projectLabel;
// Commented out for demo purposes 
// for (i = 1; i < 5; i++) {
//     projectImg += "<td><img src='img/project-" + i + "/img" + i + ".png'></td>";
// }
for (i = 1; i < 5; i++) {
  projectImg += "<td><img src='http://via.placeholder.com/250x250'></td>";
}
$galleryModalItem.each(function(index) {
  var dataProj = $(this).data("project");
  $(this).find(".gallery-label > h2").text(projObj[index].name);

  $(this).find(".gallery-sublabel").text(projObj[index].label);

//   $(this).on("click", function() {
//     $(".project-name").html(projObj[index].name);
//     $(".project-desc").html(projObj[index].info);
//     $(".project-row").html(projectImg);
//     $galleryModal.show();
//     $body.css("overflow-y", "hidden");
//   });
});

$(".modal-close").on("click", function() {
  $galleryModal.fadeOut();
  $body.css("overflow-y", "auto");
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});