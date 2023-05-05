class SliderProd {
    constructor(elemSelector) {
      this.currentSlide = 0;
      this.sliderSelector = elemSelector;
      this.elem = null;
      this.slider = null;
      this.sliders = null;
      this.prev = null;
      this.next = null;
      this.index = null;
      this.number = null;
      this.counter = null;
      this.lenghtChangeValue = null;
      this.numberActual = null;
      this.quantityOfProd = null;
      this.moduloNum = null;
      this.generateSlider();
      this.slidesMoveResponsive();
    }

    //Finds selectors and adds prev&next arrows

    generateSlider() {
      this.slider = document.querySelector(this.sliderSelector);
      this.slider.classList.add("slider");
      const landing = document.querySelector(".box.landing");
      const sliderCoffeeProps = document.getElementById("shop_infopage77");

      this.slides = document.querySelectorAll(
        `${this.sliderSelector} .product`
      );
      const slidesLanding = document.querySelectorAll(
        `${this.sliderSelector}.landing`
      );
      this.lenghtChangeValue = this.slides.length;

      this.createPrevNext();

      let length = this.slides.length;
      if (windowWidth > 1200) {
        if (landing) {
          this.next.style.display = "block";
          if (length <= 2) {
            this.next.style.display = "none";
          }
          if (slidesLanding[i]) {
            if (length < 2) {
              slidesLanding[i].style.display = "flex";
            }
          }
        } else if (sliderCoffeeProps) {
          this.next.style.display = "block";
          if (length <= 2) {
            this.next.style.display = "none";
          }
        } else if (length <= 4) {
          this.next.style.display = "none";
        }
      } else if (windowWidth <= 1199 && windowWidth >= 980) {
        if (sliderCoffeeProps) {
          this.next.style.display = "block";
          if (length <= 2) {
            this.next.style.display = "none";
          }
        } else if (length <= 3) {
          this.next.style.display = "none";
        }
      } else if (windowWidth <= 979 && windowWidth >= 768) {
        if (length <= 2) {
          this.next.style.display = "none";
        }
      }
    }

    // Reponsive versions

    slidesMoveResponsive() {
      const windowWidth = window.innerWidth;
      const wiosnaMpm = document.getElementById("shop_infopage78");
      const landing = document.querySelector(".box.landing");
      const sliderCoffeeProps = document.getElementById("shop_infopage77");

      // Reponsive versions

      if (windowWidth > 1200) {
        if (wiosnaMpm) {
          this.quantityOfProd = 6;
          this.moduloNum = 3;
        } else if (landing) {
          this.quantityOfProd = 4;
          this.moduloNum = 2;
        } else if (sliderCoffeeProps) {
          this.quantityOfProd = 4;
          this.moduloNum = 2;
        } else {
          this.quantityOfProd = 8;
          this.moduloNum = 4;
        }
      } else if (windowWidth <= 1199 && windowWidth >= 980) {
        if (sliderCoffeeProps) {
          this.quantityOfProd = 4;
          this.moduloNum = 2;
        } else {
          this.quantityOfProd = 6;
          this.moduloNum = 3;
        }
      } else if (windowWidth <= 979 && windowWidth >= 768) {
        this.quantityOfProd = 4;
        this.moduloNum = 2;
      }
    }

    // Next move
    changeSlideNext() {
      this.prev.style.display = "block";

      const slides = document.querySelectorAll(
        `${this.sliderSelector} .product`
      );

      const wiosnaMpm = document.getElementById("shop_infopage78");
      const sliderCoffeeProps = document.getElementById("shop_infopage77");
      const windowWidth = window.innerWidth;
      let length = this.slides.length;

      if (windowWidth > 1200) {
        if (wiosnaMpm) {
          this.lenghtChangeValue -= 3;
          // console.log("wiosnaMpm");
        } else if (sliderCoffeeProps) {
          this.lenghtChangeValue -= 2;
        } else {
          this.lenghtChangeValue -= 4;
        }
      } else if (windowWidth <= 1199 && windowWidth >= 980) {
        this.lenghtChangeValue -= 3;
      } else if (windowWidth <= 979 && windowWidth >= 768) {
        this.lenghtChangeValue -= 2;
      }
      this.counter =
        this.lenghtChangeValue < 0
          ? this.lenghtChangeValue * -1
          : this.lenghtChangeValue;

      this.slidesMoveResponsive();

      const slidesArray = [...this.slides];
      let slide = "";

      for (slide of slidesArray) {
        let prodWidth = slide.clientWidth;
        if (sliderCoffeeProps) {
          this.number -= prodWidth * 1.25;
        } else {
          this.number -= prodWidth;
        }
        for (let i = 0; i < length; i++) {
          if (length > this.quantityOfProd) {
            if (length % this.moduloNum) {
              this.counter = this.moduloNum + this.lenghtChangeValue;
              if (this.counter >= this.quantityOfProd) {
                slides[i].style.transform = `translateX(${
                  (this.number / length) * this.moduloNum
                }px)`;
                this.numberActual = (this.number / length) * this.moduloNum;
              } else if (this.counter < this.quantityOfProd) {
                slides[i].style.transform = `translateX(${
                  sliderCoffeeProps
                    ? this.numberActual -
                      prodWidth * 1.25 * (length % this.moduloNum)
                    : this.numberActual - prodWidth * (length % this.moduloNum)
                }px)`;
                this.next.style.display = "none";
              }
            } else {
              slides[i].style.transform = `translateX(${
                (this.number / length) * this.moduloNum
              }px)`;
              if (this.counter - this.moduloNum === 0) {
                this.next.style.display = "none";
              }
            }
          } else if (length === this.quantityOfProd) {
            slides[i].style.transform = `translateX(${
              (this.number / length) * this.moduloNum
            }px)`;
            this.next.style.display = "none";
          } else {
            slides[i].style.transform = `translateX(${
              (this.number / length) * (length % this.moduloNum)
            }px)`;
            this.next.style.display = "none";
          }
        }
      }
    }

    // Prev move
    changeSlidePrev() {
      this.next.style.display = "block";
      const slides = document.querySelectorAll(
        `${this.sliderSelector} .product`
      );
      const slidesArray = [...this.slides];
      let slide = "";
      const windowWidth = window.innerWidth;
      // console.log(windowWidth);
      const wiosnaMpm = document.getElementById("shop_infopage78");
      const sliderCoffeeProps = document.getElementById("shop_infopage77");
      let length = this.slides.length;
      if (windowWidth > 1200) {
        if (wiosnaMpm) {
          this.lenghtChangeValue += 3;
        } else if (sliderCoffeeProps) {
          this.lenghtChangeValue += 2;
        } else {
          this.lenghtChangeValue += 4;
        }
      } else if (windowWidth <= 1199 && windowWidth >= 980) {
        this.lenghtChangeValue += 3;
      } else if (windowWidth <= 979 && windowWidth >= 768) {
        this.lenghtChangeValue += 2;
      }

      this.counter =
        this.lenghtChangeValue < 0
          ? this.lenghtChangeValue * -1
          : this.lenghtChangeValue;

      // Reponsive versions

      this.slidesMoveResponsive();

      for (slide of slidesArray) {
        let prodWidth = slide.clientWidth;
        if (sliderCoffeeProps) {
          this.number += prodWidth * 1.25;
        } else {
          this.number += prodWidth;
        }
        for (let i = 0; i < length; i++) {
          if (length > this.quantityOfProd) {
            if (length % this.moduloNum) {
              this.counter = this.moduloNum + this.lenghtChangeValue;
              if (this.counter >= this.quantityOfProd) {
                slides[i].style.transform = `translateX(${
                  (this.number / length) * this.moduloNum
                }px)`;
              }
            } else {
              slides[i].style.transform = `translateX(${
                (this.number / length) * this.moduloNum
              }px)`;
            }
          } else if (length === this.quantityOfProd) {
            slides[i].style.transform = `translateX(${
              (this.number / length) * this.moduloNum
            }px)`;
          } else {
            slides[i].style.transform = `translateX(${
              (this.number / length) * (length % this.moduloNum)
            }px)`;
          }
        }
        if ((this.number / length) * this.moduloNum === 0)
          this.prev.style.display = "none";
      }
    }

    // Adds arrows to the nav and triggers prev&next move
    createPrevNext() {
      this.prev = document.createElement("button");
      this.prev.type = "button";
      this.prev.classList.add("slider-button");
      this.prev.classList.add("slider-button-prev");
      this.prev.addEventListener("click", this.slidePrev.bind(this));

      this.next = document.createElement("button");
      this.next.type = "button";
      this.next.classList.add("slider-button");
      this.next.classList.add("slider-button-next");
      this.next.addEventListener("click", this.slideNext.bind(this));

      const nav = document.createElement("div");
      nav.classList.add("slider-nav");
      this.slider.appendChild(nav);

      nav.appendChild(this.prev);
      nav.appendChild(this.next);
    }

    slidePrev() {
      this.changeSlidePrev();
    }

    slideNext() {
      this.changeSlideNext();
    }
  }

  let prod_4 = document.getElementById("prod_4");
  let prod_4_2 = document.getElementById("prod_4_2");
  let prod_4_3 = document.getElementById("prod_4_3");
  let prod_4_4 = document.getElementById("prod_4_4");
  let prod_4_5 = document.getElementById("prod_4_5");
  let prod_4_6 = document.getElementById("prod_4_6");
  let prod_4_7 = document.getElementById("prod_4_7");
  let prod_4_8 = document.getElementById("prod_4_8");
  let prod_4_9 = document.getElementById("prod_4_9");
  let prod_4_10 = document.getElementById("prod_4_10");

  rod_4 ? (prod_4 = true) : (prod_4 = false);
  prod_4_2 ? (prod_4_2 = true) : (prod_4_2 = false);
  prod_4_3 ? (prod_4_3 = true) : (prod_4_3 = false);
  prod_4_4 ? (prod_4_4 = true) : (prod_4_4 = false);
  prod_4_5 ? (prod_4_5 = true) : (prod_4_5 = false);
  prod_4_6 ? (prod_4_6 = true) : (prod_4_6 = false);
  prod_4_7 ? (prod_4_7 = true) : (prod_4_7 = false);
  prod_4_8 ? (prod_4_8 = true) : (prod_4_8 = false);
  prod_4_9 ? (prod_4_9 = true) : (prod_4_9 = false);
  prod_4_10 ? (prod_4_10 = true) : (prod_4_10 = false);

  setTimeout(() => {
    if (prod_4) {
      const sliderProdCreate = new SliderProd("#prod_4");
    }
    if (prod_4_2) {
      const sliderProdCreate2 = new SliderProd("#prod_4_2");
    }
    if (prod_4_3) {
      const sliderProdCreate3 = new SliderProd("#prod_4_3");
    }
    if (prod_4_4) {
      const sliderProdCreate4 = new SliderProd("#prod_4_4");
    }
    if (prod_4_5) {
      const sliderProdCreate5 = new SliderProd("#prod_4_5");
    }
    if (prod_4_6) {
      const sliderProdCreate6 = new SliderProd("#prod_4_6");
    }
    if (prod_4_7) {
      const sliderProdCreate7 = new SliderProd("#prod_4_7");
    }
    if (prod_4_8) {
      const sliderProdCreate8 = new SliderProd("#prod_4_8");
    }
    if (prod_4_9) {
      const sliderProdCreate9 = new SliderProd("#prod_4_9");
    }
    if (prod_4_10) {
      const sliderProdCreate10 = new SliderProd("#prod_4_10");
    }
  }, 5000);