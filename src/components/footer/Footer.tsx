import React from 'react';
import MouseDownLink from '../MouseDownLink';
import css from './Footer.module.scss';

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  let className = css['outer-container'];

  if (open) className += ` ${css['displayed']}`;

  return (
    <>
      <footer className={className} /*onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}*/ onMouseDown={() => setOpen(!open)}>
        <div id="scroll-nav-container" className={css['scroll-nav-container']}>
          <p className={css['scroll-nav-text']}> Scroll </p>
          <svg width="37" height="37" className={css['scroll-nav-arrow']} viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V15.0485L24.7939 36.6918V21.6433L0 0Z" fill="#36364C" />
            <path d="M52.0001 0L27.2062 21.6433V36.6904L52.0001 15.0485V0Z" fill="#36364C" />
            <path d="M26 42.1213L0 19.4269V23.0344L26 45.7301L52 23.0357V19.4269L26 42.1213Z" fill="#36364C" />
          </svg>
        </div>

        <div className={css['inner-container']}>
          <div id="footer--content--container--desktop">
            <div id="footer--content--inner--container">
              <div className={css['copyright']} >&copy; {new Date().getFullYear()} The Ethereum Foundation, All Rights Reserved.</div>
              <div id="footer--main--content--container">
                <div id="footer--main--content">
                  {/* <!-- Action Items are all the items that are clickable in the footer: logo, links, and contact details --> */}
                  <div id="footer--action--items--container">
                    <div id="logo--and--links--container">
                      <svg id="footer--ethereum--logo" width="120" height="41" viewBox="0 0 120 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.9094 14.8025C29.9094 13.9954 30.0657 13.2806 30.3783 12.6583C30.6909 12.0359 31.1276 11.5553 31.6884 11.2142C32.2492 10.8738 32.8973 10.7036 33.6328 10.7036C34.3407 10.7036 34.9727 10.8787 35.5289 11.2287C36.0851 11.5788 36.5188 12.0699 36.8321 12.7012C37.1447 13.3333 37.301 14.0538 37.301 14.8601V15.4735H31.8814C31.909 15.9598 32.0837 16.3536 32.4054 16.6551C32.7272 16.9566 33.1501 17.1073 33.6741 17.1073C34.0419 17.1073 34.382 17.023 34.6946 16.852C35.0072 16.6826 35.3474 16.3885 35.7151 15.9695L36.9424 17.2977C36.5195 17.7929 36.0323 18.1802 35.4807 18.4574C34.9291 18.7345 34.3269 18.8731 33.6741 18.8731C32.9295 18.8731 32.2721 18.7029 31.7021 18.3626C31.1322 18.0222 30.6909 17.5433 30.3783 16.9266C30.0657 16.3082 29.9094 15.6008 29.9094 14.8042V14.8025ZM35.3152 13.9565C35.2784 13.5286 35.1014 13.1737 34.7843 12.8917C34.4671 12.6096 34.0833 12.4694 33.6328 12.4694C33.1639 12.4694 32.7778 12.6056 32.4744 12.8779C32.171 13.1502 31.9825 13.51 31.909 13.9573H35.3152V13.9565Z" fill="white" />
                        <path d="M43.2996 12.7896V15.8966C43.2996 16.1592 43.3571 16.3488 43.472 16.4655C43.5869 16.5822 43.7777 16.6405 44.0443 16.6405H45.7129V18.6535H43.865C43.056 18.6535 42.4309 18.4517 41.9896 18.0482C41.5483 17.6446 41.3276 17.0684 41.3276 16.3196V12.7896H39.5349V10.9224H41.3276V8.95239H43.2996V10.9224H46.168V12.7896H43.2996Z" fill="white" />
                        <path d="M48.678 8.005H50.65V11.6372H50.6776C51.1924 11.0148 51.8957 10.7036 52.7875 10.7036C53.3207 10.7036 53.7941 10.8405 54.2078 11.112C54.6216 11.3851 54.9426 11.7693 55.1732 12.2652C55.403 12.7604 55.5179 13.3341 55.5179 13.9865V18.6543H53.5459V14.2636C53.5459 13.7482 53.4218 13.3446 53.1736 13.0529C52.9254 12.7612 52.5852 12.6153 52.1531 12.6153C51.6842 12.6153 51.3165 12.7587 51.0499 13.0456C50.7833 13.3325 50.65 13.7288 50.65 14.2344V18.6543H48.678V8.005Z" fill="white" />
                        <path d="M57.5449 14.8025C57.5449 13.9954 57.7012 13.2806 58.0138 12.6583C58.3264 12.0359 58.7631 11.5553 59.3239 11.2142C59.8839 10.8738 60.532 10.7036 61.2683 10.7036C61.9762 10.7036 62.6075 10.8787 63.1644 11.2287C63.7206 11.5788 64.155 12.0699 64.4676 12.7012C64.7794 13.3333 64.9365 14.0538 64.9365 14.8601V15.4735H59.5169C59.5445 15.9598 59.7192 16.3536 60.0409 16.6551C60.3627 16.9566 60.7864 17.1073 61.3096 17.1073C61.6766 17.1073 62.0175 17.023 62.3301 16.852C62.6427 16.6826 62.9829 16.3885 63.3506 15.9695L64.5779 17.2977C64.155 17.7929 63.6678 18.1802 63.1169 18.4574C62.5646 18.7345 61.9624 18.8731 61.3104 18.8731C60.5657 18.8731 59.9084 18.7029 59.3384 18.3626C58.7684 18.0222 58.3271 17.5433 58.0146 16.9266C57.702 16.3082 57.5457 15.6008 57.5457 14.8042L57.5449 14.8025ZM62.9507 13.9565C62.9139 13.5286 62.7377 13.1737 62.4205 12.8917C62.1033 12.6096 61.7195 12.4694 61.269 12.4694C60.8002 12.4694 60.414 12.6056 60.1099 12.8779C59.8065 13.1502 59.618 13.51 59.5453 13.9573H62.9507V13.9565Z" fill="white" />
                        <path d="M67.6394 10.9224H69.5287V11.6371H69.5562C69.8688 11.3065 70.1929 11.0682 70.5292 10.9224C70.8648 10.7757 71.2478 10.7028 71.6807 10.7028C72.315 10.7028 72.8621 10.8997 73.3217 11.2935C73.7814 11.6866 74.1032 12.2247 74.287 12.9054L72.4392 13.5472C72.2285 12.9151 71.791 12.5983 71.1291 12.5983C70.6334 12.5983 70.2557 12.7514 69.9983 13.0577C69.7409 13.3641 69.6122 13.7847 69.6122 14.3195V18.6527H67.6402V10.9224H67.6394Z" fill="white" />
                        <path d="M75.9688 14.8025C75.9688 13.9954 76.125 13.2806 76.4369 12.6583C76.7494 12.0359 77.1869 11.5553 77.7469 11.2142C78.3077 10.8738 78.9559 10.7036 79.6913 10.7036C80.3992 10.7036 81.0313 10.8787 81.5883 11.2287C82.1445 11.5788 82.5788 12.0699 82.8914 12.7012C83.2032 13.3333 83.3595 14.0538 83.3595 14.8601V15.4735H77.9407C77.9676 15.9598 78.143 16.3536 78.4648 16.6551C78.7865 16.9566 79.2094 17.1073 79.7335 17.1073C80.1004 17.1073 80.4414 17.023 80.7539 16.852C81.0658 16.6826 81.4067 16.3885 81.7744 15.9695L83.0017 17.2977C82.5788 17.7929 82.0916 18.1802 81.54 18.4574C80.9884 18.7345 80.3862 18.8731 79.7342 18.8731C78.9888 18.8731 78.3322 18.7029 77.7622 18.3626C77.1922 18.0222 76.751 17.5433 76.4376 16.9266C76.1258 16.3082 75.9695 15.6008 75.9695 14.8042L75.9688 14.8025ZM81.3745 13.9565C81.3377 13.5286 81.1608 13.1737 80.8436 12.8917C80.5272 12.6096 80.1426 12.4694 79.6921 12.4694C79.224 12.4694 78.8379 12.6056 78.5337 12.8779C78.2303 13.1502 78.0419 13.51 77.9683 13.9573H81.3745V13.9565Z" fill="white" />
                        <path d="M85.5935 16.0279V10.9224H87.5647V15.5465C87.5647 16.4898 88.006 16.9614 88.8894 16.9614C89.2847 16.9614 89.5996 16.8326 89.834 16.5741C90.0684 16.3172 90.1856 15.9744 90.1856 15.5457V10.9216H92.1569V18.6527H90.2676V17.9663H90.24C90.0378 18.2394 89.7597 18.4574 89.4057 18.6235C89.0518 18.7897 88.6817 18.8715 88.2956 18.8715C87.4314 18.8715 86.7649 18.6211 86.2968 18.1203C85.8279 17.6195 85.5935 16.9217 85.5935 16.0271V16.0279Z" fill="white" />
                        <path d="M94.1846 10.9223H95.923V11.5933H95.9506C96.1061 11.3307 96.3068 11.129 96.5497 10.988C96.7933 10.8469 97.0622 10.7756 97.3572 10.7756C97.9363 10.7756 98.3998 11.0625 98.7492 11.6363H98.7768C99.1438 11.0625 99.6502 10.7756 100.294 10.7756C100.826 10.7756 101.259 10.975 101.589 11.3737C101.921 11.7724 102.086 12.2927 102.086 12.9345V18.6534H100.265V13.3C100.265 13.0771 100.21 12.907 100.1 12.7894C99.9888 12.6727 99.8325 12.6144 99.631 12.6144C99.4379 12.6144 99.2839 12.68 99.1683 12.8113C99.0541 12.9426 98.9959 13.1201 98.9959 13.3437V18.6534H97.2721V13.3C97.2721 13.086 97.2192 12.9183 97.1135 12.7967C97.0078 12.676 96.8584 12.6144 96.6653 12.6144C96.4631 12.6144 96.3014 12.68 96.1827 12.8113C96.0632 12.9426 96.0034 13.1201 96.0034 13.3437V18.6534H94.1831V10.9223H94.1846Z" fill="white" />
                        <path d="M32.1159 29.0475H30.1853V27.1804H32.1159V26.0426C32.1159 25.3619 32.3297 24.8246 32.7572 24.4307C33.1847 24.0377 33.7753 23.84 34.5292 23.84H36.6529V25.6925H34.7636C34.5706 25.6925 34.4235 25.7452 34.3224 25.8522C34.2212 25.9599 34.1707 26.1099 34.1707 26.3052V27.1804H37.0942V29.0475H34.1707V34.0508H32.1159V29.0475Z" fill="white" />
                        <path d="M39.1213 30.1853C39.1213 29.3879 39.2776 28.6804 39.5902 28.0629C39.9028 27.4454 40.3418 26.964 40.9072 26.6188C41.4726 26.2736 42.1184 26.101 42.8447 26.101C43.5802 26.101 44.2306 26.2736 44.796 26.6188C45.3614 26.964 45.8004 27.4462 46.113 28.0629C46.4255 28.6804 46.5818 29.3879 46.5818 30.1853C46.5818 30.9827 46.4255 31.6894 46.113 32.3077C45.8004 32.9252 45.3614 33.4058 44.796 33.751C44.2306 34.0962 43.5802 34.2688 42.8447 34.2688C42.1184 34.2688 41.4726 34.0962 40.9072 33.751C40.3418 33.4058 39.9028 32.9244 39.5902 32.3077C39.2776 31.6894 39.1213 30.9819 39.1213 30.1853ZM44.6098 30.1853C44.6098 29.5046 44.4558 28.9722 44.1479 28.5872C43.8399 28.2031 43.4055 28.011 42.8447 28.011C42.2931 28.011 41.8633 28.2031 41.5553 28.5872C41.2473 28.9722 41.0933 29.5046 41.0933 30.1853C41.0933 30.866 41.2473 31.3985 41.5553 31.7826C41.8633 32.1675 42.2931 32.3588 42.8447 32.3588C43.3963 32.3588 43.8284 32.1643 44.141 31.7753C44.4535 31.3871 44.6098 30.8563 44.6098 30.1853Z" fill="white" />
                        <path d="M48.7461 31.4244V26.3189H50.7181V30.943C50.7181 31.8863 51.1594 32.3579 52.042 32.3579C52.4373 32.3579 52.7521 32.2291 52.9866 31.9714C53.221 31.7137 53.3382 31.3709 53.3382 30.9422V26.3181H55.3102V34.0492H53.421V33.3636H53.3934C53.1911 33.6359 52.913 33.8539 52.5591 34.02C52.2051 34.1862 51.8351 34.268 51.449 34.268C50.5848 34.268 49.9183 34.0176 49.4494 33.5168C48.9805 33.016 48.7461 32.3182 48.7461 31.4235V31.4244Z" fill="white" />
                        <path d="M57.8889 26.3189H59.8617V27.0482H59.8885C60.1835 26.7371 60.5006 26.5012 60.84 26.3408C61.1802 26.1803 61.5663 26.1001 61.9992 26.1001C62.4765 26.1001 62.9223 26.2184 63.336 26.4567C63.7497 26.6957 64.0861 27.0596 64.3427 27.5515C64.6001 28.0418 64.7289 28.652 64.7289 29.3822V34.05H62.7569V29.6593C62.7569 29.1642 62.6373 28.7646 62.3983 28.4632C62.1593 28.1617 61.8145 28.0102 61.364 28.0102C60.8952 28.0102 60.5267 28.1544 60.2608 28.4405C59.9942 28.7274 59.8617 29.1245 59.8617 29.6293V34.0492H57.8889V26.3181V26.3189Z" fill="white" />
                        <path d="M66.605 30.1853C66.605 29.4073 66.7475 28.7071 67.0325 28.0848C67.3175 27.4616 67.7174 26.9761 68.2323 26.6253C68.7471 26.2752 69.3309 26.1009 69.9836 26.1009C70.811 26.1009 71.4592 26.3343 71.928 26.8011H71.9548V23.4023H73.9261V34.0508H72.1065V33.3798H72.079C71.5365 33.973 70.8286 34.2696 69.956 34.2696C69.3117 34.2696 68.7356 34.0994 68.2254 33.7591C67.7151 33.4187 67.3167 32.9398 67.0317 32.3231C66.7467 31.7064 66.6042 30.9932 66.6042 30.1861L66.605 30.1853ZM71.9548 30.6804V29.6747C71.9548 29.383 71.8813 29.1107 71.7342 28.8571C71.5879 28.6042 71.3825 28.4008 71.1205 28.2444C70.8585 28.0896 70.5666 28.011 70.2449 28.011C69.7293 28.011 69.3232 28.2079 69.0244 28.6018C68.7249 28.9956 68.5762 29.5232 68.5762 30.1845C68.5762 30.836 68.7272 31.3611 69.0313 31.759C69.3347 32.1578 69.7346 32.3571 70.2303 32.3571C70.726 32.3571 71.1389 32.1942 71.4645 31.8685C71.7909 31.5427 71.9541 31.1456 71.9541 30.6788L71.9548 30.6804Z" fill="white" />
                        <path d="M76.4231 31.9795C76.4231 31.2598 76.6553 30.7007 77.1195 30.3019C77.583 29.9041 78.3583 29.6115 79.4432 29.4267C80.0124 29.3303 80.4016 29.2201 80.6084 29.0993C80.8161 28.9778 80.9187 28.8141 80.9187 28.6099C80.9187 28.3765 80.8168 28.1917 80.6153 28.0556C80.4138 27.9194 80.1373 27.8513 79.7879 27.8513C79.3926 27.8513 79.0501 27.977 78.7606 28.2306C78.471 28.4843 78.2848 28.8189 78.202 29.2371L76.3672 28.7995C76.4591 28.2744 76.666 27.8068 76.9885 27.3983C77.3103 26.9899 77.714 26.6722 78.202 26.4429C78.6893 26.2144 79.2172 26.1001 79.7872 26.1001C80.7257 26.1001 81.4742 26.3772 82.0357 26.9307C82.5958 27.4859 82.8769 28.2249 82.8769 29.148V34.0492H81.1118V33.1885H81.0842C80.8727 33.5289 80.5763 33.7931 80.1947 33.9827C79.8132 34.1724 79.3834 34.2672 78.9054 34.2672C78.4273 34.2672 77.999 34.1707 77.6229 33.9762C77.2459 33.7818 76.951 33.5095 76.7403 33.1594C76.5288 32.8085 76.4231 32.4154 76.4231 31.9778V31.9795ZM81.0015 31.1772V30.3019H80.9746C80.8919 30.4486 80.754 30.5645 80.5609 30.6528C80.3679 30.7396 80.0645 30.8279 79.6508 30.9146C79.136 31.0321 78.782 31.1553 78.5889 31.2866C78.3959 31.4179 78.2993 31.601 78.2993 31.8344C78.2993 32.0572 78.3836 32.2274 78.5545 32.3449C78.7245 32.4616 78.9705 32.52 79.2922 32.52C79.5864 32.52 79.8668 32.4592 80.1334 32.3368C80.4001 32.2145 80.6115 32.05 80.7678 31.8417C80.9241 31.6334 81.0022 31.4114 81.0022 31.178L81.0015 31.1772Z" fill="white" />
                        <path d="M89.3582 28.1869V31.2939C89.3582 31.5557 89.4149 31.7461 89.5306 31.862C89.6455 31.9795 89.8355 32.0379 90.1029 32.0379H91.7715V34.0501H89.9236C89.1146 34.0501 88.4894 33.8483 88.0489 33.4447C87.6076 33.0411 87.387 32.4649 87.387 31.7161V28.1869H85.5942V26.319H87.387V24.3497H89.359V26.319H92.2273V28.1869H89.359H89.3582Z" fill="white" />
                        <path d="M101.714 32.1399V34.05H94.5295V32.1399H97.1359V28.2306H94.6667V26.3197H99.1079V32.1407H101.713L101.714 32.1399ZM97.0945 23.0522H99.1217V25.1082H97.0945V23.0522Z" fill="white" />
                        <path d="M103.604 30.1853C103.604 29.3879 103.76 28.6804 104.072 28.0629C104.384 27.4454 104.823 26.964 105.389 26.6188C105.954 26.2736 106.601 26.101 107.326 26.101C108.062 26.101 108.713 26.2736 109.278 26.6188C109.843 26.964 110.283 27.4462 110.595 28.0629C110.907 28.6804 111.063 29.3879 111.063 30.1853C111.063 30.9827 110.907 31.6894 110.595 32.3077C110.283 32.9252 109.844 33.4058 109.278 33.751C108.713 34.0962 108.062 34.2688 107.326 34.2688C106.601 34.2688 105.954 34.0962 105.389 33.751C104.824 33.4058 104.384 32.9244 104.072 32.3077C103.76 31.6894 103.604 30.9819 103.604 30.1853ZM109.092 30.1853C109.092 29.5046 108.938 28.9722 108.629 28.5872C108.321 28.2031 107.887 28.011 107.326 28.011C106.775 28.011 106.345 28.2031 106.037 28.5872C105.729 28.9722 105.575 29.5046 105.575 30.1853C105.575 30.866 105.728 31.3985 106.037 31.7826C106.345 32.1675 106.775 32.3588 107.326 32.3588C107.878 32.3588 108.31 32.1643 108.622 31.7753C108.935 31.3863 109.091 30.8563 109.091 30.1853H109.092Z" fill="white" />
                        <path d="M113.161 26.3189H115.132V27.0482H115.16C115.454 26.7371 115.771 26.5012 116.111 26.3408C116.451 26.1803 116.838 26.1001 117.27 26.1001C117.748 26.1001 118.194 26.2184 118.607 26.4567C119.021 26.6957 119.357 27.0596 119.614 27.5515C119.871 28.0418 120 28.652 120 29.3822V34.05H118.028V29.6593C118.028 29.1642 117.909 28.7646 117.67 28.4632C117.43 28.1617 117.085 28.0102 116.634 28.0102C116.166 28.0102 115.798 28.1544 115.532 28.4405C115.265 28.7274 115.132 29.1245 115.132 29.6293V34.0492H113.161V26.3181V26.3189Z" fill="white" />
                        <path d="M11.1563 30.4317V40.1539L0 22.9161L11.1563 30.4317Z" fill="#18ABD3" />
                        <path d="M22.3133 22.9161L11.1562 40.1539V30.4317L22.3133 22.9161Z" fill="#6B7ABA" />
                        <path d="M22.3133 20.4874L11.1562 13.7815V28.0038L22.3133 20.4874Z" fill="#A566A6" />
                        <path d="M22.3133 20.4874L11.1562 0V13.7814L22.3133 20.4874Z" fill="#F08A78" />
                        <path d="M11.1563 0V13.7814L0 20.4874L11.1563 0Z" fill="#FFEB5C" />
                        <path d="M11.1563 13.7815V28.0038L0 20.4874L11.1563 13.7815Z" fill="#58B36F" />
                      </svg>
                      <div id="footer--links--container--two">
                        <MouseDownLink target="_blank" rel="noopener noreferrer" href="https://devcon.org/" className="footer--link--two">DevCon</MouseDownLink>
                        <MouseDownLink target="_blank" rel="noopener noreferrer" href="https://blog.ethereum.org/" className="footer--link--two">Blog</MouseDownLink>
                        <MouseDownLink target="_blank" rel="noopener noreferrer" href="https://ethereum.org/en/terms-of-use/" className="footer--link--two">Terms of Use</MouseDownLink>
                        <MouseDownLink target="_blank" rel="noopener noreferrer" href="https://ethereum.org/en/privacy-policy/" className="footer--link--two">Privacy Policy</MouseDownLink>
                        <MouseDownLink target="_blank" rel="noopener noreferrer" href="https://ethereum.org/en/cookie-policy/" className="footer--link--two">Cookie Policy</MouseDownLink>
                      </div>
                    </div>
                    <div className="dividing--line"></div>
                    <div id="contact--list--container">
                      <div className="contact--item--container">
                        <p className="contact--item--title">General Contact</p>
                        <MouseDownLink href="mailto:info@ethereum.org?subject=Hello" className="contact--item--email">info@ethereum.org</MouseDownLink>
                      </div>
                      <div className="contact--item--container">
                        <p className="contact--item--title">Press Contact</p>
                        <MouseDownLink href="mailto:press@ethereum.org?subject=Hello" className="contact--item--email">press@ethereum.org</MouseDownLink>
                      </div>
                    </div>
                    <div className="dividing--line"></div>
                  </div>
                  <div className={css['canari-disclaimer']}>
                    <div id="canari--icon--container">
                      <object data="/assets/canari-bird.svg" id="canari--icon" width="30" height="30" aria-labelledby="Canari Bird Icon">Canari Bird Icon</object>
                    </div>
                    <p id="canari--disclaimer">
                      The Ethereum Foundation (Stiftung Ethereum) has never been contacted by any agency anywhere in the world in a way which requires that contact not to be disclosed. Stiftung Ethereum will publicly disclose any sort of inquiry from government agencies that falls outside the scope of regular business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="footer-arrow-container-desktop">
            <object data="/assets/arrow.svg" id="footer--arrow--desktop" width="20" height="20" aria-label="Footer Arrow">Footer Arrow</object>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;