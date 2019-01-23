import React from 'react';
import { Link } from 'gatsby';
import { Layout, Menu } from 'antd';
import styles from './documentation.module.css';

const { Sider } = Layout;
const { SubMenu, Item, ItemGroup } = Menu;

const DocumentationSider = ({ node }) => (
  <Sider width="100%" className={styles.sider} style={{ background: '#fff' }}>
    <Menu
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
      style={{ height: '100%' }}
    >
      <SubMenu key="foodAccess" title={<span>A.1. Food Access</span>}>
        <Item key="hhs">
          <Link to="/documentation/hhs/">Household Hunger</Link>
        </Item>
        <Item key="fcs">
          <Link to="/documentation/fcs/">Food Consumption</Link>
        </Item>
        <Item key="hdds">
          <Link to="/documentation/hdds/">Household Diet Diversity</Link>
        </Item>
        <Item key="hunger-shock">
          <Link to="/documentation/hunger-shock/">Hunger Shock</Link>
        </Item>
        <Item key="wild-food-sick">
          <Link to="/documentation/wild-food-sick/">Wild Food Sick</Link>
        </Item>
        <Item key="wild-food-meals">
          <Link to="/documentation/wild-food-meals/">Wild Food Meals</Link>
        </Item>
        <Item key="food-no-access">
          <Link to="/documentation/food-no-access/">
            Inadequate Food Access
          </Link>
        </Item>
      </SubMenu>
      <SubMenu key="livelihoods" title={<span>A.2. Livelihoods</span>}>
        <ItemGroup key="Agriculture" title={<span>A.2.a. Agriculture</span>}>
          <Item key="crop-production">
            <Link to="/documentation/crop-production/">Crop Production</Link>
          </Item>
          <Item key="agriculture-no-access">
            <Link to="/documentation/agriculture-no-access/">
              Agricultural Access
            </Link>
          </Item>
          <Item key="fall-army-worm">
            <Link to="/documentation/fall-army-worm/">Fall Army Worm</Link>
          </Item>
        </ItemGroup>
        <ItemGroup key="Livestock" title={<span>A.2.b. Livestock</span>}>
          <Item key="livestock-no-access">
            <Link to="/documentation/livestock-no-access/">
              Livestock Access
            </Link>
          </Item>
          <Item key="livestock-disease-fao">
            <Link to="/documentation/livestock-disease-fao/">
              Livestock Disease (FAO)
            </Link>
          </Item>
          <Item key="livestock-disease-aok">
            <Link to="/documentation/livestock-disease-aok/">
              Livestock Disease (AoK)
            </Link>
          </Item>
          <Item key="livestock-disease-shock">
            <Link to="/documentation/livestock-disease-shock/">
              Livestock Disease Shock
            </Link>
          </Item>
        </ItemGroup>
        <ItemGroup key="Markets" title={<span>A.2.c. Markets</span>}>
          <Item key="markets-no-access">
            <Link to="/documentation/markets-no-access/">Market Access</Link>
          </Item>
          <Item key="cereal-shock">
            <Link to="/documentation/cereal-shock/">Cereal Price Shock</Link>
          </Item>
          <Item key="prices-sorghum">
            <Link to="/documentation/prices-sorghum/">Sorghum Prices</Link>
          </Item>
          <Item key="prices-beans">
            <Link to="/documentation/prices-beans/">Field Bean Prices</Link>
          </Item>
          <Item key="terms-of-trade-goat">
            <Link to="/documentation/terms-of-trade-goat/">
              Terms of Trade (Goat)
            </Link>
          </Item>
          <Item key="terms-of-trade-wage">
            <Link to="/documentation/terms-of-trade-wage/">
              Terms of Trade (Wages)
            </Link>
          </Item>
        </ItemGroup>
        <ItemGroup key="Climate" title={<span>A.2.d. Climate</span>}>
          <Item key="ndvi">
            <Link to="/documentation/ndvi/">NDVI</Link>
          </Item>
          <Item key="rainfall">
            <Link to="/documentation/rainfall/">Rainfall</Link>
          </Item>
        </ItemGroup>
        <ItemGroup key="Coping" title={<span>A.2.e. Coping</span>}>
          <Item key="lcs">
            <Link to="/documentation/lcs/">Livelihood Coping</Link>
          </Item>
        </ItemGroup>
      </SubMenu>
      <SubMenu key="wash" title={<span>B. WASH</span>}>
        <Item key="ctsw">
          <Link to="/documentation/ctsw/">Clean Water</Link>
        </Item>
        <Item key="open-defecation">
          <Link to="/documentation/open-defecation/">Open Defecation</Link>
        </Item>
        <Item key="clean-water-no-access">
          <Link to="/documentation/clean-water-no-access/">
            Clean Water Access
          </Link>
        </Item>
        <Item key="latrine-no-usage">
          <Link to="/documentation/latrine-no-usage/">Latrine Usage</Link>
        </Item>
        <Item key="awd">
          <Link to="/documentation/awd/">Acute Watery Diarrhoea</Link>
        </Item>
        <Item key="cholera">
          <Link to="/documentation/cholera/">Cholera</Link>
        </Item>
        <Item key="malaria">
          <Link to="/documentation/malaria/">Malaria</Link>
        </Item>
      </SubMenu>
      <SubMenu key="health" title={<span>C. Health</span>}>
        <Item key="measles">
          <Link to="/documentation/measles/">Measles</Link>
        </Item>
        <Item key="ebola">
          <Link to="/documentation/ebola/">Ebola</Link>
        </Item>
      </SubMenu>
      <SubMenu key="nutrition" title={<span>D. Nutrition</span>}>
        <Item key="whz-gam">
          <Link to="/documentation/whz-gam/">GAM (WHZ)</Link>
        </Item>
        <Item key="whz-sam">
          <Link to="/documentation/whz-sam/">SAM (WHZ)</Link>
        </Item>
        <Item key="muac">
          <Link to="/documentation/muac/">Proxy GAM (MUAC)</Link>
        </Item>
        <Item key="new-admissions-3-year">
          <Link to="/documentation/new-admissions-3-year/">
            New Admissions (3-year)
          </Link>
        </Item>
        <Item key="new-admissions-3-month">
          <Link to="/documentation/new-admissions-3-month/">
            New Admissions (3-month)
          </Link>
        </Item>
        <Item key="new-admissions-3-month-trend">
          <Link to="/documentation/new-admissions-3-month-trend/">
            New Admissions (3-month trend)
          </Link>
        </Item>
        <Item key="new-admissions-site">
          <Link to="/documentation/new-admissions-site/">
            New Admissions per site
          </Link>
        </Item>
        <Item key="malnourished">
          <Link to="/documentation/malnourished/">
            Perception of Malnourishment
          </Link>
        </Item>
      </SubMenu>
      <SubMenu key="mortality" title={<span>E. Mortality</span>}>
        <Item key="cdr">
          <Link to="/documentation/cdr/">Crude Death Rate</Link>
        </Item>
        <Item key="u5cdr">
          <Link to="/documentation/u5cdr/">Under 5 Crude Death Rate</Link>
        </Item>
        <Item key="mortality-increase">
          <Link to="/documentation/mortality-increase/">
            Mortality Increase
          </Link>
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default DocumentationSider;
