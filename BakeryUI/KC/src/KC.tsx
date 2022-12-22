// @ts-nocheck
import AnalyticsPage from "./AnalyticsPage";
//@ts-ignore
import SearchBar from "shared/SearchBar";

export default function KC() {
  const devices = [
    { name: "Device 1", id: "123", status: "Online", location: "Room 1" },
    { name: "Device 2", id: "456", status: "Offline", location: "Room 2" },
    { name: "Device 3", id: "789", status: "Online", location: "Room 3" },
  ];
  return (
    <div>
      <div class="container mx-auto">
        <div class="container mx-auto">
          <h1 className="text-3xl font-bold font-serif p-3">Knox Configure</h1>
          <SearchBar />
        </div>
        <div class="container gap-10 mb-10">
          <div class="max-w-xlg rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4 bg-indigo-100 ">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        <AnalyticsPage />
      </div>
    </div>
  );
}
