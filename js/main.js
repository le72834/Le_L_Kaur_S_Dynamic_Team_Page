(() => {
  let smallImage = document.querySelector('#smallPhoto'),
      largeImage = document.querySelector('#largePhoto'),
      memberInfo = document.querySelector('#info'),
      h3         = document.getElementsByTagName('h3')[0],
      titleMember = document.querySelector('.title');


  const teamInfo = ['Hey my name is Sabnit kaur. I am student of interactive media design. I would love to be a Designer in future. I like to learn different things like new models and video editing as i never done these things before and I also does not have the designer or developer background. Moreover, I have learnt a lot of things in this course. When I decide to come to Canada, then I took this course because I had lot of interest in animation and 3d but when I came here I got to learnt different things like coding, designing, photography and videography etcetera. Instead of this my hobbies are singing and Dancing. I participated in plenty of competitions and mostly I won. In my free time I do dance, I cook, I go out as I love traveling. ', 'Hello my name is Linh Le. I am very easy to get along with. This is my second semester of Fanshawe Collge like a lot of people. My major is Interactive Media Design because I love technology and how it works.What I like to do in my spare time is to play video games and relax with my friends and family.I have many goals that I would like to achieve, to name a few are finishing college, becoming an successful developer, and becoming a better person. A online format will work well for me because I am currently unable to attend classes on classes on campus due to various reasons. The 3 strategies that I have used for studying are reviewing my notes everyday, make diagrams, and preparing a self test. All of these strategies have been very effective for me.'];
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
      h3.innerHTML = "Linh Le";
    }
    else {
      largeImage.src = 'images/sabby_large.jpg';
      smallImage.src = 'images/linh_small.png';

      memberInfo.innerHTML = teamInfo[0];
      h3.innerHTML = "Sabnit Kaur";
    }
  }


  window.addEventListener('load', memberLoad);
  titleMember.addEventListener('click', bioInfo);

})();
