export const gamesPageNavigationControls = [
  {
    title: 'New Releases',
    listItems: [
      {
        title: 'Last 30 Days',
        icon:
          <svg
            className='games-page__navigation-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z' />
          </svg>
      },
      {
        title: 'This Week',
        icon:
          <svg
            className='games-page__navigation-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M17.3849 9.11137C17.1057 8.77803 16.7658 8.48913 16.4501 8.20023C15.6367 7.53355 14.714 7.05576 13.937 6.35574C12.128 4.73347 11.7274 2.05561 12.8807 0C11.7274 0.255563 10.7197 0.833357 9.85773 1.46671C6.71331 3.77789 5.47496 7.85578 6.95612 11.3559C7.00468 11.467 7.05324 11.5781 7.05324 11.7226C7.05324 11.967 6.87113 12.1892 6.62832 12.2781C6.34909 12.3892 6.05771 12.3226 5.82704 12.1448C5.7542 12.0892 5.70563 12.0337 5.65707 11.9559C4.28518 10.367 4.06665 8.08912 4.98934 6.26685C2.96185 7.778 1.85705 10.3336 2.01488 12.7448C2.08772 13.3004 2.16057 13.856 2.36696 14.4115C2.53693 15.0782 2.86472 15.7449 3.22894 16.3338C4.54013 18.2561 6.81043 19.6339 9.2507 19.9117C11.8488 20.2117 14.629 19.7783 16.6201 18.1339C18.8418 16.2894 19.6188 13.3337 18.4776 10.8003L18.3198 10.5114C18.0648 10.0003 17.3849 9.11137 17.3849 9.11137ZM13.5485 16.1116C13.2085 16.3782 12.6501 16.6671 12.213 16.7783C10.8533 17.2227 9.49351 16.6005 8.69223 15.8671C10.137 15.556 10.9989 14.5782 11.2539 13.5893C11.4603 12.7004 11.0718 11.967 10.914 11.1114C10.7683 10.2892 10.7926 9.58916 11.1204 8.82247C11.351 9.24471 11.5938 9.66694 11.8852 10.0003C12.82 11.1114 14.2891 11.6003 14.6047 13.1115C14.6533 13.267 14.6776 13.4226 14.6776 13.5893C14.714 14.5004 14.2769 15.5004 13.5485 16.1116Z' />
          </svg>
      },
      {
        title: 'Next Week',
        icon:
          <svg
            className='games-page__navigation-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M0 1V23L10.5 12M21 1V23H24V1M10.5 1V23L21 12' />
          </svg>
      }
    ]
  },
  {
    title: 'Top',
    listItems: [
      {
        title: 'Best of the Year',
        icon:
          <svg
            className='games-page__navigation-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M19.2 0C18.12 0 16.8 1.2 16.8 2.4H7.2C7.2 1.2 5.88 0 4.8 0H0V10.8C0 12 1.2 13.2 2.4 13.2H5.04C5.52 15.6 7.08 17.64 10.8 18V20.496C7.2 21.048 7.2 24 7.2 24H16.8C16.8 24 16.8 21.048 13.2 20.496V18C16.92 17.64 18.48 15.6 18.96 13.2H21.6C22.8 13.2 24 12 24 10.8V0H19.2ZM4.8 10.8H2.4V2.4H4.8V10.8ZM21.6 10.8H19.2V2.4H21.6V10.8Z' />
          </svg>
      },
      {
        title: 'Popular in 2023',
        icon:
          <svg
            className='games-page__navigation-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M12,7.09L14.45,8.58L13.8,5.77L16,3.89L13.11,3.64L12,1L10.87,3.64L8,3.89L10.18,5.77L9.5,8.58L12,7.09M4,13.09L6.45,14.58L5.8,11.77L8,9.89L5.11,9.64L4,7L2.87,9.64L0,9.89L2.18,11.77L1.5,14.58L4,13.09M20,10.09L22.45,11.58L21.8,8.77L24,6.89L21.11,6.64L20,4L18.87,6.64L16,6.89L18.18,8.77L17.5,11.58L20,10.09M15,23H9V10H15V23M7,23H1V17H7V23M23,23H17V13H23V23Z' />
          </svg>
      },
      {
        title: 'All Time Top 250',
        icon:
          <svg
            className='games-page__navigation-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M2.66667 17.5L0 2.375L7.33333 9.25L12 1L16.6667 9.25L24 2.375L21.3333 17.5H2.66667ZM21.3333 21.625C21.3333 22.45 20.8 23 20 23H4C3.2 23 2.66667 22.45 2.66667 21.625V20.25H21.3333V21.625Z' />
          </svg>
      }
    ]
  }
];
