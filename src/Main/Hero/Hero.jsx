import React from "react";
import img1 from "./images/ZapIcon-64.gif";

export const Hero = () => {
  return (
    <>
      <section className="container w-full mx-auto  max-w-7xl px-5 flex gap-4 flex-col pt-9 p-6 md:p-12 pb-0 md:pb-0 shadow-sm bg-[#f1f5f9] mt-10 rounded-md  items-start md:items-end md:flex-row  justify-between min-h-64">
        <div className="flex flex-col gap-4 pb-12 w-full">
          <h2 class="text-4xl md:text-5xl text-start xl:text-7xl font-bold text-foreground">
            <span class="block sm:inline-block">42 kunda</span>
            <span class="underline sm:mx-2">
              <span class="">frontend</span>
            </span>
            <br />
            dasturlashni o'rganing
          </h2>
          <p class="max-w-lg text-lg">
            ⚡️ 42 kun o'z ustingizda ishlang va kelajagingiz sari yo'l toping!
          </p>
          <div class="flex flex-col md:flex-row items-start gap-2">
            <a
              class="inline-flex items-center justify-center text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0F172A] text-white hover:bg-[#0f172ae6] h-11 rounded-md px-8  md:text-xl font-semibold md:py-8"
              href="/courses"
            >
              <img
                alt="ZapIcon"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                class="mr-2"
                style={{ color: "transparent" }}
               
                src={img1}
              />
              Ishtirok etish
            </a>
          </div>
        </div>
        <svg
          width="620"
          height="200"
          viewBox="0 0 913 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_569_3725)">
            <path
              d="M730.153 235.819C730.053 230.719 734.053 228.219 738.553 230.619C740.653 231.719 742.453 231.719 744.553 230.819C747.453 229.519 750.253 229.819 752.053 232.519C753.953 235.419 752.553 238.219 750.353 240.419C748.953 241.819 747.453 243.019 745.853 244.219C742.953 246.419 739.753 246.919 736.353 245.219C732.753 243.319 730.253 239.519 730.153 235.819Z"
              fill="black"
            />
            <path
              d="M755.053 109.619C752.453 107.919 742.653 105.619 742.653 108.919C745.453 106.119 755.353 111.919 755.053 109.619Z"
              fill="black"
            />
            <path
              d="M762.553 113.119C766.153 112.119 781.753 123.019 776.053 117.619C773.253 115.219 764.653 110.919 762.553 113.119Z"
              fill="black"
            />
            <path
              d="M814.353 138.219C812.453 135.519 806.053 129.919 803.753 131.919C807.253 131.619 813.953 140.219 814.353 138.219Z"
              fill="black"
            />
            <path
              d="M802.953 133.719C801.853 135.219 808.053 136.319 809.053 138.319C815.553 143.519 806.253 133.419 802.953 133.719Z"
              fill="black"
            />
            <path
              d="M825.053 156.719C826.053 158.119 830.353 166.419 828.453 160.719C827.853 159.819 825.853 154.919 825.053 156.719Z"
              fill="black"
            />
            <path
              d="M822.453 158.219C823.053 158.919 826.853 166.919 826.253 163.419C825.553 162.219 823.653 156.619 822.453 158.219Z"
              fill="black"
            />
            <path
              d="M782.953 123.619C786.153 123.519 793.153 131.219 793.953 129.419C791.753 127.219 784.553 121.519 782.953 123.619Z"
              fill="black"
            />
            <path
              d="M753.553 113.619C756.453 111.419 738.553 109.119 740.253 112.119C744.753 110.619 749.253 112.119 753.553 113.619Z"
              fill="black"
            />
            <path
              d="M795.853 100.619C796.953 101.119 798.053 101.419 799.253 101.419C805.053 101.719 808.053 102.919 811.353 106.519C811.553 107.119 812.653 107.419 812.253 106.519C805.953 91.419 785.353 95.619 795.853 100.619ZM804.953 101.119C801.653 99.419 796.153 101.219 794.753 97.919C797.953 94.019 812.753 104.819 804.953 101.119Z"
              fill="black"
            />
            <path
              d="M784.853 120.819C788.753 120.519 795.353 129.419 796.153 127.819C794.253 124.819 786.953 118.819 784.853 120.819Z"
              fill="black"
            />
            <path
              d="M818.653 146.319C816.953 146.219 819.853 148.519 820.053 149.219C824.753 156.819 821.153 147.519 818.653 146.319Z"
              fill="black"
            />
            <path
              d="M816.553 147.819C814.753 148.219 819.053 151.719 819.253 153.219C822.253 156.019 817.653 148.419 816.553 147.819Z"
              fill="black"
            />
            <path
              d="M772.253 118.519C769.253 117.319 762.053 113.619 760.253 115.619C763.853 115.419 782.853 125.019 772.253 118.519Z"
              fill="black"
            />
            <path
              d="M303.353 156.219C304.053 158.719 318.953 155.719 317.753 152.619C316.153 149.119 303.453 152.219 303.353 156.219Z"
              fill="black"
            />
            <path
              d="M188.753 246.819C182.553 246.919 177.853 242.819 177.753 237.719C177.653 232.619 181.553 230.219 185.953 232.719C187.953 233.919 189.753 234.319 192.053 233.519C194.353 232.619 196.753 232.919 198.253 235.219C199.653 237.419 199.253 239.719 197.953 241.819C195.653 245.219 192.153 246.519 188.753 246.819Z"
              fill="black"
            />
            <path
              d="M549.253 125.719C507.853 159.519 479.653 209.819 472.053 262.719C481.853 245.919 482.553 226.019 491.953 208.619C504.753 175.019 530.753 148.319 553.753 124.119C552.053 122.119 550.453 124.819 549.253 125.719Z"
              fill="black"
            />
            <path
              d="M425.753 264.319C365.653 263.219 305.453 262.719 245.353 260.619C235.453 260.219 233.853 262.019 232.353 271.519C230.253 275.319 224.953 338.719 219.353 323.819C215.253 312.019 201.353 306.319 198.453 295.019C198.053 287.719 197.253 280.119 192.153 274.319C188.853 270.619 190.153 269.519 193.753 268.219C279.753 231.619 221.453 69.2192 127.353 125.419C72.653 157.619 60.4531 237.319 84.6531 292.519C99.6531 310.119 93.2531 339.919 78.4531 356.919C61.1531 380.619 41.653 403.419 28.353 429.519C16.553 462.719 28.653 500.719 65.753 509.419C79.453 506.719 38.8531 496.019 35.1531 481.819C14.2531 446.619 47.2531 414.619 66.1531 387.119C75.8531 374.019 84.453 360.119 95.253 347.819C102.453 339.719 102.553 339.519 111.553 346.019C138.853 367.119 164.953 395.919 170.653 430.819C170.453 440.519 148.053 433.319 140.753 435.319C123.553 435.019 106.453 434.619 89.253 434.419C87.453 434.419 84.253 433.419 84.253 436.019C84.253 439.219 87.5531 437.619 89.3531 437.719C123.953 434.119 72.7531 453.519 84.9531 506.319C88.2531 515.919 100.853 511.819 100.853 503.019C99.4531 496.119 85.4531 495.519 90.6531 485.619C94.6531 490.819 100.453 494.919 103.453 500.719C104.653 503.719 106.553 503.219 108.953 501.619C114.553 498.219 120.953 490.419 127.153 490.419C121.953 501.019 110.353 501.019 125.153 509.819C137.353 513.019 136.453 510.319 133.953 499.719C133.653 479.319 142.153 432.219 170.253 439.919C170.653 442.219 167.453 443.519 166.353 445.319C154.153 458.719 138.753 491.219 157.353 503.419C169.753 504.119 163.453 493.719 182.853 489.219C190.853 487.119 193.653 471.019 202.253 475.019C204.953 477.219 209.553 477.919 207.953 483.519C202.653 506.119 204.053 514.519 211.553 486.019C219.553 479.319 231.653 481.119 241.253 477.519C267.853 467.319 252.953 490.419 258.053 504.319C264.153 498.519 256.753 477.419 266.653 475.719C273.253 477.819 296.253 471.719 295.853 480.319C291.253 494.819 305.353 502.019 307.253 484.419C311.853 437.519 329.153 389.619 324.653 342.719C310.053 324.019 313.553 359.919 308.453 362.919C261.053 332.419 334.053 276.919 352.553 332.819C354.353 339.519 358.353 333.519 355.753 329.319C332.453 270.819 257.653 329.119 303.753 367.219C304.853 368.619 306.253 369.519 307.753 370.319C309.153 371.519 310.853 372.419 312.653 372.819C312.353 375.019 312.153 377.219 311.853 379.419C311.653 379.419 311.053 384.919 310.953 387.419C310.353 392.619 309.753 397.819 309.153 403.019C308.853 405.219 308.653 407.419 308.353 409.519C308.053 409.619 307.753 409.819 307.453 409.919C279.553 409.919 251.553 408.819 223.653 408.519C217.453 408.419 216.153 406.919 217.353 400.919C225.553 358.019 232.653 315.019 239.453 271.919C240.153 267.319 241.853 265.419 246.853 265.519C306.153 267.019 365.453 268.419 424.753 269.819C432.053 270.019 432.753 270.919 431.453 278.319C426.853 298.519 411.853 411.319 407.753 411.319C391.453 411.319 368.653 410.719 352.253 410.619C350.353 410.619 347.753 409.819 347.553 412.819C347.353 417.219 391.753 415.619 403.853 416.319C410.953 416.319 412.453 415.019 413.653 407.819C421.053 364.119 428.353 320.419 435.753 276.719C437.453 267.119 435.353 264.419 425.753 264.319ZM91.9531 499.219C100.553 503.319 90.7531 511.819 90.6531 501.219C90.6531 500.119 90.6531 498.419 91.9531 499.219ZM126.453 504.119C118.853 503.619 127.953 493.319 127.753 501.519C127.653 502.619 128.253 504.319 126.453 504.119ZM127.453 481.819C124.153 486.119 111.953 496.219 106.453 495.219C100.953 489.719 88.053 480.919 92.253 472.319C90.453 469.819 118.953 449.319 119.353 452.519C121.853 462.519 135.653 470.919 127.453 481.819ZM140.053 443.219C117.653 443.219 137.953 454.219 132.953 464.619C133.853 466.019 133.153 468.819 131.353 467.019C116.053 439.919 119.953 446.419 96.0531 461.519C87.0531 464.819 104.353 444.819 106.653 443.019C110.353 438.519 115.653 437.319 121.353 438.219C126.853 438.219 159.553 436.719 140.053 443.219ZM205.453 358.119C208.653 360.419 216.453 360.319 216.453 364.919C215.553 368.419 216.853 374.019 213.853 374.819C210.953 375.619 210.853 369.819 208.853 367.319C207.853 364.219 204.453 361.919 205.453 358.119ZM204.753 372.019C206.553 375.419 207.853 379.019 209.753 382.419C213.853 386.719 212.053 402.619 208.353 390.719C201.653 374.519 194.453 357.219 181.053 345.419C179.153 343.919 178.953 342.919 180.553 341.019C191.553 336.919 199.653 364.419 204.753 372.019ZM185.353 357.519C184.753 360.319 182.153 358.619 180.053 359.419C179.953 354.819 184.753 352.619 185.353 357.519ZM133.953 213.719C133.753 187.619 149.353 182.219 167.553 169.519C174.953 161.419 182.053 169.219 186.753 166.119C187.253 159.719 174.453 162.519 182.053 154.419C186.853 150.719 187.753 138.019 194.653 139.919C204.753 144.119 213.853 149.919 220.953 158.419C224.853 162.319 223.353 166.419 217.653 165.219C197.653 166.219 186.753 187.319 190.253 205.419C190.853 207.019 191.453 208.619 192.153 210.219C192.753 211.619 193.353 213.119 194.053 214.519C194.653 215.719 195.253 216.819 195.553 218.119C196.253 220.819 195.453 223.019 193.653 224.719C194.453 225.219 195.553 225.219 196.553 224.319C199.753 222.519 201.853 220.419 199.353 216.319C194.953 209.219 191.853 194.019 197.853 188.119C204.253 179.619 223.853 190.119 222.853 185.719C218.553 180.919 210.053 180.319 203.953 181.519C202.853 182.119 201.753 182.719 200.253 182.319C241.953 138.219 234.653 232.519 211.553 248.819C184.853 283.419 126.753 255.519 133.953 213.719ZM138.853 340.419C138.853 339.219 140.253 339.219 141.153 339.319C142.853 339.519 142.253 341.919 142.353 343.219C142.353 344.919 139.053 346.519 138.753 344.219C138.753 343.119 138.953 341.519 138.853 340.419ZM145.953 334.119C144.453 337.219 139.653 335.319 136.653 335.819C135.253 336.719 136.453 339.619 136.253 341.219C132.353 354.219 145.453 343.319 141.553 356.119C138.153 358.219 128.953 357.619 129.153 351.619C130.553 346.019 125.453 332.619 131.753 330.719C136.853 331.319 148.153 325.119 145.953 334.119ZM127.453 327.519C123.653 332.119 127.153 340.719 126.353 346.719C113.253 353.619 118.753 334.219 114.253 331.319C112.653 330.719 107.753 332.019 109.253 329.019C114.553 323.519 121.853 320.319 126.853 314.519C130.153 312.919 128.953 319.519 131.353 320.219C135.653 320.919 140.053 317.719 144.353 319.219C158.653 327.319 132.953 325.919 127.453 327.519ZM158.953 389.719C151.453 384.419 161.953 372.219 155.353 369.319C139.953 368.019 153.753 363.219 160.353 362.919C168.353 360.019 165.453 351.219 173.553 347.719C184.853 344.919 165.553 366.519 184.053 364.119C189.953 362.919 190.553 362.919 192.253 367.819C193.753 368.619 194.453 371.319 191.953 370.819C169.453 364.019 167.853 369.619 161.053 389.519C160.753 390.419 159.553 390.619 158.953 389.719ZM163.753 394.519C167.153 387.619 168.753 377.619 173.453 372.419C181.853 375.219 195.753 370.219 199.253 380.719C200.153 388.119 194.753 407.519 184.953 404.219C178.753 402.419 161.353 404.119 163.753 394.519ZM169.953 408.419C172.453 406.519 185.753 410.019 190.053 410.619C195.953 407.019 200.153 397.919 202.253 390.219C204.653 393.219 205.853 396.619 207.653 400.019C207.253 403.919 201.753 407.219 201.453 411.319C205.153 414.719 212.853 417.519 210.153 423.619C205.553 426.819 199.553 421.319 195.053 419.519C190.453 422.219 189.653 430.919 182.853 432.719C180.853 433.219 175.553 437.819 175.153 434.119C175.353 427.919 180.953 423.119 183.553 417.419C180.653 415.819 177.253 414.619 174.553 412.619C172.253 412.119 168.953 411.419 169.953 408.419ZM228.553 474.919C226.053 479.919 206.553 450.819 201.053 456.619C199.753 459.919 215.253 468.219 217.653 473.419C218.653 474.619 220.453 475.919 219.053 477.719C214.853 481.919 210.453 475.019 206.953 472.819C189.053 458.919 186.453 496.719 162.153 485.419C134.053 477.219 192.753 403.019 240.453 436.819C246.653 438.919 244.353 445.119 238.253 442.319C227.753 440.919 213.553 433.119 204.153 439.019C203.853 440.819 205.453 441.119 206.753 441.519C218.453 444.519 229.453 449.819 237.353 459.219C242.953 463.419 239.653 467.919 234.553 462.919C225.253 458.119 214.153 445.719 203.453 449.119C209.253 456.119 220.853 459.719 226.153 468.619C227.553 470.319 231.453 472.519 228.553 474.919ZM287.053 459.219C293.553 460.019 294.753 467.719 300.653 468.819C295.453 470.519 290.553 467.119 287.053 459.219ZM220.353 413.619C230.353 414.719 307.953 415.019 307.953 415.019C305.653 426.419 309.753 431.019 298.553 428.219C289.853 426.719 268.453 422.619 263.653 430.519C264.153 432.619 266.353 432.019 267.953 431.819C277.453 431.719 307.253 428.719 306.353 442.119C303.953 449.319 305.453 459.019 301.853 465.219C296.553 462.119 290.553 449.219 282.453 454.319C278.753 458.619 284.453 462.919 286.653 466.319C289.753 471.719 279.453 469.319 277.753 466.819C269.553 459.619 262.853 451.519 263.353 439.619C264.253 435.919 259.753 435.819 259.753 439.319C254.053 450.819 277.353 469.719 268.253 469.419C258.053 467.319 257.453 476.519 255.653 472.219C250.653 463.919 234.853 481.119 231.953 467.419C236.653 467.219 240.153 473.219 244.353 469.019C253.053 460.919 216.953 440.719 232.653 445.019C245.053 450.319 256.253 442.519 242.753 432.619C231.753 422.719 211.653 429.219 215.253 415.519C214.953 412.019 218.553 413.619 220.353 413.619Z"
              fill="black"
            />
            <path
              d="M188.653 392.219C194.053 380.919 185.753 382.619 176.953 380.619C174.853 384.819 173.353 389.319 172.053 393.819C178.153 394.819 188.253 402.219 188.653 392.219ZM182.953 391.519C181.553 391.119 178.353 392.419 178.553 389.119C178.653 387.619 177.753 385.219 180.853 384.519C181.653 386.219 185.153 385.219 184.953 388.019C184.953 389.019 185.553 392.219 182.953 391.519Z"
              fill="black"
            />
            <path
              d="M165.753 182.819C179.153 176.319 188.153 190.719 187.253 182.219C182.653 175.819 171.253 175.019 164.753 178.819C162.353 180.419 161.853 184.519 165.753 182.819Z"
              fill="black"
            />
            <path
              d="M476.753 201.919C491.853 168.619 514.253 139.719 542.353 116.319C543.553 115.219 546.153 114.119 544.353 112.019C512.853 129.719 489.653 166.519 473.253 199.519C467.953 208.719 472.353 213.619 476.753 201.919Z"
              fill="black"
            />
            <path
              d="M811.653 427.819C814.653 433.619 823.553 418.719 826.353 415.919C826.853 406.819 810.853 426.119 811.653 427.819Z"
              fill="black"
            />
            <path
              d="M888.453 443.719C885.053 382.819 831.553 340.619 785.253 308.319C773.353 297.719 754.253 347.119 748.653 337.219C730.053 275.819 732.753 308.219 770.553 284.719C771.353 283.819 772.753 282.719 771.553 281.319C770.253 280.019 769.153 281.219 768.153 282.019C758.553 289.219 747.253 290.019 735.853 290.219C732.253 290.319 731.753 288.719 734.353 286.019C740.553 278.819 729.253 271.019 721.653 275.519C711.653 278.519 712.153 292.119 722.453 293.919C725.953 296.019 731.153 292.919 733.553 296.519C734.653 303.519 712.853 321.619 706.853 325.619C704.853 320.019 708.153 312.019 707.153 305.619C704.153 292.219 697.553 335.319 702.153 335.319C705.953 337.819 709.553 327.519 711.053 334.719C719.753 350.219 705.753 362.319 702.553 377.319C700.653 381.919 696.553 404.719 694.753 391.419C691.153 382.119 695.553 364.019 682.553 362.419C642.853 362.919 603.253 363.119 563.553 363.519C557.153 363.619 556.353 364.719 557.353 371.119C562.753 405.719 574.453 480.019 575.253 482.519C575.253 482.519 575.253 482.519 575.353 482.519C575.353 482.719 575.453 482.919 575.453 483.119C575.653 483.619 575.753 484.119 575.953 484.619C576.053 484.819 576.053 485.019 576.053 485.219C576.353 486.019 576.753 486.819 577.153 487.519C581.053 493.719 589.653 493.519 596.053 494.419C615.553 497.219 686.053 501.219 705.753 500.619C748.053 499.319 733.553 499.519 773.453 497.519C777.253 497.319 777.953 493.619 774.153 493.819C737.253 495.719 741.253 496.519 704.453 494.919C686.053 494.119 626.953 492.919 608.653 490.519C603.653 489.819 598.653 489.219 593.753 488.519C590.153 488.019 584.953 488.019 582.353 485.219C576.453 478.819 561.953 368.119 561.953 368.119L683.753 367.519C683.753 367.519 691.953 407.119 702.353 471.119C703.753 480.119 704.553 480.919 713.853 481.219C732.653 481.719 751.453 482.319 770.353 482.619C779.453 481.219 773.953 493.219 780.353 494.519C781.753 494.219 781.953 492.919 781.953 491.719C783.553 475.719 772.653 477.519 760.553 477.419C749.053 476.719 742.753 459.619 732.553 474.219C731.753 475.719 729.453 476.619 727.553 476.819C726.653 477.219 725.653 477.319 724.653 477.019C723.253 476.619 722.253 474.719 723.153 473.419C726.053 469.219 729.653 465.519 733.253 462.019C734.753 460.619 736.253 459.219 737.453 457.619C737.953 456.919 738.453 456.319 738.653 455.619C737.753 455.319 736.753 456.219 735.853 456.719C726.353 461.019 722.853 472.419 714.253 476.819C711.953 477.519 710.253 476.819 709.753 475.619C709.753 475.519 709.653 475.519 709.553 475.419C708.253 472.719 709.753 470.219 711.453 468.219C715.153 463.819 720.053 460.519 724.253 456.619C725.253 455.619 726.253 454.619 727.253 453.619C727.353 453.519 727.853 452.919 727.853 452.919C727.953 452.719 728.153 452.619 728.253 452.419C728.553 452.019 728.753 451.519 729.053 451.119C729.053 451.019 729.153 451.019 729.153 451.019C729.153 451.019 729.153 450.919 729.153 450.819C729.253 450.619 729.253 450.419 729.353 450.219C729.353 450.219 729.353 450.219 729.353 450.119C729.353 450.119 729.353 450.119 729.353 450.019C729.353 449.819 729.353 449.719 729.253 449.619C729.253 449.619 729.353 449.719 729.353 449.919C729.353 449.819 729.253 449.619 729.253 449.519C729.253 449.419 729.153 449.319 729.153 449.319C729.053 449.219 729.053 449.219 728.953 449.119C728.753 449.119 728.653 449.219 728.353 449.219C722.353 449.919 707.953 474.719 707.253 464.319C707.153 464.219 707.053 464.019 706.953 463.819C703.553 457.919 710.253 452.719 714.153 449.319C717.353 446.519 721.253 443.419 721.353 439.119C720.653 438.819 720.053 438.719 719.353 438.719C718.853 439.019 718.353 439.319 717.953 439.619C717.953 439.619 717.853 439.719 717.753 439.719C717.653 439.819 717.453 439.919 717.353 440.019C717.053 440.219 716.753 440.519 716.453 440.819C715.853 441.319 715.253 441.919 714.753 442.419C712.453 444.619 710.053 447.119 707.053 448.419C705.753 448.919 704.453 448.719 703.653 447.519C702.153 445.019 702.253 442.119 703.653 439.619C704.053 439.019 704.453 438.419 704.853 437.919C707.353 432.819 715.353 429.519 722.753 428.519C723.353 428.319 724.053 428.219 724.753 428.219C724.953 428.219 725.053 428.219 725.253 428.219C728.353 428.019 731.253 428.219 733.453 428.819C756.853 434.719 774.253 457.119 787.053 475.619C789.853 483.019 787.053 503.419 794.753 505.519C801.553 498.219 790.553 464.119 783.453 454.819C781.353 448.819 785.453 447.719 791.753 446.219C801.053 441.419 845.253 440.519 843.353 430.319C842.453 426.219 837.953 427.319 834.753 428.219C816.253 435.019 794.353 437.019 777.653 447.019C774.253 457.519 756.853 428.219 743.953 426.519C726.453 409.719 731.553 377.119 728.753 354.119C745.553 327.319 742.053 359.219 754.053 344.919C761.753 334.919 769.253 324.619 776.553 314.419C780.453 308.919 780.453 308.619 785.853 312.619C807.453 328.519 828.353 345.419 846.353 365.419C883.553 402.619 905.653 475.019 844.653 502.819C842.853 504.219 843.253 505.419 845.553 505.619C874.753 501.619 889.453 471.119 888.453 443.719ZM730.353 408.319C729.753 412.519 737.553 422.719 730.953 423.219C721.353 422.619 712.853 425.219 705.353 431.219C703.153 433.019 701.553 432.419 701.253 429.619C694.853 405.619 703.653 380.819 713.953 358.419C714.653 357.019 714.953 353.719 717.853 355.319C720.553 356.819 725.553 354.819 725.353 361.219C724.853 377.119 727.753 392.719 730.353 408.319ZM735.553 339.019C730.853 340.219 721.253 355.919 718.853 348.719C715.453 337.019 709.553 326.219 720.553 319.319C729.853 309.819 734.853 305.019 737.853 321.719C738.953 327.519 742.653 335.719 735.553 339.019Z"
              fill="black"
            />
            <path
              d="M633.853 411.419C631.453 411.019 629.053 411.319 628.553 413.819C628.153 419.219 642.853 414.019 641.253 427.219C639.053 440.119 618.353 435.219 622.653 422.519C627.253 405.319 607.953 429.319 622.053 440.119C641.853 455.019 656.353 414.819 633.853 411.419Z"
              fill="black"
            />
            <path
              d="M780.953 185.319C779.253 182.619 776.253 181.219 773.153 180.719C769.653 180.119 765.953 179.819 762.353 180.319C761.053 180.519 761.653 182.519 762.853 182.319C764.053 182.119 765.353 182.219 766.553 182.419C763.353 186.219 764.653 194.819 770.653 194.319C775.353 194.519 777.353 188.619 776.053 184.519C777.153 185.119 778.153 185.819 778.953 186.919C779.853 188.019 781.753 186.519 780.953 185.319Z"
              fill="black"
            />
            <path
              d="M743.153 178.819C742.053 178.819 741.153 178.119 740.253 177.619C739.053 177.019 737.653 176.719 736.253 176.619C733.653 176.419 730.853 176.519 728.353 177.319C727.053 177.819 727.553 179.819 728.953 179.419C730.153 179.119 731.453 179.019 732.753 179.119C733.953 179.119 735.253 179.119 736.553 179.319C737.853 179.519 738.753 180.019 739.853 180.619C741.053 181.319 742.053 181.619 743.453 181.419C744.953 181.219 744.553 178.819 743.153 178.819Z"
              fill="black"
            />
            <path
              d="M812.453 468.319C807.453 468.219 808.053 475.819 812.953 475.219C817.753 475.319 817.253 467.719 812.453 468.319Z"
              fill="black"
            />
            <path
              d="M835.253 498.219C837.253 493.319 823.853 430.319 820.053 447.619C825.953 464.019 828.953 480.919 830.153 498.219C830.353 500.719 828.453 505.519 832.953 505.219C837.153 504.919 834.653 500.319 835.253 498.219Z"
              fill="black"
            />
            <path
              d="M204.653 198.319C210.353 199.819 214.153 188.319 210.353 185.119C203.953 183.719 197.553 195.219 204.653 198.319Z"
              fill="black"
            />
            <path
              d="M592.053 159.419C592.553 167.119 602.853 163.119 602.353 156.919C601.953 149.119 591.253 153.619 592.053 159.419Z"
              fill="black"
            />
            <path
              d="M819.653 98.519C811.653 89.219 795.453 90.319 784.053 88.719C753.853 87.619 754.153 86.019 733.853 106.219C723.353 114.219 721.353 126.019 718.353 137.219C717.953 138.819 717.653 140.419 717.253 141.919C716.853 145.419 716.153 148.919 715.953 152.519C715.853 154.819 715.753 157.219 715.553 159.519C715.553 159.619 715.453 159.619 715.453 159.719C715.253 162.419 715.053 165.119 714.553 167.819C714.553 168.019 714.653 168.119 714.753 168.219C712.553 176.919 712.953 187.319 710.653 195.619C710.553 196.319 710.553 197.019 710.453 197.719C710.353 198.419 710.353 199.119 710.253 199.819C710.253 201.219 710.253 202.619 710.253 204.019C710.153 212.619 709.253 221.119 708.953 229.619C708.853 231.919 708.753 234.219 708.753 236.519C708.853 236.819 708.853 237.019 708.953 237.319C709.053 239.819 709.453 242.319 710.053 244.619C710.353 245.119 710.453 245.619 710.453 246.119C718.253 274.219 754.853 286.619 777.853 264.019C788.253 254.819 794.753 243.119 800.153 230.619C801.953 223.219 809.253 226.319 814.453 223.419C828.053 216.419 839.653 196.119 828.453 182.719C821.753 173.519 835.953 163.319 839.753 155.219C850.053 135.419 825.653 116.519 819.653 98.519ZM782.653 92.119C810.953 95.919 814.653 90.419 822.853 119.819C804.853 107.519 787.853 95.319 764.453 93.419C767.853 91.919 775.553 91.619 782.653 92.119ZM747.753 100.319C756.253 83.519 841.353 121.819 818.553 136.519C817.253 136.819 816.953 135.719 816.353 135.019C812.953 128.419 804.553 130.619 800.953 125.419C797.553 120.319 793.153 116.919 786.653 116.819C778.153 115.819 772.953 105.719 763.153 108.619C760.953 108.919 759.453 108.619 757.953 106.919C756.053 102.819 743.853 105.419 747.753 100.319ZM820.253 145.619C827.253 148.419 821.553 158.719 818.453 155.519C813.353 154.219 813.853 142.619 820.253 145.619ZM812.253 143.119C811.653 143.619 810.753 144.419 810.153 143.619C807.853 139.919 801.553 139.819 801.153 135.019C796.553 122.419 824.653 136.419 812.253 143.119ZM799.653 128.119C797.753 137.519 781.853 131.219 780.553 124.419C782.553 112.819 797.853 120.419 799.653 128.119ZM778.453 122.819C772.053 125.919 764.153 116.319 756.253 116.819C759.753 104.419 786.453 112.819 778.453 122.819ZM737.353 112.019C743.453 98.319 769.753 109.819 750.753 116.219C747.953 114.919 734.753 116.219 737.353 112.019ZM826.953 195.219C826.653 205.219 818.353 217.019 810.653 219.419C804.253 221.319 804.353 216.019 806.353 209.119C805.253 210.119 804.153 211.119 802.953 212.019C801.153 216.219 799.553 220.419 797.753 224.619C794.153 233.119 790.153 241.419 784.353 248.719C781.853 251.919 779.053 254.719 775.953 257.219C755.053 280.519 713.453 268.319 711.753 233.619C711.853 212.919 714.853 191.719 719.253 170.819C720.053 140.619 751.653 173.019 746.953 189.819C746.853 190.219 746.753 190.619 746.653 191.119C746.653 191.719 746.653 192.319 746.453 193.019C745.553 196.119 740.053 206.519 738.553 209.419C737.753 210.919 736.953 212.519 736.053 214.019C735.453 215.119 734.353 216.419 734.953 217.719C738.453 218.519 741.953 219.319 745.453 220.119C745.453 220.119 745.353 220.119 745.353 220.019C743.853 219.319 742.253 218.619 740.753 217.819C740.053 217.519 739.253 217.119 738.553 216.819C738.453 216.819 738.153 216.619 737.853 216.419C737.853 216.319 737.953 216.319 737.953 216.219C739.453 213.419 745.253 203.119 746.553 200.119C748.053 196.719 749.253 193.219 749.753 189.619C750.553 187.619 751.153 185.519 751.153 183.519C750.953 179.619 749.853 175.719 748.253 172.119C745.453 165.819 741.053 160.019 735.353 155.919C732.953 154.919 730.353 154.119 727.553 153.719C724.353 153.019 722.953 152.019 724.053 148.319C725.753 145.619 724.653 128.019 729.653 135.219C739.853 154.819 771.953 162.119 762.753 166.319C751.453 174.019 784.653 164.519 791.553 171.619C798.153 175.719 794.453 185.519 798.153 192.219C798.253 192.319 798.453 192.519 798.553 192.719C798.753 193.019 798.853 193.319 799.053 193.619C799.353 194.019 799.753 194.419 800.153 194.819C800.153 194.919 800.153 195.019 800.153 195.119C801.253 196.219 802.553 197.119 804.153 197.519C806.253 198.019 808.753 197.219 810.653 195.819C810.853 195.719 810.953 195.619 811.153 195.519C812.453 191.719 813.353 188.419 813.153 186.619C815.953 175.219 828.753 188.719 826.953 195.219ZM830.153 163.419C826.053 173.619 815.453 155.919 825.453 154.719C828.753 156.019 830.853 159.919 830.153 163.419ZM831.353 159.519C826.453 154.319 826.453 147.219 821.453 143.119C820.353 142.219 821.253 141.319 821.853 140.619C823.453 138.619 825.153 136.619 827.553 133.819C829.653 142.719 837.353 149.719 831.353 159.519ZM837.553 148.519C834.653 140.619 830.253 133.319 829.053 124.919C833.053 132.419 838.553 139.319 837.553 148.519Z"
              fill="black"
            />
            <path
              d="M736.053 190.419C740.953 191.119 744.753 177.119 736.753 176.619C731.453 176.319 728.553 190.519 736.053 190.419Z"
              fill="black"
            />
            <path
              d="M543.253 85.6192C560.053 97.4192 572.553 116.319 590.753 125.219C579.553 106.219 555.153 94.8192 542.753 77.1192C552.153 76.5192 562.053 86.9192 572.053 88.9192C590.753 92.6192 553.653 66.0192 551.653 61.4192C548.953 59.5192 551.153 56.5192 553.753 58.8192C563.753 63.1192 571.453 71.0192 579.953 77.7192C598.153 86.9192 565.053 46.8192 563.253 42.6192C557.053 30.1192 581.653 53.2192 582.953 56.0192C586.653 59.2192 589.953 67.9192 595.153 67.2192C597.553 63.7192 592.853 58.9192 591.653 55.4192C589.153 47.4192 580.853 36.9192 583.453 29.1192C595.653 32.3192 602.353 62.0192 607.353 73.6192C614.653 94.8192 619.153 63.3192 625.453 58.1192C627.653 53.7192 633.353 55.9192 631.453 60.6192C627.553 77.1192 630.253 93.8192 629.353 110.419C628.853 118.719 629.153 118.519 621.253 121.119C611.153 127.019 565.853 133.519 568.253 145.519C579.453 218.619 610.753 288.319 654.653 347.519C656.553 350.519 660.953 348.619 657.553 345.119C625.753 299.719 600.653 249.419 585.053 196.119C580.053 184.819 624.353 177.519 628.153 169.119C615.253 169.419 600.753 179.819 588.053 184.919C577.553 191.019 578.653 156.519 574.853 150.019C570.753 138.319 615.753 131.719 625.053 125.519C633.253 123.119 629.253 143.719 632.153 149.119C642.553 200.919 666.053 255.619 705.453 289.019C692.453 267.119 671.553 244.619 660.953 219.119C639.653 176.119 632.253 130.319 635.253 82.7192C638.053 69.5192 638.653 34.1192 619.553 58.5192C617.153 61.5192 613.553 79.1192 610.353 67.6192C608.953 58.2192 582.653 2.31918 578.553 33.2192C578.353 38.6192 583.953 43.5192 581.953 48.4192C553.053 20.4192 548.553 33.6192 570.753 61.3192C576.653 73.1192 549.153 45.9192 544.453 53.2192C540.453 62.6192 554.753 67.7192 558.053 75.4192C553.053 75.8192 549.153 72.8192 544.353 72.1192C534.353 69.7192 536.453 82.4192 543.253 85.6192Z"
              fill="black"
            />
            <path
              d="M108.353 468.819C95.9531 473.019 104.853 478.019 109.553 485.919C114.053 483.219 118.353 479.819 122.553 476.719C117.553 471.419 115.653 460.619 108.353 468.819ZM107.853 475.419C107.353 470.819 115.653 470.019 115.453 475.119C115.753 480.019 107.853 480.419 107.853 475.419Z"
              fill="black"
            />
            <path
              d="M173.753 191.019C177.953 185.419 175.853 176.319 168.753 183.219C162.053 186.919 168.453 199.219 173.753 191.019Z"
              fill="black"
            />
            <path
              d="M274.853 114.819C277.453 113.519 298.053 92.219 286.753 95.519C283.553 98.919 268.653 111.419 274.853 114.819Z"
              fill="black"
            />
            <path
              d="M293.853 133.919C298.753 130.119 310.353 127.019 312.353 120.319C310.353 115.619 282.153 134.319 293.853 133.919Z"
              fill="black"
            />
            <path
              d="M372.953 471.419C368.553 470.119 339.253 474.919 344.853 467.919C359.653 467.419 350.953 453.119 344.153 446.919C333.553 438.119 352.453 378.519 351.553 360.019C352.553 353.319 348.453 340.919 341.153 341.419C341.053 346.719 349.053 350.619 346.353 360.619C341.253 394.419 336.153 428.119 331.053 461.919C331.453 469.419 323.353 486.519 329.153 491.019C332.153 491.619 332.453 488.919 332.853 486.819C334.253 482.319 332.853 475.519 339.653 476.519C349.753 476.419 358.553 477.519 368.653 477.019C380.853 476.819 365.253 500.919 373.553 504.719C379.053 502.719 376.353 483.519 378.453 477.319C379.053 473.019 377.253 471.319 372.953 471.419ZM340.653 469.319C333.653 477.119 329.953 457.319 337.253 461.919C338.353 464.219 341.153 466.519 340.653 469.319ZM339.953 449.419C341.953 449.619 347.853 458.619 347.253 460.319C344.653 463.319 333.353 451.819 339.953 449.419Z"
              fill="black"
            />
            <path
              d="M821.253 190.419C819.453 188.319 816.953 188.919 815.353 190.919C814.853 191.619 815.553 192.919 816.353 192.319C816.953 191.819 817.653 191.019 818.453 190.919C819.253 190.819 819.953 191.619 820.253 192.419C820.953 194.319 819.953 196.719 819.253 198.419C818.453 200.219 817.553 202.019 816.353 203.619C815.753 204.419 815.153 205.219 814.453 206.019C813.853 206.719 813.253 207.219 812.353 206.819C811.853 206.619 811.353 207.019 811.153 207.519C810.953 208.119 811.153 208.619 811.553 208.919C813.953 210.819 816.453 207.419 817.753 205.619C819.353 203.419 820.653 200.919 821.653 198.319C822.553 195.719 823.153 192.619 821.253 190.419Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_569_3725">
              <rect width="912.501" height="511.84" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>
    </>
  );
};
export default Hero;
