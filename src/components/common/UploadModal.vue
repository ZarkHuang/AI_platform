<template>
  <NModal v-model:show="showModal" title="上傳影像" preset="card" style="width: 60%">
    <NSpace vertical style="width: 100%;">
      <!-- 上傳影像部分 -->
      <NUpload :file-list="fileList" @update:file-list="handleFileChange">
        <NButton>點擊上傳</NButton>
      </NUpload>
      <!-- 填寫病人信息部分 -->
      <NForm :model="form" :rules="rules" ref="formRef" label-placement="left">
        <NGrid xGap="12">
          <NGridItem span="24">
            <NFormItem label="File Name" path="fileName">
              <NInput v-model:value="form.fileName" />
            </NFormItem>
          </NGridItem>
          <NGridItem span="12">
            <NFormItem label="Patient ID" path="patientId">
              <NInput v-model:value="form.patientId" />
            </NFormItem>
          </NGridItem>
          <NGridItem span="12">
            <NFormItem label="Patient Name" path="patientName">
              <NInput v-model:value="form.patientName" />
            </NFormItem>
          </NGridItem>
          <NGridItem span="24">
            <NFormItem label="Study Description" path="studyDescription">
              <NInput v-model:value="form.studyDescription" />
            </NFormItem>
          </NGridItem>
          <NGridItem span="12">
            <NFormItem label="Modality" path="modality">
              <NSelect v-model:value="form.modality" :options="modalityOptions" />
            </NFormItem>
          </NGridItem>
          <NGridItem span="12">
            <NFormItem label="Body Part" path="bodyPart">
              <NSelect v-model:value="form.bodyPart" :options="bodyPartOptions" />
            </NFormItem>
          </NGridItem>
        </NGrid>
      </NForm>
    </NSpace>
    <template #footer>
      <NSpace>
        <NButton @click="handleCancel">取消</NButton>
        <NButton type="primary" @click="handleSubmit">提交</NButton>
      </NSpace>
    </template>
  </NModal>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue';
import { NModal, NSpace, NUpload, NButton, NForm, NFormItem, NInput, NSelect, NGrid, NGridItem } from 'naive-ui';

const emit = defineEmits(['add-row', 'update:show']);

const showModal = ref(false);
const fileList = ref([]);
const modalityOptions = [
  { label: 'CR', value: 'CR' },
  { label: 'CT', value: 'CT' },
  { label: 'MR', value: 'MR' },
  { label: 'US', value: 'US' }
];
const bodyPartOptions = [
  { label: 'HAND', value: 'HAND' },
  { label: 'LSPONE', value: 'LSPONE' },
  { label: 'CHEST', value: 'CHEST' },
  { label: 'HIP', value: 'HIP' },
  { label: 'EYE', value: 'EYE' }
];
const form = ref({
  fileName: '',
  patientId: '',
  patientName: '',
  studyDescription: '',
  modality: modalityOptions[0].value,
  bodyPart: bodyPartOptions[0].value,
});
const formRef = ref(null);
const rules = ref({
  fileName: [{ required: true, message: '請輸入 File Name' }],
  patientId: [{ required: true, message: '請輸入 Patient ID' }],
  patientName: [{ required: true, message: '請輸入 Patient Name' }],
  studyDescription: [{ required: true, message: '請輸入 Study Description' }],
  modality: [{ required: true, message: '請選擇 Modality' }],
  bodyPart: [{ required: true, message: '請選擇 Body Part' }],
});

const handleFileChange = (newFileList) => {
  fileList.value = newFileList.map(file => ({
    ...file,
    url: URL.createObjectURL(file.file)
  }));
};

const resetForm = () => {
  form.value = {
    fileName: '',
    patientId: '',
    patientName: '',
    studyDescription: '',
    modality: modalityOptions[0].value,
    bodyPart: bodyPartOptions[0].value
  };
  fileList.value = [];
};

const handleCancel = () => {
  emit('update:show', false);
  resetForm();
};

const handleSubmit = () => {
  formRef.value.validate((errors) => {
    if (!errors) {
      console.log('提交數據', form.value);
      emit('add-row', {
        ...form.value,
        key: Date.now(),
        studyDate: new Date().toISOString().split('T')[0], // 當前日期
        allReport: '',
        app: '',
        favorite: false
      });
      emit('update:show', false);
      resetForm();
    }
  });
};

// 當打開模態框時，重置表單
watch(showModal, (newValue) => {
  if (newValue) {
    resetForm();
  }
});
</script>
