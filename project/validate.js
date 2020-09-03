function check() {
 
  // Bringing from form.html

  var fever = document.getElementsByName("Fever");
  var DCough = document.getElementsByName("dcough");
  var tired = document.getElementsByName("Tired");
  var ap = document.getElementsByName("AP");
  var diarr = document.getElementsByName("Diarr");
  var head = document.getElementsByName("Head");

  // Validation from here

  var n = document.form1.name;

  var b = document.getElementById("email").value;

  var c = document.form1.email;

  atpos = b.indexOf("@");
  dotpos = b.lastIndexOf(".");
  var len = c.length;

  // Name validation

  if (n.value.length == 0) {
    alert("Name shouldn't be empty.");
    document.form1.name.focus();
    return false;
  }
  // Email validation
  else if (len == 0) {
    alert("Email shouldn't be empty");
    document.form1.email.focus();
    return false;
  } else if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter correct email ID");
    document.form1.email.focus();
    return false;
  }

  // Radio field validation for checking empty

  else if (
    (fever[0].checked == false && fever[1].checked == false) ||
    (DCough[0].checked == false && DCough[1].checked == false) ||
    (tired[0].checked == false && tired[1].checked == false) ||
    (ap[0].checked == false && ap[1].checked == false) ||
    (diarr[0].checked == false && diarr[1].checked == false) ||
    (head[0].checked == false && head[1].checked == false)
  ) {
    alert("Entry field shouldn't be empty");
  }

  //Input validation.

  else if (
    yes1.checked == true &&
    yes2.checked == true &&
    yes3.checked == true &&
    yes4.checked == true &&
    yes5.checked == true &&
    yes6.checked == true
  ) {
    alert("Go to hospital");
  } else if (
    no1.checked == true &&
    no2.checked == true &&
    no3.checked == true &&
    no4.checked == true &&
    no5.checked == true &&
    no6.checked == true
  ) {
    alert("Stay Home Stay Safe");
  } else if (
    yes1.checked == true &&
    yes2.checked == true &&
    yes3.checked == true &&
    yes4.checked == true &&
    no5.checked == true &&
    no6.checked == true
  ) {
    alert("Go to hospital");
  } else if (
    no1.checked == true &&
    no2.checked == true &&
    no3.checked == true &&
    no4.checked == true &&
    yes5.checked == true &&
    yes6.checked == true
  ) {
    alert("Stay Home Stay Safe");
  } else if (
    (no1.checked == true || yes1.checked == true) &&
    (no2.checked == true || yes2.checked == true) &&
    (no3.checked == true || yes3.checked == true) &&
    (yes4.checked == true || no4.checked == true) &&
    (yes5.checked == true || no5.checked == true) &&
    (yes6.checked == true || no6.checked == true)
  ) {
    alert("Safely Consult your Doctor");
  }else {
    alert("Stay Safe and Consult your Doctor");
    return true;
  }
}
