<template>
  <div>
    <n-data-table
      :columns="columns"
      :data="filteredData"
      :pagination="pagination"
      :row-key="rowKey"
      @update:checked-row-keys="handleCheck"
    />
    <!-- <n-p>
      You have selected {{ checkedRowKeys.length }} row{{ checkedRowKeys.length < 2 ? '' : 's' }}.
    </n-p> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, h } from 'vue';
import { NDataTable, NButton, NIcon } from 'naive-ui';
import { Star as StarIcon, StarFilled as StarFilledIcon } from '@vicons/carbon';
import { Classification as FolderIcon } from '@vicons/carbon';
import { DataTableColumns, DataTableRowKey } from 'naive-ui';
import { format } from 'date-fns';

type RowData = {
  key: number;
  fileName: string;
  patientId: string;
  patientName: string;
  studyDescription: string;
  modality: string;
  bodyPart: string;
  studyDate: string;
  allReport: string;
  app: string;
  favorite: boolean;
};

const props = defineProps<{
  searchQuery: string;
}>();

const favorites = ref(new Set<number>());

const handleFavorite = (row: RowData) => {
  if (favorites.value.has(row.key)) {
    favorites.value.delete(row.key);
    console.log(`Removed from favorites: ${row.patientId}`);
  } else {
    favorites.value.add(row.key);
    console.log(`Added to favorites: ${row.patientId}`);
  }
};

const columns: DataTableColumns<RowData> = [
  {
    title: '',
    key: 'none',
    width: 100,
  },
  {
    title: 'Favorite',
    key: 'favorite',
    render(row) {
      const isFavorite = favorites.value.has(row.key);
      return h(NIcon, {
        size: 20,
        onClick: () => handleFavorite(row),
        style: { cursor: 'pointer' }
      }, {
        default: () => isFavorite ? h(StarFilledIcon) : h(StarIcon)
      });
    }
  },
  {
    title: 'File Name',
    key: 'fileName',
    sorter: (a: RowData, b: RowData) => a.fileName.localeCompare(b.fileName),
  },
  {
    title: 'Patient ID',
    key: 'patientId',
    sorter: (a: RowData, b: RowData) => a.patientId.localeCompare(b.patientId),
  },
  {
    title: 'Patient Name',
    key: 'patientName',
    sorter: (a: RowData, b: RowData) => a.patientName.localeCompare(b.patientName),
  },
  {
    title: 'Study Description',
    key: 'studyDescription',
    sorter: (a: RowData, b: RowData) => a.studyDescription.localeCompare(b.studyDescription),
  },
  {
    title: 'Modality',
    key: 'modality',
    sorter: (a: RowData, b: RowData) => a.modality.localeCompare(b.modality),
  }, 
  {
    title: 'Body Part',
    key: 'bodyPart',
    sorter: (a: RowData, b: RowData) => a.bodyPart.localeCompare(b.bodyPart),
  },
  {
    title: 'Study Date',
    key: 'studyDate',
    sorter: (a: RowData, b: RowData) => new Date(a.studyDate).getTime() - new Date(b.studyDate).getTime(),
  },
  {
    title: 'All Report',
    key: 'allReport',
    render() {
      return h(NButton, { size: 'small', onClick: () => alert('PDF opened') }, {
        default: () => h(NIcon, { size: 20 }, { default: () => h(FolderIcon) })
      });
    }
  },
  {
    title: 'App',
    key: 'app',
    render() {
      return h(NButton, { type: 'primary', size: 'small', onClick: () => alert('View clicked') }, {
        default: () => 'View'
      });
    }
  }
];

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  fileName: `File_${index}`,
  patientId: `Demo_${index + 1}`,
  patientName: `Patient ${index + 1}`,
  studyDescription: `Description ${index + 1}`,
  modality: 'CR',
  bodyPart: ['HAND', 'LSPONE', 'CHEST', 'HIP', 'EYE'][Math.floor(Math.random() * 5)],
  studyDate: format(new Date(), 'yyyy-MM-dd'),
  allReport: '',
  app: '',
  favorite: false // 初始化 favorite 狀態
}));

const pagination = { pageSize: 10 };
const rowKey = (row: RowData) => row.patientId;

const checkedRowKeysRef = ref<DataTableRowKey[]>([]);

const handleCheck = (rowKeys: DataTableRowKey[]) => {
  checkedRowKeysRef.value = rowKeys;
};

const filteredData = computed(() => {
  return data.filter((item) => {
    return item.fileName.includes(props.searchQuery);
  });
});

// const checkedRowKeys = checkedRowKeysRef;
</script>
