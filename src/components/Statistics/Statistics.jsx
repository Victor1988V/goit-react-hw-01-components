import PropTypes from "prop-types";
import {
  Stats,
  StatList,
  StatsItem,
  StatsLabel,
  StatsPerc,
} from "./Statistics.styled";

export default function Statistics({ stats, title }) {
  return (
    <Stats>
      {title && <h2>{title}</h2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <StatsLabel>{label}</StatsLabel>
              <StatsPerc>{percentage}%</StatsPerc>
            </StatsItem>
          );
        })}
      </StatList>
    </Stats>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
