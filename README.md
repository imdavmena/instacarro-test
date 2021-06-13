# instacarro-test

Instacarro Software Developer recruitment test.  
Task:  
Use the provided json payload to create the listings view of our custom auction  platform.  
Json Fields:  
{  
 id: string, // Unique identifier of the car., 
 make: string, // Make of the car 
 model: string, // Model of the car 
 year: int, // Year of the car 
 version: string, // Version of the car 
 km: int, // Car kilometers 
 remainingTime: int, // Number of remaining milliseconds remaining in the auction.  imageUrl: string, // Car Image url 
 bids: BidsObject[], //: An array of the current bids in the car 
}  
// BidsObject 
{  
 amount: int, // Integer representing bid amount 
 dealership: string, // String representing dealer that made the offer  createdAt: string, // ISODate representing the date of the request  channel: string, // Either ‘Web’ or ‘Mobile’ 
}  
Acceptance Criteria:  
- Develop the provided solution using ReactJS. create-react-app is the preferred  method to kickstart your project but is not required.  
- Use vanilla css. No css frameworks are allowed (Usage of flexbox is a plus).  - Remaining Time must decrease every second for each auction.  - When clicking Fazer Oferta, a new bid must be added (with the amount equal to  current amount + R$250) and reflected in the view.  
- Auctions must be sorted by remaining time (ascendent).  
Assumptions:  
- If an auction doesn't have bids, the initial amount must be 0
