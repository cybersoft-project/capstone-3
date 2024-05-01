import Payment from '../../components/Payment/Payment'
import QuickBook from '../../components/QuickBook/QuickBook'
import Seat from '../../components/Seat/Seat'

const BookingPage = () => {
  return (
    <div>
      <QuickBook />
      <div className="grid grid-cols-12">
        <Seat />
        <Payment />
      </div>
    </div>
  )
}

export default BookingPage
