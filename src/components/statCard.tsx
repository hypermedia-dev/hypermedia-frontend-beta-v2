import React from 'react';


export interface CardType{
  metric: string, 
  stat: number, 
  unit: string, 
  widthClass?: string
}
const Card = ({ metric, stat, unit, widthClass }:CardType) => (
    <div className={`h-38 bg-white shadow-md rounded-lg text-center p-8 flex flex-col justify-center items-center ${widthClass}`}>
      <h3 className="text-4xl font-bold text-[#1570EF]">{stat + unit}</h3>
      <p className="text-gray-500">{metric}</p>
    </div>
  );
  
  const StatisticsCards = React.memo(({stats}:{stats: CardType[]}) => {
    if (!stats || stats.length < 2) return null;
  
    const [firstStat, secondStat, thirdStat, fourthStat] = stats;
  
    return (
      <>
        <div className="flex gap-4 mb-2">
          <Card metric={firstStat.metric} stat={firstStat.stat} unit={firstStat.unit} widthClass="w-2/5" />
          <Card metric={secondStat.metric} stat={secondStat.stat} unit={secondStat.unit} widthClass="w-3/5" />
        </div>
        <div className="flex gap-4 mt-2">
          <Card metric={thirdStat.metric} stat={thirdStat.stat} unit={thirdStat.unit} widthClass="w-3/5" />
          <Card metric={fourthStat.metric} stat={fourthStat.stat} unit={fourthStat.unit} widthClass="w-2/5" />
        </div>
      </>
    );
  });

StatisticsCards.displayName = 'StatisticsCards';
export default StatisticsCards;
