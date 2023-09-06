class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 150;
    let self = this;
    let tabs = document.querySelectorAll('.et-hero-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (event) {
        self.onTabClick(event, tab);
      });
    });
    window.addEventListener('scroll', () => {
      this.onScroll();
    });
    window.addEventListener('resize', () => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop =
      document.querySelector(element.getAttribute('href')).offsetTop -
      this.tabContainerHeight +
      1;
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth',
    });
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    let tabContainer = document.querySelector('.et-hero-tabs');
    let offset =
      tabContainer.offsetTop +
      tabContainer.offsetHeight -
      this.tabContainerHeight;
    if (window.pageYOffset > offset) {
      document
        .querySelector('.et-hero-tabs-container')
        .classList.add('et-hero-tabs-container--top');
    } else {
      document
        .querySelector('.et-hero-tabs-container')
        .classList.remove('et-hero-tabs-container--top');
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    let tabs = document.querySelectorAll('.et-hero-tab');
    tabs.forEach(function (tab) {
      let id = tab.getAttribute('href');
      let offsetTop =
        document.querySelector(id).offsetTop - self.tabContainerHeight;
      let offsetBottom = offsetTop + document.querySelector(id).offsetHeight;
      if (window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = tab;
        // Додати клас 'active' до активного табу
        tab.classList.add('active');
      } else {
        // Видалити клас 'active' з неактивних табів
        tab.classList.remove('active');
      }
    });
    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.offsetWidth + 'px';
      left = this.currentTab.offsetLeft + 'px';
    }
    document.querySelector('.et-hero-tab-slider').style.width = width;
    document.querySelector('.et-hero-tab-slider').style.left = left;
  }
}

new StickyNavigation();
