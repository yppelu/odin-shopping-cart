import './HomePageNavigation.css';

export default function HomePageNavigation() {
  return (
    <nav className='home-page__navigation-block'>
      <h2 className='home-page_navigation-title'>Quick Navigation</h2>
      <ul className='home-page__navigation-list'>
        <li className='home-page__navigation-list-item'>
          <a className='home-page__navigation-link' href=''>
            <svg
              className='home-page__navigation-link-icon'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M440.88,129.37,288.16,40.62a64.14,64.14,0,0,0-64.33,0L71.12,129.37a4,4,0,0,0,0,6.9L254,243.85a4,4,0,0,0,4.06,0L440.9,136.27A4,4,0,0,0,440.88,129.37ZM256,152c-13.25,0-24-7.16-24-16s10.75-16,24-16,24,7.16,24,16S269.25,152,256,152Z'></path><path d='M238,270.81,54,163.48a4,4,0,0,0-6,3.46V340.86a48,48,0,0,0,23.84,41.39L234,479.48a4,4,0,0,0,6-3.46V274.27A4,4,0,0,0,238,270.81ZM96,368c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S104.84,368,96,368Zm96-32c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S200.84,336,192,336Z'></path><path d='M458,163.51,274,271.56a4,4,0,0,0-2,3.45V476a4,4,0,0,0,6,3.46l162.15-97.23A48,48,0,0,0,464,340.86V167A4,4,0,0,0,458,163.51ZM320,424c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,424,320,424Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S328.84,336,320,336Zm96,32c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,368,416,368Zm0-88c-8.84,0-16-10.75-16-24s7.16-24,16-24,16,10.75,16,24S424.84,280,416,280Z' />
            </svg>
            Play Dice
          </a>
        </li>
        <li className='home-page__navigation-list-item'>
          <a className='home-page__navigation-link' href=''>
            <svg
              className='home-page__navigation-link-icon'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z' />
            </svg>
            Last 30 Days
          </a>
        </li>
        <li className='home-page__navigation-list-item'>
          <a className='home-page__navigation-link' href=''>
            <svg
              className='home-page__navigation-link-icon'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M12,7.09L14.45,8.58L13.8,5.77L16,3.89L13.11,3.64L12,1L10.87,3.64L8,3.89L10.18,5.77L9.5,8.58L12,7.09M4,13.09L6.45,14.58L5.8,11.77L8,9.89L5.11,9.64L4,7L2.87,9.64L0,9.89L2.18,11.77L1.5,14.58L4,13.09M20,10.09L22.45,11.58L21.8,8.77L24,6.89L21.11,6.64L20,4L18.87,6.64L16,6.89L18.18,8.77L17.5,11.58L20,10.09M15,23H9V10H15V23M7,23H1V17H7V23M23,23H17V13H23V23Z' />
            </svg>
            Popular in 2023
          </a>
        </li>
        <li className='home-page__navigation-list-item'>
          <a className='home-page__navigation-link' href=''>
            <svg
              className='home-page__navigation-link-icon'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z' />
            </svg>
            Best of the Year
          </a>
        </li>
        <li className='home-page__navigation-list-item'>
          <a className='home-page__navigation-link' href=''>
            <svg
              className='home-page__navigation-link-icon'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z' />
            </svg>
            All Time Top
          </a>
        </li>
      </ul>
    </nav>
  );
}
