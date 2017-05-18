;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-agreen" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M824.66816 299.58144 429.54752 694.70208l-190.32064-190.32064c-8.00768-8.00768-20.95104-8.00768-28.95872 0s-8.00768 20.95104 0 28.95872l204.8 204.8c3.9936 3.9936 9.23648 6.00064 14.47936 6.00064s10.48576-2.00704 14.47936-6.00064l409.6-409.6c8.00768-8.00768 8.00768-20.95104 0-28.95872S832.65536 291.57376 824.66816 299.58144z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shanchujian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C229.696 0 0 229.696 0 512c0 282.368 229.632 512 512 512 282.176 0 512-229.568 512-512C1024 229.696 794.432 0 512 0L512 0zM720.896 669.632c14.336 14.4 14.272 37.568-0.064 51.84-7.168 7.04-16.512 10.688-25.792 10.688-9.408 0-18.688-3.648-25.856-10.688L511.872 563.52l-157.824 156.224C346.88 726.656 337.6 730.24 328.32 730.24c-9.472 0-18.816-3.648-25.984-10.88-14.208-14.4-14.144-37.504 0.32-51.776l157.632-155.84L303.168 354.304C289.024 339.904 289.024 316.8 303.232 302.528c14.336-14.4 37.44-14.272 51.776 0.064l157.248 157.696 157.824-156.096c14.336-14.272 37.504-14.08 51.712 0.256 14.336 14.4 14.144 37.504-0.256 51.776L563.776 512.064 720.896 669.632 720.896 669.632z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 1024c-176.743 0-319.993-143.299-319.993-319.994 0-71.897 23.982-137.997 64.018-191.412L256.025 256.025C256.025 114.61 370.634 0 512 0c141.367 0 255.975 114.61 255.975 256.025l0 256.569c40.037 53.415 64.018 119.515 64.018 191.412C831.993 880.701 688.745 1024 512 1024L512 1024zM704.006 256.025c0-106.038-85.969-192.007-192.007-192.007-106.036 0-192.006 85.969-192.006 192.007l0 192.402c53.514-40.284 119.861-64.415 192.006-64.415 72.145 0 138.493 24.131 192.007 64.415L704.006 256.025 704.006 256.025zM711.637 544.009l-7.631 0 0-8.969c-46.923-53.267-115.451-87.06-192.007-87.06-141.366 0-255.974 114.61-255.974 256.025 0 141.367 114.609 255.974 255.974 255.974 141.367 0 255.975-114.608 255.975-255.974C767.975 643.406 746.817 587.861 711.637 544.009L711.637 544.009zM512 831.993c-17.689 0-32.009-14.32-32.009-32.009L479.991 671.996c0-17.689 14.32-32.009 32.009-32.009 17.69 0 32.011 14.32 32.011 32.009l0 127.988C544.01 817.673 529.689 831.993 512 831.993L512 831.993z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-close" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.716033 186.226379c43.951001 0 86.574774 8.601912 126.687354 25.567305 38.758746 16.392342 73.571622 39.86494 103.474676 69.764923 29.9051 29.90203 53.379745 64.714907 69.774133 103.47263 16.968463 40.114626 25.571399 82.743516 25.571399 126.700657s-8.602935 86.586031-25.571399 126.70168c-16.394389 38.757722-39.869033 73.571622-69.774133 103.47263-29.903054 29.901007-64.715931 53.373605-103.474676 69.765947-40.11258 16.965393-82.736353 25.567305-126.687354 25.567305s-86.575798-8.601912-126.687354-25.567305c-38.757722-16.392342-73.571622-39.86494-103.474676-69.765947-29.904077-29.90203-53.378721-64.714907-69.77311-103.47263-16.968463-40.114626-25.571399-82.743516-25.571399-126.70168s8.603959-86.586031 25.571399-126.700657c16.394389-38.757722 39.869033-73.571622 69.77311-103.47263 29.903054-29.899984 64.716954-53.372581 103.474676-69.764923C425.141258 194.82829 467.765031 186.226379 511.716033 186.226379M511.716033 160.643724c-193.884802 0-351.089194 157.169599-351.089194 351.089194S317.832254 862.823134 511.716033 862.823134c193.883779 0 351.090217-157.171646 351.090217-351.090217S705.599811 160.643724 511.716033 160.643724L511.716033 160.643724z"  ></path>'+
      ''+
      '<path d="M680.973948 693.78216c-3.273557 0-6.547113-1.249457-9.045003-3.746324L333.414137 351.521029c-4.994758-4.994758-4.994758-13.094226 0-18.090007 4.995781-4.995781 13.094226-4.995781 18.090007 0L690.018951 671.945829c4.995781 4.995781 4.995781 13.094226 0 18.090007C687.521061 692.532703 684.247504 693.78216 680.973948 693.78216z"  ></path>'+
      ''+
      '<path d="M342.459141 693.783183c-3.273557 0-6.547113-1.249457-9.045003-3.746324-4.994758-4.995781-4.994758-13.094226 0-18.090007l338.513784-338.51583c4.994758-4.995781 13.095249-4.995781 18.090007 0 4.995781 4.994758 4.995781 13.094226 0 18.090007L351.504144 690.036859C349.006254 692.533726 345.732697 693.783183 342.459141 693.783183z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-linedesign-20-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M882.7904 382.3872C830.72 220.032 687.2832 102.8608 518.5024 102.8608c-168.1408 0-311.1168 116.3264-363.6736 277.7856-71.2704 5.4016-127.744 68.6848-127.744 145.8944v106.6496c0 80.7168 61.7216 146.4064 137.5744 146.4064h73.6512a38.4 38.4 0 0 0 38.4-38.4V418.5088a38.4 38.4 0 0 0-38.4-38.4h-1.792c48.1024-117.9136 156.288-200.448 281.984-200.448 125.7216 0 233.9328 82.5344 282.0096 200.448h-14.8224a38.4 38.4 0 0 0-38.4 38.4v322.6624c0 9.7536 3.7632 18.56 9.7536 25.344-57.4208 66.4064-141.9264 104.32-245.8368 104.32a25.6 25.6 0 1 0 0 51.2c129.0496 0 233.9328-52.6592 300.5952-142.464h47.5136c75.8528 0 137.5744-65.664 137.5744-146.4064v-106.6496c0.0256-72.2176-49.3824-132.224-114.0992-144.128zM199.9104 542.0544v160.7424H164.6592c-33.5104 0-60.7744-31.232-60.7744-69.6064v-106.6496c0-6.0416 0.8704-11.8016 2.1504-17.3824 0.3072-1.3312 0.6912-2.6368 1.0752-3.9424 1.408-4.8384 3.1232-9.4976 5.376-13.7984 0.2304-0.4608 0.4096-0.9472 0.6656-1.408 5.6576-10.4192 13.6448-18.8672 23.1424-24.6528a59.136 59.136 0 0 1 12.6208-5.76c0.4608-0.128 0.8704-0.3328 1.3312-0.4608 4.608-1.3824 9.4208-2.2016 14.4128-2.2016h35.2512v85.12z m720.2048 91.1104c0 38.3744-27.264 69.6064-60.7744 69.6064H824.1152V456.9088h35.2512c16.6656 0 31.7952 7.7568 42.8032 20.2752a74.752 74.752 0 0 1 17.9712 49.3568v106.624z" fill="#515151" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dibanfanxin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M83.794 524.624h163.737c11.657 0 21.028 9.993 21.028 22.36V708.463c0 12.099-9.371 22.361-21.028 22.361H83.794C71.629 730.824 62 720.562 62 708.463V546.985c0-12.368 9.629-22.361 21.794-22.361z m0 231.701h394.869c11.658 0 21.042 9.991 21.042 21.564v161.752c0 12.366-9.384 22.359-21.042 22.359H83.794C71.629 962 62 952.007 62 939.641V777.89c0-11.574 9.629-21.565 21.794-21.565z m196.928 44.196H104.834v117.298H456.624V800.521H280.722z m264.86-44.196h394.87c12.164 0 21.549 9.991 21.549 21.564v161.752c0 12.366-9.385 22.359-21.549 22.359h-394.87c-11.658 0-21.289-9.993-21.289-22.359V777.89c0-11.574 9.631-21.565 21.289-21.565z m197.435 44.196H567.129v117.298H918.919V800.521H743.017zM83.794 293.447h394.869c11.658 0 21.042 9.722 21.042 22.09V477.016c0 12.098-9.384 22.09-21.042 22.09H83.794c-12.165 0-21.794-9.993-21.794-22.09V315.536c0-12.367 9.629-22.089 21.794-22.089z m196.928 44.706H104.834v116.775H456.624V338.153H280.722z m264.86-44.706h394.87c12.164 0 21.549 9.722 21.549 22.09V477.016c0 12.098-9.385 22.09-21.549 22.09h-394.87c-11.658 0-21.289-9.993-21.289-22.09V315.536c0-12.367 9.631-22.089 21.289-22.089z m197.435 44.706H567.129v116.775H918.919V338.153H743.017zM314.433 62H709.81c11.66 0 21.041 9.995 21.041 22.616V245.57c0 12.098-9.381 22.616-21.041 22.616H314.433c-11.657 0-21.286-10.519-21.286-22.616V84.616C293.146 71.995 302.776 62 314.433 62z m197.437 44.451H335.981v117.031H687.77V106.451h-175.9zM314.433 524.624H709.81c11.66 0 21.041 9.993 21.041 22.36V708.463c0 12.099-9.381 22.361-21.041 22.361H314.433c-11.657 0-21.286-10.263-21.286-22.361V546.985c-0.001-12.368 9.629-22.361 21.286-22.361z m197.437 44.448H335.981v117.033H687.77V569.072h-175.9z m264.858-44.448H940.452c12.164 0 21.549 9.993 21.549 22.36V708.463c0 12.099-9.385 22.361-21.549 22.361H776.728c-11.657 0-21.545-10.263-21.545-22.361V546.985c0-12.368 9.887-22.361 21.545-22.361z m142.191 44.448H798.274v117.033h120.645V569.072zM776.728 62H940.452C952.615 62 962 71.995 962 84.616V245.57c0 12.098-9.385 22.616-21.549 22.616H776.728c-11.657 0-21.545-10.519-21.545-22.616V84.616c0-12.621 9.887-22.616 21.545-22.616z m142.191 44.451H798.274v117.031h120.645V106.451zM225.722 569.072H104.834v117.033h120.888V569.072z" fill="#595757" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qiangmianfanxin1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M955.841 806.841L825.214 679.146c-8.549-8.667-22.28-8.667-31.163 0l-27.791 27.335-86.072-84.714 238.411-233.502c8.328-8.159 8.328-21.771 0-30.429L770.983 212.698c-9.226-8.321-22.84-8.321-31.056 0l-1.013 1.295-34.311 33.922-56.368-55.179-0.342-0.57c-0.896-1.52-2.587-2.523-4.162-3.537V83.319c0-11.695-9.669-21.319-21.711-21.319H109.537c-12.43 0-21.999 9.624-21.999 21.319v0.452c0 202.397-1.793 405.3 0 608.201 0.568 29.813 0.568 38.697-14.737 63.337l-0.787 0.787c-2.588 4.956-5.344 10.69-6.693 16.317l-0.506 1.124c-1.575 6.076-2.814 12.6-2.814 18.451 0 10.012 1.801 18.337 5.402 27.001 3.599 7.986 8.213 15.415 14.454 21.491l1.013 1.349c6.757 6.415 14.237 11.026 23.24 14.846 8.268 3.824 17.378 5.626 26.884 5.626 9.562 0 19.133-1.802 27.119-5.626 9.056-3.819 16.819-8.431 23.286-14.846 4.333-4.611 8.268-9.678 12.149-15.64 12.889-0.56 25.6-4.838 36.12-11.704l2.869-2.136c2.252 1.573 3.879 3.375 5.344 4.504l1.91 1.575c7.88 6.069 16.428 10.238 26.106 13.162l-3.491 5.627-0.669 1.238a57.656 57.656 0 0 0-8.838 20.47c-2.307 7.091-3.375 14.293-3.375 21.492 0 10.91 2.198 21.71 6.189 31.161 4.386 10.24 10.575 19.242 18.345 26.325 7.536 7.651 16.481 13.84 26.659 17.893 20.93 8.548 42.589 7.985 63.793 0 9.453-4.053 18.063-9.681 25.826-16.202l0.95-1.69c7.263-6.748 13.224-15.072 17.667-24.976l0.397-1.35c3.937-9.451 6.352-20.251 6.352-31.161 0-7.199-1.068-14.736-3.483-21.492-1.52-6.858-3.772-13.053-7.708-19.014l-0.785-1.456c-13.389-22.054-16.203-44.441-16.203-67.172 6.187-1.575 12.095-4.83 16.988-9.896l385.29-377.682c13.95-13.949 13.95-36.508 0-50.455l-56.817-55.469 20.253-19.232 116.895 114.526-238.069 233.614v0.229c-8.441 8.328-8.441 22.052 0 30.148l101.479 99.573-28.127 27.563c-8.549 8.212-8.549 21.936 0 29.813L838.04 922.273c8.322 8.213 22.056 8.213 31.165 0l86.635-85.055c8.214-8.55 8.214-22.28 0.001-30.377z m-584.945 88.648v0.451c-1.855 4.505-4.948 8.666-8.042 11.588l-1.068 1.574c-3.827 2.704-7.599 5.518-11.923 7.202l-0.958 0.678c-4.331 1.239-9.342 2.252-14.174 2.252-5.456 0-10.574-1.013-15.307-2.93-4.893-2.245-9.163-4.949-12.825-8.776-3.656-2.922-6.243-7.426-8.27-12.039-2.305-4.496-3.374-9.672-3.374-15.07 0-3.49 0.507-7.199 1.465-10.239 0.84-3.038 2.415-6.64 4.441-9.68l0.732-1.573c5.509-8.323 9.165-15.07 12.266-21.708l0.671-2.146c3.32-6.974 5.735-13.388 7.761-19.684 3.32-11.362-3.935-23.4-15.189-26.214-4.948-1.121-9.842-0.786-14.057 0.561l-3.32 0.787h-3.879c-6.189 0-12.384-1.574-16.99-5.508l-0.958-0.788c-4.16-3.826-7.544-8.331-9.171-13.955-2.191-11.588-14.176-18.789-26.1-15.977-6.64 1.24-12.32 6.531-14.963 12.491-2.305 5.066-5.625 9.68-10.355 12.04-4.27 3.258-9.454 4.723-15.244 4.723l-3.321-0.225-3.092-0.336c-11.362-3.04-23.23 4.613-26.106 15.64a26.206 26.206 0 0 1-2.3 7.083c-1.011 1.801-2.812 3.943-4.838 6.079-2.362 2.133-5.682 4.276-8.612 5.063-3.32 1.575-6.632 2.472-10.801 2.472-3.881 0-7.254-0.896-10.574-2.472-2.814-0.787-6.187-2.931-8.549-5.063l-1.013-1.465c-2.307-2.026-4.107-4.614-5.121-7.428v-0.226c-1.068-2.921-2.36-6.521-2.36-10.684 0-2.253 0.732-4.387 1.292-6.749v-1.013c1.068-1.8 1.52-3.826 2.868-5.627l0.732-1.129c21.205-34.872 21.205-46.912 21.205-85.499v-0.787c-0.507-195.531 0-391.069 0-586.437h468.83v83.88c-1.35 1.014-2.47 2.018-3.937 3.537l-384.33 376.949-0.507 0.561c-14.744 14.066-14.744 37.014 0 50.746L342.265 749.12v6.974c0 47.144 0 61.771 26.215 104.403l0.56 1.014c1.349 2.479 2.813 5.628 3.655 8.666 1.075 3.492 1.521 6.639 1.521 10.239 0 5.401-1.014 10.577-3.32 15.073z m10.077-209.478l-92.487-90.791 333.536-327.278 92.598 90.457-333.647 327.612z m472.031 190.691l-99.345-97.647 55.807-54.571 99.678 97.202-56.14 55.016z" fill="#595757" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fangshuishengji1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M854 618.974c0 94.849-38.254 180.566-100.236 242.788C692.336 923.407 606.607 962 511.999 962c-94.608 0-179.772-38.593-241.536-100.238C208.473 799.54 170 713.822 170 618.974c0-168.076 112.728-300.714 222.528-430.48l1.908-1.746c31.056-37.073 62.22-73.465 90.108-111.265 11.256-14.737 32.856-18.174 48.048-6.409 2.916 2.472 5.4 4.717 7.309 7.363 27.229 36.39 59.291 74.473 91.691 112.057l1.908 2.19C742.508 319.723 854 452.134 854 618.974zM705.057 812.597c49.152-49.392 79.871-117.902 79.871-193.623 0-142.474-102.936-264.377-203.855-383.798l-2.137-1.963c-22.391-26.555-45.334-53.047-66.937-80.611-20.808 26.101-42.635 52.092-65.136 78.638l-2.027 1.973C343.472 353.132 239.072 475.99 239.072 618.974c0 75.721 30.936 144.231 79.873 193.623 49.511 49.609 117.563 80.102 193.054 80.102 75.493-0.001 143.546-30.493 193.058-80.102z m22.945-245.369c-9.002 0-16.201 26.209-16.201 58.502 0 32.292 7.199 58.501 16.201 58.501 8.998 0 16.199-26.209 16.199-58.501 0-32.293-7.201-58.502-16.199-58.502z" fill="#595757" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qitaxiangmu1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M398.752 673.624c-10.223 9.899-10.223 26.1 0 36.449 10.222 9.899 26.777 9.899 36.718 0 10.167-10.35 10.167-26.55 0-36.449-10.23-10.35-26.496-10.35-36.718 0z m56.032-101.812c-14.741 0-25.983 11.361-25.983 25.536 0 14.513 11.242 26.437 25.983 26.437 14.008 0 25.477-11.924 25.477-26.437 0-14.175-11.469-25.536-25.477-25.536z m170.187-50.176c10.176-10.404 10.176-26.664 0-36.504-10.16-10.409-26.543-10.409-36.711 0-10.168 9.841-10.168 26.1 0 36.504 10.168 10.349 26.551 10.349 36.711 0z m-113.08 183.15c-14.288 0-26.037 11.7-26.037 25.876 0 14.623 11.749 25.873 26.037 25.873 14.802 0 25.984-11.25 25.984-25.873 0-14.176-11.182-25.876-25.984-25.876z m0-76.052c-14.288 0-26.037 11.7-26.037 26.213 0 13.838 11.749 25.538 26.037 25.538 14.234 0 25.984-11.7 25.984-26.1 0-13.95-11.75-25.651-25.984-25.651z m-75.914-107.098c9.66-10.404 9.66-26.664 0-36.789-10.737-10.125-27.003-10.125-37.225 0-10.223 10.125-10.223 26.384 0 36.789 10.222 10.349 26.777 10.349 37.225 0z m-32.138 75.712c0-14.399-11.694-25.536-25.928-25.762-14.29 0.226-26.037 11.362-26.037 25.762 0 14.513 11.747 26.437 26.037 25.876 14.234 0 25.928-11.364 25.928-25.876zM897 85.023c0-11.642-9.709-21.263-21.457-21.263H148.637c-2.032 0-4.066 0.504-5.647 0.729-11.687 2.816-18.302 14.741-15.247 26.1l104.438 386.667-2.033 4.049-0.226 1.518c-5.875 14.458-10.503 28.913-14.063 43.875H186.09c-11.469 0-21.69 4.837-29.598 12.374-7.854 7.651-12.707 18.001-12.707 29.927v57.486l0.506 2.812c0.505 10.126 5.087 19.802 12.201 26.663l1.808 1.688c7.113 6.073 17.055 10.462 27.79 10.462h29.769c7.177 30.823 19.657 60.75 36.206 87.861l-20.896 20.588-1.526 2.026c-7.121 7.764-10.962 17.662-10.962 27.562 0 10.688 4.356 21.264 12.488 29.926l41.23 40.499c8.189 8.664 18.869 12.15 29.599 12.15 10.674 0 21.916-3.486 30.048-12.15l0.733-1.012 19.883-19.462c27.229 16.424 57.333 29.138 88.396 36.226v29.361c0 11.7 4.58 21.824 12.2 29.363l1.527 1.349c7.175 7.088 17.343 11.363 28.017 11.363h58.121c11.748 0 22.375-4.837 30.059-12.712 7.111-7.539 11.746-17.663 11.746-29.14v-0.224h0.453v-29.361c31.063-7.088 60.66-19.802 88.115-36.452l20.896 20.7c7.908 8.664 18.869 12.15 29.598 12.15h2.26c9.939-0.451 19.656-4.5 27.229-12.15h0.561l40.779-40.499 1.471-2.024c7.113-7.877 10.73-17.777 10.73-27.901 0-10.686-4.068-21.262-12.201-29.588l-1.357-0.786-19.539-19.802c8.359-13.948 15.707-27.897 21.582-42.523 6.436-14.736 11.18-29.925 15.02-45.338h29.598v0.225c11.182 0 21.916-5.061 29.49-12.486v0.338c7.682-7.877 12.311-18 12.311-29.701v-60.75c-0.795-10.35-5.08-20.025-12.311-26.663l-1.699-1.461c-7.455-6.64-17.396-10.913-27.791-10.913h-29.598c-3.84-15.467-8.928-30.433-15.02-45.393l-1.809-4.558 104.49-385.087c0.795-2.304 1.014-4.104 1.014-6.638z m-60.1 484.539v55.911h-44.619c-10.961-0.788-20.561 6.639-22.594 17.774-3.047 18.45-8.701 36.677-15.814 54.002-7.113 17.211-16.043 33.413-26.545 48.823l-0.453 0.563c-6.107 7.875-5.086 19.688 2.479 27.113l31.633 31.949 0.232 0.449-39.43 39.488-32.652-32.4c-7.338-6.863-18.861-8.101-27.564-2.024-30.494 21.261-65.857 35.999-102.795 42.524-10.51 1.013-18.869 10.125-18.869 21.038v45.898h-56.087v-45.898c0-10.353-7.121-19.238-17.795-20.476-37.225-7.088-72.354-21.261-103.424-42.524-8.134-6.639-20.39-5.626-28.296 2.023l-31.858 31.389-0.451 0.45-39.765-39.488 32.589-32.398c7.176-7.088 8.413-18.789 2.321-27.113-21.635-30.713-35.932-65.925-42.819-102.601-1.247-10.688-10.393-18.563-21.129-18.563h-46.091V569.56h44.571c10.674 0.674 20.895-6.638 22.649-17.775 6.38-36.451 21.184-72 42.305-102.376l0.514-0.787c5.874-8.325 5.079-20.025-2.321-27.617l-32.083-31.896-0.506-0.504 39.989-39.546 32.366 32.455h0.224c7.402 7.092 18.582 8.1 27.286 2.025 30.555-21.034 66.199-36 102.91-42.579 10.456-0.788 18.815-9.621 18.815-20.754v-46.125h56.541v44.55c-1.014 10.684 6.668 20.81 17.848 22.33 36.721 6.579 71.848 21.262 102.912 42.3 8.133 6.354 20.451 5.85 28.016-1.746l32.652-32.455 39.43 39.546-31.865 32.399c-7.564 7.592-8.586 18.784-2.479 27.617 21.348 30.15 35.918 65.587 42.813 102.376 1.021 10.461 9.941 18.563 21.355 18.563H836.9v0.001z m-55.011-221.006l-30.051-29.925c-8.695-8.608-19.43-12.658-30.049-12.658-10.729 0-21.689 4.05-29.598 12.658l-21.129 20.53c-27.223-16.705-57.045-29.138-87.883-36.226l-0.453-29.646h0.453c0-11.417-5.088-21.542-12.199-29.642-7.684-7.367-18.311-12.15-30.059-12.15H482.8c-11.688 0-21.917 4.784-29.544 12.15-7.62 8.1-12.2 18-12.2 29.642v29.646c-31.063 7.087-61.167 19.8-88.396 36.226l-20.616-20.53c-8.133-8.608-19.375-12.658-30.048-12.658l-2.596 0.509c-9.66 0.504-19.547 4.05-27.003 12.149l-30.556 29.925-65.187-241.708h670.982l-65.747 241.708zM588.26 673.624c-10.168 9.899-10.168 26.1 0 36.449 10.168 9.899 26.551 9.899 36.711 0 10.176-10.35 10.176-26.55 0-36.449-10.16-10.35-26.543-10.35-36.711 0z m-76.143-159.187c-14.514 0-26.263 11.475-26.263 25.873 0 14.516 11.749 25.65 26.263 25.65a25.617 25.617 0 0 0 25.758-25.65c0-14.399-11.182-25.873-25.758-25.873z m107.774 82.911c0 14.513 11.75 25.876 25.982 26.437 14.236-0.561 25.984-11.924 25.984-26.437 0-14.175-11.748-25.536-25.984-25.536-14.232 0-25.982 11.361-25.982 25.536z m-24.51 0c0-14.175-11.641-25.536-25.99-25.536-14.461 0-25.977 11.361-25.977 25.536 0 14.513 11.516 26.437 25.977 26.437 14.349-0.112 25.99-11.925 25.99-26.437z m-83.264-159.075c-14.514 0-26.263 11.642-26.263 25.817 0 14.458 11.749 25.821 26.263 25.821 14.576 0 25.758-11.363 25.758-25.821 0-14.175-11.182-25.817-25.758-25.817z m0-67.162c-124.546 0-227.97 102.096-227.97 226.237 0 124.649 102.404 226.575 227.97 226.575 124.602 0 227.521-102.376 227.521-226.575 0.001-124.367-102.466-226.237-227.521-226.237z m0 410.175c-101.617 0-184.7-82.574-184.7-183.938 0-100.291 83.083-183.433 184.7-183.433 101.674 0 184.703 82.632 184.703 183.433 0 100.912-83.597 183.938-184.703 183.938z" fill="#595757" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-queren" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M201.039 641.708L89.244 742.854 62 706.329l166.284-149.845 198.225 302.499L932.877 62H962v40.271h-1.879L414.296 962 201.039 641.708z" fill="#595757" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangxiajiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M828.059 314H952L533.689 710h-43.375L72 314h123.943l316.056 306.39L828.059 314z" fill="#595757" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiayibu_jiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M144 189.761V63l736 427.817v44.366L144 963V836.239L713.448 513 144 189.761z" fill="#595757" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shoujihaoshouji" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M849.408 973.824h-552.96c-41.472 0-75.776-33.28-75.776-74.752V25.088l-25.088 25.088h552.96c41.472 0 75.776 33.792 75.776 75.264v752.128c0 13.824 11.264 25.088 25.088 25.088s25.088-11.264 25.088-25.088v-752.64c0-69.12-56.32-124.928-125.952-124.928h-578.048V899.584c0 68.608 56.32 124.416 125.952 124.416h552.96c13.824 0 25.088-11.264 25.088-25.088s-11.264-25.088-25.088-25.088z m-523.776-795.648c0-13.312 10.752-23.552 24.064-23.552h337.408c13.312 0 24.064 10.752 24.064 23.552V752.64c0 13.312-10.752 23.552-24.064 23.552h-337.408c-13.312 0-24.064-10.752-24.064-23.552V178.176z m-48.128 0V752.64c0 39.424 32.256 71.68 72.192 71.68h337.408c39.936 0 72.192-32.256 72.192-71.68V178.176c0-39.424-32.256-71.68-72.192-71.68h-337.408c-39.936 0-72.192 32.256-72.192 71.68z m245.248 771.072c27.648 0 50.176-22.528 50.176-50.176s-22.528-50.176-50.176-50.176-50.176 22.528-50.176 50.176 22.528 50.176 50.176 50.176z m0-50.176z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tixian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M87 245.598c3.003-8.925 4.86-18.457 9.219-26.662 14.953-28.145 39.328-42.567 70.746-45.681 2.059-0.203 4.147-0.143 6.222-0.143 225.537-0.006 451.074-0.013 676.612 0.001 37.072 0.002 69.373 21.948 81.618 56.103 2.631 7.338 4.261 15.465 4.289 23.237 0.298 85.336 0.188 170.674 0.185 256.011 0 1.035 0.029 2.076-0.055 3.107-0.6 7.48-6.235 12.802-13.237 12.529-6.807-0.266-12.176-5.654-12.322-12.91-0.2-9.842-0.055-19.692-0.057-29.539v-5.964H112.742v6.453c0 69.962 0.37 139.927-0.181 209.886-0.222 28.203 20.52 52.127 48.515 57.432 4.213 0.799 8.579 1.111 12.874 1.113 114.325 0.059 228.651 0.039 342.975 0.092 3.07 0.002 6.283 0.213 9.182 1.121 5.897 1.844 8.999 7.602 8.096 13.975-0.779 5.498-5.545 9.939-11.283 10.457-1.202 0.107-2.42 0.043-3.631 0.043-115.363 0.002-230.726 0.025-346.089-0.012-36.872-0.01-68.823-21.793-81.528-55.65-2.038-5.43-3.139-11.211-4.672-16.828V245.598z m822.932 72.097c0.186-1.242 0.462-2.231 0.461-3.218-0.025-20.555 0.029-41.11-0.178-61.664-0.117-11.642-4.385-21.932-11.646-30.914-13.743-17.001-32.032-23.425-53.473-23.416-222.425 0.102-444.851 0.055-667.276 0.111-5.333 0.001-10.743 0.291-15.988 1.195-28.068 4.837-50.2 28.87-49.206 57.812 0.623 18.117 0.109 36.273 0.127 54.412 0.001 1.833 0.157 3.667 0.25 5.683l796.929-0.001zM112.994 449.253h796.972V344.018H112.994v105.235z" fill="" ></path>'+
      ''+
      '<path d="M935.894 681.662c3.576 85.008-70.181 170.688-171.379 169.307-92.274-1.26-168.122-77.98-167.04-172.426 1.037-90.447 77.487-166.609 169.62-166.256 103.269 0.397 172.493 87.82 168.799 169.375zM766.31 825.252c80.198 0.002 144.813-64.109 144.813-143.688 0-78.932-64.898-143.711-143.986-143.719-78.134-0.01-142.964 64.387-143.984 141.086-1.073 80.503 64.484 146.573 143.157 146.321zM297.166 639.668c-39.956 0-79.912 0.004-119.868-0.012-2.245 0-4.51 0.008-6.732-0.264-6.071-0.744-10.462-5.43-10.837-11.367-0.422-6.693 3.325-12.012 9.661-13.393 2.172-0.473 4.454-0.617 6.686-0.617 80.776-0.031 161.553-0.033 242.33 0.008 2.398 0 4.873 0.191 7.178 0.801 5.637 1.492 9.35 7.088 8.95 13.012-0.381 5.639-4.677 10.578-10.257 11.467-2.373 0.379-4.826 0.35-7.243 0.35-39.957 0.019-79.912 0.015-119.868 0.015z" fill="" ></path>'+
      ''+
      '<path d="M751.229 707.314c1.585-1.498 2.97-2.742 4.285-4.057 22.364-22.324 44.734-44.645 67.066-67.002 3.698-3.703 7.706-6.387 13.269-5.219 9.495 1.992 13.51 12.275 7.807 20.08-0.909 1.244-2.036 2.342-3.132 3.438-26.017 26-52.037 51.996-78.067 77.979-8.107 8.094-14.395 8.061-22.55-0.08-15.52-15.494-31.019-31.01-46.562-46.482-3.901-3.883-6.334-8.279-4.861-13.904 2.564-9.787 14.244-12.736 21.775-5.359 12.335 12.08 24.465 24.375 36.691 36.568 1.316 1.31 2.701 2.552 4.279 4.038z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
