// import React from "react";
// // import pic from "./logo.png";
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   Image,
//   Canvas,
// } from "@react-pdf/renderer";

// const styles = StyleSheet?.create({
//   page: {
//     flexDirection: "column",
//   },
//   image: {
//     width: "50%",
//     padding: 10,
//   },
//   centerImage: {
//     alignItems: "center",
//     flexGrow: 1,
//   },
//   text: {
//     width: "100%",
//     backgroundColor: "#f0f0f0",
//     paddingHorizontal: 50,
//     paddingVertical: 10,
//     fontSize: 10,
//     color: "#212121",
//   },
//   qrcode: {
//     width: "20%",
//     height: "100px",
//     textAlign: "center",
//   },
// });

// const PdfDocument = ({ imageUrls }) => {
//   let canvas = 0;
//   return (
//     <Document>
//       <Page style={StyleSheet.wrapper}>
//         <View>
//           <View>
//             <View style={styles.centerImage}>
//               {/* <Image style={styles.image} src={pic} /> */}
//             </View>
//           </View>
//         </View>
//         {/* {peoples &&
//           peoples.map((peo) => {
//             return ( */}
//         <View class="Booking-Complete-person-data-box">
//           <View class="Booking-Complete-person-data-box-header">
//             <Text style={styles.text}>
//               Patient Name :{" "}
//               <Text>
//                 {/* {peo.firstName} {peo.lastName} */}
//                 firstName lastName
//               </Text>
//             </Text>
//             <Text style={styles.text}>
//               Booking Refrence ID: <Text>
//                 {/* {peo.referenceId} */}
//                 referenceId
//               </Text>
//             </Text>
//             <Image
//               style={styles.qrcode}
//               source={{ uri: imageUrls[canvas++] }}
//             />
//             <Text style={styles.text}>
//               Please have you photo ID present at the appointment as we
//               will be required to take a photo of it. We will not be able
//               to issue your test results without taking photo ID
//             </Text>
//           </View>
//         </View>
//         {/* );
//           })} */}
//       </Page>
//     </Document>
//   );
// };

// export default PdfDocument;