function sunLight(){
        document.getElementById("image").src="sun.png";
        document.getElementById("wish").innerHTML="Good Day";
        var cl=document.getElementById("date");
        cl.style.color="black";
        //form manipulation
        var form=document.getElementById("form");
        form.style.backgroundColor="skyblue";
        form.style.color="#000";
        form.fontSize="25px";
    }
    function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("sec");
animateValue(obj, 60, 0, 50000);
