(() => {
  let smallImage = document.querySelector('#smallPhoto'),
      largeImage = document.querySelector('#largePhoto'),
      memberInfo = document.querySelector('#info'),
      h3         = document.getElementsByTagName('h3')[0],
      titleMember = document.querySelector('.title');


  const teamInfo = ['Sabby is a student', 'Linh Le is a student'];
  function memberLoad() {
    //debugger;
    largeImage.classList.add('switchAnimation');
    smallImage.classList.add('switchAnimationSmall');
    h3.classList.add('switchAnimation');
    memberInfo.classList.add('switchAnimation');
    memberInfo.innerHTML = teamInfo[0];
  }
  function bioInfo() {
    //debugger;
    smallImage.classList.remove('switchAnimationSmall');
    largeImage.classList.remove('switchAnimation');
    h3.classList.remove('switchAnimation');
    memberInfo.classList.remove('switchAnimation');


    smallImage.classList.add('switchAnimationSmall');
    largeImage.classList.add('switchAnimation');
    h3.classList.add('switchAnimation');
    memberInfo.classList.add('switchAnimation');

    if (memberInfo.innerHTML == teamInfo[0]) {
      largeImage.src = 'images/linh_large.png';
      smallImage.src = 'images/sabby_small.jpg';
      memberInfo.innerHTML = teamInfo[1];
      h3.innerHTML = "Linh";
    }
    else {
      largeImage.src = 'images/member2_large.png';
      smallImage.src = 'images/linh_small.png';

      memberInfo.innerHTML = teamInfo[0];
      h3.innerHTML = "Sabby";
    }
  }


  window.addEventListener('load', memberLoad);
  titleMember.addEventListener('click', bioInfo);

})();
