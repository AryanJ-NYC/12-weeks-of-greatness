import Navbar from '../components/Navbar';

const Page: React.SFC<{}> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Page;
