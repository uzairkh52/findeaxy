@import "../variables";

.circlesWrapper {
  z-index: 2;
  width: 80px;
  height: 80px;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
}

// progress-bar-circle
.singleChart {
  width: 80px !important;
  justify-content: space-around !important;
}
.MegadrawRowBox {
  @include border-radius(15px);
  @include box-shadow(0, 0px, 25px, rgba($black, 0.15));
  overflow: hidden;
  .MegadrawRowRightHead {
    margin-bottom: 10px;
    .img {
      @include size(100px);
      border-radius: 200px;
      overflow: hidden;
      background-size: cover;
      background-position: center;
    }
  }
  .MegadrawRowLeft {
    
    border: solid 1px #eee;
    background-size: cover;
    height: 450px;
    margin: 12px 0px 12px 12px;
    background-position: top center;

    border-radius: $base-border-radius;
    position: relative;

    .megadrawProductImg {
      position: absolute;
      width: 102px;
      height: 102px;
      right: 20px;
      top: 20px;
      overflow: hidden;
      border-radius: 200px;
      border: solid 2px #c4c4c4;
      background-size: 80%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .MegadrawRowRight {
    padding: 40px 30px 40px 20px;
    .desc {
      margin-bottom: 10px;
    }
    .desc1 {
      padding: 8px 12px;
      border-radius: 4px;
      margin-bottom: 30px;
      p {
        font-size: 12px;
      }
    }
    .desc2 {
      margin-bottom: 15px;
      border: solid 1px #cacaca;
      padding: 6px;
      border-radius: 4px;
    }
    .Megadrawfooter {
      border: 1.2026px solid #dddddd;
      border-radius: 10;
      padding: 15px;
      background: $black;
      @include border-radius(10px);
      margin-top: 20px;
    }
  }
  .quantity {
    background: #eee;
    border-radius: 100px;
    margin-right: 15px;
    .quantityNumber {
      padding: 5px 18px;
      font-size: 26px;
    }
  }
}

@include for-mobile-large-screen {
  .MegadrawRowBox {
    .MegadrawRowLeft {
      display: none;
      height: 300px;
      margin: 12px;
    }

    .MegadrawRowRight {
      padding: 20px 15px;
      .MegadrawRowRightHead {
        .img {
          width: 70px;
          height: 70px;
          margin-right: 10px !important;
        }
        h2 {
          font-size: 18px;
        }
        h4 {
          font-size: 16px;
        }
        h1 {
          font-size: 20px;
        }
      }
      .Megadrawfooter {
      flex-direction: column;
      margin-top: 0;
      gap: 5px;
      .PriceColum {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
      }
        h2 {
          font-size: 16px;
        }
        .quantity.quantityNumber {
          padding: 5px 12px;
        }
      }
    }
  }
}
