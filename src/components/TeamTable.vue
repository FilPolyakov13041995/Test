<template>
  <section class="mx-7 bg-white rounded-xl p-4 mb-7">
    <div
      class="bg-team-table rounded-xl text-blue-custom font-medium px-4 h-16 gap-2 grid grid-cols-8 mb-3"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <SearchTableVue />
          <p class="text-xs font-medium">Business Name</p>
          <div class="flex flex-col gap-1">
            <ArrowTopVue />
            <ArrowBottomVue />
          </div>
        </div>
        <div class="border-x border-slate-200 h-full"></div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <CrossVue />
          <p class="text-xs font-medium pr-2">Team</p>
          <div class="flex flex-col gap-1">
            <ArrowTopVue />
            <ArrowBottomBlueVue />
          </div>
        </div>
        <div class="flex-grow"></div>
        <DropDownBtn class="bg-white mr-4" />
        <div class="border-x border-slate-200 h-full"></div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <CrossVue />
          <p class="text-xs font-medium pr-2">Role</p>
          <div class="flex flex-col gap-1">
            <ArrowTopVue />
            <ArrowBottomVue />
          </div>
        </div>
        <div class="flex-grow"></div>
        <DropDownBtn class="bg-white mr-4" />
        <div class="border-x border-slate-200 h-full"></div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <SearchTableVue />
          <p class="text-xs font-medium">Gmail</p>
          <div class="flex flex-col gap-1">
            <ArrowTopVue />
            <ArrowBottomVue />
          </div>
        </div>
        <div class="border-x border-slate-200 h-full"></div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <CrossVue />
          <p class="text-xs font-medium pr-2">Birthday</p>
          <div class="flex flex-col gap-1">
            <ArrowTopVue />
            <ArrowBottomVue />
          </div>
        </div>
        <div class="flex-grow"></div>
        <DropDownBtn class="bg-white mr-4" />
        <div class="border-x border-slate-200 h-full"></div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <p class="text-xs font-medium pr-2">Telegram</p>
          <div class="flex flex-col gap-1">
            <ArrowTopVue />
            <ArrowBottomVue />
          </div>
        </div>
        <div class="flex-grow"></div>
        <DropDownBtn class="bg-white mr-4" />
        <div class="border-x border-slate-200 h-full"></div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <p class="text-xs font-medium pr-2">Last Login</p>
          <div class="flex flex-col gap-1">
            <ArrowTopVue />
            <ArrowBottomVue />
          </div>
        </div>
        <div class="flex-grow"></div>
        <DropDownBtn class="bg-white mr-4" />
        <div class="border-x border-slate-200 h-full"></div>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <p class="text-xs font-medium pr-2">User permissions</p>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-8 grid-row-9 items-center gap-5 px-4 py-3 text-sm text-blue-custom"
      v-for="user in team"
      :key="user.id"
      :class="{ 'border-b border-slate-100': user.id !== team.length }"
    >
      <div class="flex items-center gap-3">
        <img
          :src="require(`../assets/images/${user.photo}`)"
          class="w-9 h-9 rounded-xl"
          alt="Photo of user"
        />
        <p>{{ user.name }}</p>
      </div>
      <p>{{ user.team }}</p>
      <p>{{ user.role }}</p>
      <p>{{ user.gmail }}</p>
      <p>{{ user.birthday }}</p>
      <p>{{ user.telegram }}</p>
      <p>{{ user.lastLogin }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2 border p-2.5 w-20 rounded-xl">
          <EditVue />
          <p>Edit</p>
        </div>
        <CardVue />
      </div>
    </div>
  </section>
</template>

<script>
import ArrowTopVue from "./icons/ArrowTop.vue";
import ArrowBottomVue from "./icons/ArrowBottom.vue";
import CrossVue from "./icons/Cross.vue";
import ArrowBottomBlueVue from "./icons/ArrowBottomBlue.vue";
import DropDownBtn from "./icons/DropDownBtn.vue";
import SearchTableVue from "./icons/SearchTable.vue";
import EditVue from "./icons/Edit.vue";
import CardVue from "./icons/Card.vue";
export default {
  name: "TeamTable",
  components: {
    ArrowTopVue,
    ArrowBottomVue,
    CrossVue,
    ArrowBottomBlueVue,
    DropDownBtn,
    SearchTableVue,
    EditVue,
    CardVue,
  },
  data() {
    return {
      team: [
        {
          id: 1,
          photo: "Sara.png",
          name: "Sarah Connor",
          team: "Crosty",
          role: "Team Lead",
          gmail: "sarahconnor@gmail.com",
          birthday: "25.04.1994",
          telegram: "@sarahconnor",
          lastLogin: "03.11.2021",
        },
        {
          id: 2,
          photo: "Arnold.png",
          name: "Arnold Brown",
          team: "Gunters",
          role: "Seo Specialist",
          gmail: "arnoldbrown@gmail.com",
          birthday: "12.04.1989",
          telegram: "@arnoldbrown",
          lastLogin: "02.11.2021",
        },
        {
          id: 3,
          photo: "ErnestTwo.png",
          name: "Ernest Eberly",
          team: "Flamethrower",
          role: "Semantic Specialist",
          gmail: "ernesteberly@gmail.com",
          birthday: "17.06.1993",
          telegram: "@ErnestEberly",
          lastLogin: "03.11.2021",
        },
        {
          id: 4,
          photo: "Lance.png",
          name: "Lance Thomas",
          team: "Wizards",
          role: "Seo Specialist",
          gmail: "lancethomas@gmail.com",
          birthday: "12.04.1989",
          telegram: "@LanceThomas",
          lastLogin: "01.11.2021",
        },
        {
          id: 5,
          photo: "Cheryl.png",
          name: "Cheryl Glover",
          team: "Gunters",
          role: "Python Programmist",
          gmail: "cherylglover@gmail.com",
          birthday: "15.08.1985",
          telegram: "@CherylGlover",
          lastLogin: "03.11.2021",
        },
        {
          id: 6,
          photo: "Tomhas.png",
          name: "Lance Thomas",
          team: "Wizards",
          role: "Seo Specialist",
          gmail: "lancethomas@gmail.com",
          birthday: "12.04.1989",
          telegram: "@LanceThomas",
          lastLogin: "01.11.2021",
        },
        {
          id: 7,
          photo: "ErnestTwo.png",
          name: "Ernest Eberly",
          team: "Flamethrower",
          role: "Semantic Specialist",
          gmail: "ernesteberly@gmail.com",
          birthday: "17.06.1993",
          telegram: "@ErnestEberly",
          lastLogin: "03.11.2021",
        },
        {
          id: 8,
          photo: "Lance.png",
          name: "Lance Thomas",
          team: "Wizards",
          role: "Seo Specialist",
          gmail: "lancethomas@gmail.com",
          birthday: "12.04.1989",
          telegram: "@LanceThomas",
          lastLogin: "01.11.2021",
        },
        {
          id: 9,
          photo: "Cheryl.png",
          name: "Cheryl Glover",
          team: "Gunters",
          role: "Python Programmist",
          gmail: "cherylglover@gmail.com",
          birthday: "15.08.1985",
          telegram: "@CherylGlover",
          lastLogin: "03.11.2021",
        },
      ],
    };
  },
};
</script>
