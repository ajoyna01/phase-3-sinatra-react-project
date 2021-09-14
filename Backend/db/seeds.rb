puts "🌱 Scooping flavs..."
Icecream.destroy_all



ic1 = Icecream.create(
  brand: "Keto",
  imgURL: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSccdC2jRWah1x2-Ims4WAkTG91XocSYWqF_qvwkN7mTrMb_mafMdSAbpb4TPhxqDNTZdNnQ_JjOrbzr-VwS3YeD8x818ZJ",
  flavor: "Sea Salt Caramel"
)

ic2 = Icecream.create(
  brand: "Rebel",
  imgURL: "https://target.scene7.com/is/image/Target/GUEST_586fccd5-2847-4e17-8ca1-9de1aff1b55d?wid=325&hei=325&qlt=80&fmt=webp",
  flavor: "Triple Chocolate"
)

ic3 = Icecream.create(
  brand: "Enlightened",
  imgURL: "https://cdn.shopify.com/s/files/1/0255/2892/6288/products/Pint-Render-1000px-Keto-P.B.-Cookie-and-Brownie-Dough_720x.png?v=1620680206",
  flavor: "P.B. Cookie & Brownie Dough"
)

puts "✅ Done scooping!"
