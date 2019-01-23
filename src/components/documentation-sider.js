import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Layout, Menu } from 'antd';
import styles from './documentation.module.css';

const { Sider } = Layout;
const { SubMenu, Item, ItemGroup } = Menu;

class DocumentationSider extends Component {
  componentDidMount() {
    document.getElementById('sider-menu').scrollTop = sessionStorage.getItem(
      'siderScroll',
    );
  }

  setScroll() {
    sessionStorage.setItem(
      'siderScroll',
      document.getElementById('sider-menu').scrollTop,
    );
  }

  render() {
    const { node } = this.props;
    return (
      <Sider
        width="100%"
        className={styles.sider}
        style={{ background: '#fff' }}
      >
        <Menu
          id="sider-menu"
          className={styles.sider}
          mode="inline"
          defaultOpenKeys={[
            'foodAccess',
            'livelihoods',
            'wash',
            'health',
            'nutrition',
            'mortality',
          ]}
          defaultSelectedKeys={[node.key]}
        >
          <SubMenu key="foodAccess" title={<span>A.1. Food Access</span>}>
            <Item key="hhs">
              <Link onClick={this.setScroll} to="/documentation/hhs/">
                Household Hunger
              </Link>
            </Item>
            <Item key="fcs">
              <Link onClick={this.setScroll} to="/documentation/fcs/">
                Food Consumption
              </Link>
            </Item>
            <Item key="hdds">
              <Link onClick={this.setScroll} to="/documentation/hdds/">
                Household Diet Diversity
              </Link>
            </Item>
            <Item key="hunger-shock">
              <Link onClick={this.setScroll} to="/documentation/hunger-shock/">
                Hunger Shock
              </Link>
            </Item>
            <Item key="wild-food-sick">
              <Link
                onClick={this.setScroll}
                to="/documentation/wild-food-sick/"
              >
                Wild Food Sick
              </Link>
            </Item>
            <Item key="wild-food-meals">
              <Link
                onClick={this.setScroll}
                to="/documentation/wild-food-meals/"
              >
                Wild Food Meals
              </Link>
            </Item>
            <Item key="food-no-access">
              <Link
                onClick={this.setScroll}
                to="/documentation/food-no-access/"
              >
                Inadequate Food Access
              </Link>
            </Item>
          </SubMenu>
          <SubMenu key="livelihoods" title={<span>A.2. Livelihoods</span>}>
            <ItemGroup
              key="Agriculture"
              title={<span>A.2.a. Agriculture</span>}
            >
              <Item key="crop-production">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/crop-production/"
                >
                  Crop Production
                </Link>
              </Item>
              <Item key="agriculture-no-access">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/agriculture-no-access/"
                >
                  Agricultural Access
                </Link>
              </Item>
              <Item key="fall-army-worm">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/fall-army-worm/"
                >
                  Fall Army Worm
                </Link>
              </Item>
            </ItemGroup>
            <ItemGroup key="Livestock" title={<span>A.2.b. Livestock</span>}>
              <Item key="livestock-no-access">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/livestock-no-access/"
                >
                  Livestock Access
                </Link>
              </Item>
              <Item key="livestock-disease-fao">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/livestock-disease-fao/"
                >
                  Livestock Disease (FAO)
                </Link>
              </Item>
              <Item key="livestock-disease-aok">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/livestock-disease-aok/"
                >
                  Livestock Disease (AoK)
                </Link>
              </Item>
              <Item key="livestock-disease-shock">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/livestock-disease-shock/"
                >
                  Livestock Disease Shock
                </Link>
              </Item>
            </ItemGroup>
            <ItemGroup key="Markets" title={<span>A.2.c. Markets</span>}>
              <Item key="markets-no-access">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/markets-no-access/"
                >
                  Market Access
                </Link>
              </Item>
              <Item key="cereal-shock">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/cereal-shock/"
                >
                  Cereal Price Shock
                </Link>
              </Item>
              <Item key="prices-sorghum">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/prices-sorghum/"
                >
                  Sorghum Prices
                </Link>
              </Item>
              <Item key="prices-beans">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/prices-beans/"
                >
                  Field Bean Prices
                </Link>
              </Item>
              <Item key="terms-of-trade-goat">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/terms-of-trade-goat/"
                >
                  Terms of Trade (Goat)
                </Link>
              </Item>
              <Item key="terms-of-trade-wage">
                <Link
                  onClick={this.setScroll}
                  to="/documentation/terms-of-trade-wage/"
                >
                  Terms of Trade (Wages)
                </Link>
              </Item>
            </ItemGroup>
            <ItemGroup key="Climate" title={<span>A.2.d. Climate</span>}>
              <Item key="ndvi">
                <Link onClick={this.setScroll} to="/documentation/ndvi/">
                  NDVI
                </Link>
              </Item>
              <Item key="rainfall">
                <Link onClick={this.setScroll} to="/documentation/rainfall/">
                  Rainfall
                </Link>
              </Item>
            </ItemGroup>
            <ItemGroup key="Coping" title={<span>A.2.e. Coping</span>}>
              <Item key="lcs">
                <Link onClick={this.setScroll} to="/documentation/lcs/">
                  Livelihood Coping
                </Link>
              </Item>
            </ItemGroup>
          </SubMenu>
          <SubMenu key="wash" title={<span>B. WASH</span>}>
            <Item key="ctsw">
              <Link onClick={this.setScroll} to="/documentation/ctsw/">
                Clean Water
              </Link>
            </Item>
            <Item key="open-defecation">
              <Link
                onClick={this.setScroll}
                to="/documentation/open-defecation/"
              >
                Open Defecation
              </Link>
            </Item>
            <Item key="clean-water-no-access">
              <Link
                onClick={this.setScroll}
                to="/documentation/clean-water-no-access/"
              >
                Clean Water Access
              </Link>
            </Item>
            <Item key="latrine-no-usage">
              <Link
                onClick={this.setScroll}
                to="/documentation/latrine-no-usage/"
              >
                Latrine Usage
              </Link>
            </Item>
            <Item key="awd">
              <Link onClick={this.setScroll} to="/documentation/awd/">
                Acute Watery Diarrhoea
              </Link>
            </Item>
            <Item key="cholera">
              <Link onClick={this.setScroll} to="/documentation/cholera/">
                Cholera
              </Link>
            </Item>
            <Item key="malaria">
              <Link onClick={this.setScroll} to="/documentation/malaria/">
                Malaria
              </Link>
            </Item>
          </SubMenu>
          <SubMenu key="health" title={<span>C. Health</span>}>
            <Item key="measles">
              <Link onClick={this.setScroll} to="/documentation/measles/">
                Measles
              </Link>
            </Item>
            <Item key="ebola">
              <Link onClick={this.setScroll} to="/documentation/ebola/">
                Ebola
              </Link>
            </Item>
          </SubMenu>
          <SubMenu key="nutrition" title={<span>D. Nutrition</span>}>
            <Item key="whz-gam">
              <Link onClick={this.setScroll} to="/documentation/whz-gam/">
                GAM (WHZ)
              </Link>
            </Item>
            <Item key="whz-sam">
              <Link onClick={this.setScroll} to="/documentation/whz-sam/">
                SAM (WHZ)
              </Link>
            </Item>
            <Item key="muac">
              <Link onClick={this.setScroll} to="/documentation/muac/">
                Proxy GAM (MUAC)
              </Link>
            </Item>
            <Item key="new-admissions-3-year">
              <Link
                onClick={this.setScroll}
                to="/documentation/new-admissions-3-year/"
              >
                New Admissions (3-year)
              </Link>
            </Item>
            <Item key="new-admissions-3-month">
              <Link
                onClick={this.setScroll}
                to="/documentation/new-admissions-3-month/"
              >
                New Admissions (3-month)
              </Link>
            </Item>
            <Item key="new-admissions-3-month-trend">
              <Link
                onClick={this.setScroll}
                to="/documentation/new-admissions-3-month-trend/"
              >
                New Admissions (3-month trend)
              </Link>
            </Item>
            <Item key="new-admissions-site">
              <Link
                onClick={this.setScroll}
                to="/documentation/new-admissions-site/"
              >
                New Admissions per site
              </Link>
            </Item>
            <Item key="malnourished">
              <Link onClick={this.setScroll} to="/documentation/malnourished/">
                Perception of Malnourishment
              </Link>
            </Item>
          </SubMenu>
          <SubMenu key="mortality" title={<span>E. Mortality</span>}>
            <Item key="cdr">
              <Link onClick={this.setScroll} to="/documentation/cdr/">
                Crude Death Rate
              </Link>
            </Item>
            <Item key="u5cdr">
              <Link onClick={this.setScroll} to="/documentation/u5cdr/">
                Under 5 Crude Death Rate
              </Link>
            </Item>
            <Item key="mortality-increase">
              <Link
                onClick={this.setScroll}
                to="/documentation/mortality-increase/"
              >
                Mortality Increase
              </Link>
            </Item>
          </SubMenu>
          <Item key="dummy-1" />
          <Item key="dummy-2" />
        </Menu>
      </Sider>
    );
  }
}

export default DocumentationSider;
