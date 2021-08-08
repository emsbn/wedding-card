import { Box, Divider } from '@material-ui/core';
import { Container, Header, Month, Day, Sat, Sun, WeddingDay, Row } from './styles';

const Calendar = () => {
  return (
    <Container>
      <Header>
        <span>
          <Month>9</Month>월 <Month>12</Month>일
        </span>
        <span>일요일 낮 12:00</span>
      </Header>
      <Divider />
      <Box my={1} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
        <Row display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Day />
          <Day />
          <Day />
          <Day>1</Day>
          <Day>2</Day>
          <Day>3</Day>
          <Sat>4</Sat>
        </Row>
        <Row display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Sun>5</Sun>
          <Day>6</Day>
          <Day>7</Day>
          <Day>8</Day>
          <Day>9</Day>
          <Day>10</Day>
          <Sat>11</Sat>
        </Row>
        <Row display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <WeddingDay>12</WeddingDay>
          <Day>13</Day>
          <Day>14</Day>
          <Day>15</Day>
          <Day>16</Day>
          <Day>17</Day>
          <Sat>18</Sat>
        </Row>
        <Row display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Sun>19</Sun>
          <Day>20</Day>
          <Day>21</Day>
          <Day>22</Day>
          <Day>23</Day>
          <Day>24</Day>
          <Sat>25</Sat>
        </Row>
        <Row display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Sun>26</Sun>
          <Day>27</Day>
          <Day>28</Day>
          <Day>29</Day>
          <Day>30</Day>
          <Day />
          <Day />
        </Row>
      </Box>
    </Container>
  );
};

export default Calendar;
