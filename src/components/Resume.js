import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import SmallTitle from '../components/SmallTitle';
import ResumeItem from '../components/ResumeItem';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const graduationCap = <SchoolIcon />;

  return (
    <ResumeStyle>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={'Work Experience'}/>
        </div>
        <div className="resume-content">
          <ResumeItem 
            year={'Apr 2019 - Current'}
            title={'Front-End Developer'}
            subtitle={'AQLighting Group'}
            list={<>
                    <li>Created new components and features to improve UI/UX Design</li>
                    <li>Improvements on UI design for both desktop and mobile applications</li>
                    <li>Identified and corrected any website errors negatively impacting User Experience</li>
                    <li>Management of product pages and product inventory across all sales channels such as BigCommerce, Amazon, Walmart, Wayfair, and Houzz</li>
                    <li>Utilized Google Analytics to analyze success rates of Google Ads and SEO Strategies and used data to maintain rankings on top selling products and improve rankings on underperforming products</li>
                  </>}
          />          
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={graduationCap} title={'Education'} /> 
        </div>
        <div className="resume-content">
          <ResumeItem
            year={'Jun 2019- May 2021'}
            title={'California State University, Northridge'}
            subtitle={'Northridge, California'}
            list={<>
                    <li>Bachelors of Science in Computer Science</li>
                  </>}
          />           
          <ResumeItem 
            year={'Jan 2015- Dec 2018'}
            title={'College of the Canyons'}
            subtitle={'Santa Clarita, California'}
            list={<>
                    <li>Associates of Science in Computer Science for Transfer</li>
                    <li>Associates of Science in Mathematics for Transfer</li>
                    <li>Associates of Science in Physics for Transfer</li>
                    <li>Associates of Science in Mathematics</li>
                    <li>Associate of Arts in Liberal Arts &amp; Sciences</li>
                  </>}
          />
        </div>
      </InnerLayout>
    </ResumeStyle>
  )
}

const ResumeStyle = styled.div`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;