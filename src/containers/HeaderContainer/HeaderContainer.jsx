import './HeaderContainer.scss';
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile';
import PageTitle from '../../components/PageTitle/PageTitle';
import PathwayHeader from '../../components/PathwayHeader/PathwayHeader';
const HeaderContainer = () => {
  return (
    <div className='header-container'>
        <div className='header-container__top'>
            <PathwayHeader/>
            <HeaderProfile/> 
        </div>
        <PageTitle className="page-title--large"/>
    </div>
  )
}

export default HeaderContainer