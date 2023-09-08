import {
BIconTrash,
BIconArrowDownCircleFill,
BIconPencilFill
} from "bootstrap-icons-vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import draggable from "vuedraggable";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from "./App.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'BIconArrowDownCircleFill', typeof __VLS_localComponents, "BIconArrowDownCircleFill", "BIconArrowDownCircleFill", "BIconArrowDownCircleFill"> &
__VLS_WithComponent<'P', typeof __VLS_localComponents, "P", "P", "P"> &
__VLS_WithComponent<'VueDatePicker', typeof __VLS_localComponents, "VueDatePicker", "VueDatePicker", "VueDatePicker"> &
__VLS_WithComponent<'draggable', typeof __VLS_localComponents, "Draggable", "draggable", "draggable"> &
__VLS_WithComponent<'BIconPencilFill', typeof __VLS_localComponents, "BIconPencilFill", "BIconPencilFill", "BIconPencilFill"> &
__VLS_WithComponent<'BIconTrash', typeof __VLS_localComponents, "BIconTrash", "BIconTrash", "BIconTrash">;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input; ({} as __VLS_IntrinsicElements).input;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
__VLS_components.BIconArrowDownCircleFill;
// @ts-ignore
[BIconArrowDownCircleFill,];
__VLS_components.P; __VLS_components.P; __VLS_components.P; __VLS_components.P;
// @ts-ignore
[P, P, P, P,];
__VLS_components.VueDatePicker; __VLS_components.VueDatePicker;
// @ts-ignore
[VueDatePicker, VueDatePicker,];
({} as __VLS_IntrinsicElements).h3; ({} as __VLS_IntrinsicElements).h3; ({} as __VLS_IntrinsicElements).h3; ({} as __VLS_IntrinsicElements).h3; ({} as __VLS_IntrinsicElements).h3; ({} as __VLS_IntrinsicElements).h3; ({} as __VLS_IntrinsicElements).h3; ({} as __VLS_IntrinsicElements).h3;
__VLS_components.Draggable; __VLS_components.Draggable; __VLS_components.Draggable; __VLS_components.Draggable; __VLS_components.Draggable; __VLS_components.Draggable; __VLS_components.draggable; __VLS_components.draggable; __VLS_components.draggable; __VLS_components.draggable; __VLS_components.draggable; __VLS_components.draggable;
// @ts-ignore
[draggable, draggable, draggable, draggable, draggable, draggable,];
({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template; ({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
__VLS_components.BIconPencilFill; __VLS_components.BIconPencilFill; __VLS_components.BIconPencilFill;
// @ts-ignore
[BIconPencilFill, BIconPencilFill, BIconPencilFill,];
__VLS_components.BIconTrash; __VLS_components.BIconTrash; __VLS_components.BIconTrash;
// @ts-ignore
[BIconTrash, BIconTrash, BIconTrash,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{}, class: ("bg-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_6 = __VLS_5({ ...{}, class: ("container d-flex justify-content-center align-items-center py-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_10 = __VLS_9({ ...{}, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_14 = __VLS_13({ ...{}, class: ("d-flex align-items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_18 = __VLS_17({ ...{}, placeholder: ("Add a new todo"), class: ("rounded-pill p-2 border-1 w-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
(__VLS_ctx.newTodo);
}
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, {});
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_22 = __VLS_21({ ...{ onClick: {} as any, }, class: ("rounded-pill py-2 bg-transparent border-1 bg-transparent border-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24 = { 'click': __VLS_pickEvent(__VLS_23.emit!, 'click' as const, __VLS_componentProps(__VLS_21, __VLS_22).onClick) };
__VLS_24 = {
click: $event => {
__VLS_ctx.addTodo();
}
};
{
let __VLS_25!: 'BIconArrowDownCircleFill' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BIconArrowDownCircleFill : (typeof __VLS_resolvedLocalAndGlobalComponents)['BIconArrowDownCircleFill'];
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{}, class: ("text-white fs-3"), }));
({} as { BIconArrowDownCircleFill: typeof __VLS_25; }).BIconArrowDownCircleFill;
const __VLS_27 = __VLS_26({ ...{}, class: ("text-white fs-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
}
}
}
{
const __VLS_29 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_31 = __VLS_30({ ...{}, class: ("d-flex"), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31)!;
{
const __VLS_33 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_35 = __VLS_34({ ...{}, class: ("w-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_36 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35)!;
{
let __VLS_37!: 'P' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.P : (typeof __VLS_resolvedLocalAndGlobalComponents)['P'];
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{}, class: ("mb-0 mt-1"), }));
({} as { P: typeof __VLS_37; }).P;
({} as { P: typeof __VLS_37; }).P;
const __VLS_39 = __VLS_38({ ...{}, class: ("mb-0 mt-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
const __VLS_40 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39)!;
}
{
let __VLS_41!: 'VueDatePicker' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VueDatePicker : (typeof __VLS_resolvedLocalAndGlobalComponents)['VueDatePicker'];
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ ...{}, modelValue: ((__VLS_ctx.fromDate)), }));
({} as { VueDatePicker: typeof __VLS_41; }).VueDatePicker;
const __VLS_43 = __VLS_42({ ...{}, modelValue: ((__VLS_ctx.fromDate)), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
}
}
{
const __VLS_45 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_47 = __VLS_46({ ...{}, class: ("w-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
{
let __VLS_49!: 'P' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.P : (typeof __VLS_resolvedLocalAndGlobalComponents)['P'];
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ ...{}, class: ("mb-0 mt-1"), }));
({} as { P: typeof __VLS_49; }).P;
({} as { P: typeof __VLS_49; }).P;
const __VLS_51 = __VLS_50({ ...{}, class: ("mb-0 mt-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
}
{
let __VLS_53!: 'VueDatePicker' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VueDatePicker : (typeof __VLS_resolvedLocalAndGlobalComponents)['VueDatePicker'];
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ ...{}, modelValue: ((__VLS_ctx.toDate)), }));
({} as { VueDatePicker: typeof __VLS_53; }).VueDatePicker;
const __VLS_55 = __VLS_54({ ...{}, modelValue: ((__VLS_ctx.toDate)), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55)!;
}
}
}
}
}
}
{
const __VLS_57 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_59 = __VLS_58({ ...{}, class: ("container"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
{
const __VLS_61 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_63 = __VLS_62({ ...{}, class: ("row"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
{
const __VLS_65 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_67 = __VLS_66({ ...{}, class: ("all col-3 p-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
{
const __VLS_69 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_71 = __VLS_70({ ...{}, class: ("d-flex justify-content-center border border-1 w-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
const __VLS_72 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71)!;
{
const __VLS_73 = ({} as __VLS_IntrinsicElements)["h3"];
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, {});
({} as __VLS_IntrinsicElements).h3;
({} as __VLS_IntrinsicElements).h3;
const __VLS_75 = __VLS_74({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_74));
const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_73, __VLS_75)!;
}
}
{
let __VLS_77!: 'Draggable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Draggable : 'draggable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.draggable : (typeof __VLS_resolvedLocalAndGlobalComponents)['draggable'];
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{}, modelValue: ((__VLS_ctx.displayedTodos)), itemKey: ("id"), }));
({} as { draggable: typeof __VLS_77; }).draggable;
({} as { draggable: typeof __VLS_77; }).draggable;
const __VLS_79 = __VLS_78({ ...{}, modelValue: ((__VLS_ctx.displayedTodos)), itemKey: ("id"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
{
const __VLS_81 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, {});
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
{
const [{ element, index }] = __VLS_getSlotParams((__VLS_80.slots!).item);
{
const __VLS_84 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_86 = __VLS_85({ ...{}, class: ("card col-12 my-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86)!;
{
const __VLS_88 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_90 = __VLS_89({ ...{}, class: ("border-bottom d-flex justify-content-between align-items-center bg-dark p-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90)!;
{
const __VLS_92 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_94 = __VLS_93({ ...{}, type: ("checkbox"), class: ("me-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
(element.status);
}
if (__VLS_ctx.editingIndex === index) {
{
const __VLS_96 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_98 = __VLS_97({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98)!;
{
const __VLS_100 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, {});
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_102 = __VLS_101({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_101));
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
{
const __VLS_104 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_106 = __VLS_105({ ...{}, type: ("text"), class: ("m-0 border-0 fs-5 ps-2 w-100 rounded-pill"), value: ((element.todo)), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106)!;
}
}
}
// @ts-ignore
[newTodo, addTodo, fromDate, fromDate, toDate, toDate, displayedTodos, displayedTodos, editingIndex,];
}
else {
{
const __VLS_108 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_110 = __VLS_109({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_109));
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
{
const __VLS_112 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_114 = __VLS_113({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_113));
const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114)!;
(element.todo);
}
}
}
{
const __VLS_116 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_118 = __VLS_117({
...{}, class: (({
'd-block rounded-pill bg-success p-1': element.status,
'd-none': !element.status,
})),
}, ...__VLS_functionalComponentArgsRest(__VLS_117));
const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118)!;
}
{
const __VLS_120 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_122 = __VLS_121({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_121));
const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122)!;
{
let __VLS_124!: 'BIconPencilFill' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BIconPencilFill : (typeof __VLS_resolvedLocalAndGlobalComponents)['BIconPencilFill'];
const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ ...{ onClick: {} as any, }, class: ("m-2 text-white"), }));
({} as { BIconPencilFill: typeof __VLS_124; }).BIconPencilFill;
const __VLS_126 = __VLS_125({ ...{ onClick: {} as any, }, class: ("m-2 text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126)!;
({
'opacity-25': __VLS_ctx.editingIndex == index,
'opacitiy-100 cursor-pointer': __VLS_ctx.editingIndex != index,
});
let __VLS_128 = { 'click': __VLS_pickEvent(__VLS_127.emit!, 'click' as const, __VLS_componentProps(__VLS_125, __VLS_126).onClick) };
__VLS_128 = {
click: $event => {
__VLS_ctx.isEditing(index);
}
};
}
}
}
{
const __VLS_129 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_131 = __VLS_130({ ...{}, class: ("card-body"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131)!;
{
const __VLS_133 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_135 = __VLS_134({ ...{ onClick: {} as any, }, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
const __VLS_136 = __VLS_pickFunctionalComponentCtx(__VLS_133, __VLS_135)!;
let __VLS_137 = { 'click': __VLS_pickEvent(__VLS_136.emit!, 'click' as const, __VLS_componentProps(__VLS_134, __VLS_135).onClick) };
__VLS_137 = {
click: (__VLS_ctx.editedDate)
};
{
const __VLS_138 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_140 = __VLS_139({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140)!;
(__VLS_ctx.formatDate(element.fromDate));
}
{
const __VLS_142 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_144 = __VLS_143({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_143));
const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144)!;
(__VLS_ctx.formatDate(element.toDate));
}
}
}
{
const __VLS_146 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, {});
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_148 = __VLS_147({ ...{ onClick: {} as any, }, class: ("border-0 rounded-circle p-2 bg-transparent"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148)!;
let __VLS_150 = { 'click': __VLS_pickEvent(__VLS_149.emit!, 'click' as const, __VLS_componentProps(__VLS_147, __VLS_148).onClick) };
__VLS_150 = {
click: $event => {
__VLS_ctx.removeTodo(index);
}
};
{
let __VLS_151!: 'BIconTrash' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BIconTrash : (typeof __VLS_resolvedLocalAndGlobalComponents)['BIconTrash'];
const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ ...{}, class: ("fs-3 text-danger"), }));
({} as { BIconTrash: typeof __VLS_151; }).BIconTrash;
const __VLS_153 = __VLS_152({ ...{}, class: ("fs-3 text-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153)!;
}
}
}
}
}
}
}
{
const __VLS_155 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_157 = __VLS_156({ ...{}, class: ("all col-3 p-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_156));
const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157)!;
{
const __VLS_159 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_161 = __VLS_160({ ...{}, class: ("d-flex justify-content-center border border-1 w-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161)!;
{
const __VLS_163 = ({} as __VLS_IntrinsicElements)["h3"];
const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, {});
({} as __VLS_IntrinsicElements).h3;
({} as __VLS_IntrinsicElements).h3;
const __VLS_165 = __VLS_164({ ...{ onClick: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_164));
const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165)!;
let __VLS_167 = { 'click': __VLS_pickEvent(__VLS_166.emit!, 'click' as const, __VLS_componentProps(__VLS_164, __VLS_165).onClick) };
__VLS_167 = {
click: (__VLS_ctx.filterOngoing)
};
}
}
{
let __VLS_168!: 'Draggable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Draggable : 'draggable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.draggable : (typeof __VLS_resolvedLocalAndGlobalComponents)['draggable'];
const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{}, modelValue: ((__VLS_ctx.displayedOnGoingTask)), itemKey: ("id"), }));
({} as { draggable: typeof __VLS_168; }).draggable;
({} as { draggable: typeof __VLS_168; }).draggable;
const __VLS_170 = __VLS_169({ ...{}, modelValue: ((__VLS_ctx.displayedOnGoingTask)), itemKey: ("id"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170)!;
{
const __VLS_172 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, {});
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_174 = __VLS_173({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_173));
{
const [{ element, index }] = __VLS_getSlotParams((__VLS_171.slots!).item);
{
const __VLS_175 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_176 = __VLS_asFunctionalComponent(__VLS_175, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_177 = __VLS_176({ ...{}, class: ("card col-12 my-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177)!;
{
const __VLS_179 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_181 = __VLS_180({ ...{}, class: ("border-bottom d-flex justify-content-between align-items-center bg-dark p-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_180));
const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181)!;
{
const __VLS_183 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_185 = __VLS_184({ ...{}, type: ("checkbox"), class: ("me-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185)!;
(element.status);
}
if (__VLS_ctx.editingIndex === index) {
{
const __VLS_187 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_188 = __VLS_asFunctionalComponent(__VLS_187, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_189 = __VLS_188({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_188));
const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_187, __VLS_189)!;
{
const __VLS_191 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, {});
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_193 = __VLS_192({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_192));
const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193)!;
{
const __VLS_195 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_196 = __VLS_asFunctionalComponent(__VLS_195, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_197 = __VLS_196({ ...{}, type: ("text"), class: ("m-0 border-0 fs-5 ps-2 w-100 rounded-pill"), value: ((element.todo)), }, ...__VLS_functionalComponentArgsRest(__VLS_196));
const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197)!;
}
}
}
// @ts-ignore
[editingIndex, editingIndex, isEditing, editedDate, formatDate, formatDate, removeTodo, filterOngoing, displayedOnGoingTask, displayedOnGoingTask, editingIndex,];
}
else {
{
const __VLS_199 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_201 = __VLS_200({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_200));
const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201)!;
{
const __VLS_203 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_204 = __VLS_asFunctionalComponent(__VLS_203, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_205 = __VLS_204({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_204));
const __VLS_206 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205)!;
(element.todo);
}
}
}
{
const __VLS_207 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_208 = __VLS_asFunctionalComponent(__VLS_207, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_209 = __VLS_208({
...{}, class: (({
'd-block rounded-pill bg-success p-1': element.status,
'd-none': !element.status,
})),
}, ...__VLS_functionalComponentArgsRest(__VLS_208));
const __VLS_210 = __VLS_pickFunctionalComponentCtx(__VLS_207, __VLS_209)!;
}
{
const __VLS_211 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_212 = __VLS_asFunctionalComponent(__VLS_211, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_213 = __VLS_212({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_212));
const __VLS_214 = __VLS_pickFunctionalComponentCtx(__VLS_211, __VLS_213)!;
{
let __VLS_215!: 'BIconPencilFill' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BIconPencilFill : (typeof __VLS_resolvedLocalAndGlobalComponents)['BIconPencilFill'];
const __VLS_216 = __VLS_asFunctionalComponent(__VLS_215, new __VLS_215({ ...{ onClick: {} as any, }, class: ("m-2 text-white"), }));
({} as { BIconPencilFill: typeof __VLS_215; }).BIconPencilFill;
const __VLS_217 = __VLS_216({ ...{ onClick: {} as any, }, class: ("m-2 text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217)!;
({
'opacity-25': __VLS_ctx.editingIndex == index,
'opacitiy-100 cursor-pointer': __VLS_ctx.editingIndex != index,
});
let __VLS_219 = { 'click': __VLS_pickEvent(__VLS_218.emit!, 'click' as const, __VLS_componentProps(__VLS_216, __VLS_217).onClick) };
__VLS_219 = {
click: $event => {
__VLS_ctx.isEditing(index);
}
};
}
}
}
{
const __VLS_220 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_222 = __VLS_221({ ...{}, class: ("card-body"), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222)!;
{
const __VLS_224 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_225 = __VLS_asFunctionalComponent(__VLS_224, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_226 = __VLS_225({ ...{ onClick: {} as any, }, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_225));
const __VLS_227 = __VLS_pickFunctionalComponentCtx(__VLS_224, __VLS_226)!;
let __VLS_228 = { 'click': __VLS_pickEvent(__VLS_227.emit!, 'click' as const, __VLS_componentProps(__VLS_225, __VLS_226).onClick) };
__VLS_228 = {
click: (__VLS_ctx.editedDate)
};
{
const __VLS_229 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_230 = __VLS_asFunctionalComponent(__VLS_229, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_231 = __VLS_230({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_230));
const __VLS_232 = __VLS_pickFunctionalComponentCtx(__VLS_229, __VLS_231)!;
(__VLS_ctx.formatDate(element.fromDate));
}
{
const __VLS_233 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_234 = __VLS_asFunctionalComponent(__VLS_233, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_235 = __VLS_234({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_234));
const __VLS_236 = __VLS_pickFunctionalComponentCtx(__VLS_233, __VLS_235)!;
(__VLS_ctx.formatDate(element.toDate));
}
}
}
{
const __VLS_237 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_238 = __VLS_asFunctionalComponent(__VLS_237, {});
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_239 = __VLS_238({ ...{ onClick: {} as any, }, class: ("border-0 rounded-circle p-2 bg-transparent"), }, ...__VLS_functionalComponentArgsRest(__VLS_238));
const __VLS_240 = __VLS_pickFunctionalComponentCtx(__VLS_237, __VLS_239)!;
let __VLS_241 = { 'click': __VLS_pickEvent(__VLS_240.emit!, 'click' as const, __VLS_componentProps(__VLS_238, __VLS_239).onClick) };
__VLS_241 = {
click: $event => {
__VLS_ctx.removeTodo(index);
}
};
{
let __VLS_242!: 'BIconTrash' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BIconTrash : (typeof __VLS_resolvedLocalAndGlobalComponents)['BIconTrash'];
const __VLS_243 = __VLS_asFunctionalComponent(__VLS_242, new __VLS_242({ ...{}, class: ("fs-3 text-danger"), }));
({} as { BIconTrash: typeof __VLS_242; }).BIconTrash;
const __VLS_244 = __VLS_243({ ...{}, class: ("fs-3 text-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_243));
const __VLS_245 = __VLS_pickFunctionalComponentCtx(__VLS_242, __VLS_244)!;
}
}
}
}
}
}
}
{
const __VLS_246 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_247 = __VLS_asFunctionalComponent(__VLS_246, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_248 = __VLS_247({ ...{}, class: ("complete col-3 p-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_247));
const __VLS_249 = __VLS_pickFunctionalComponentCtx(__VLS_246, __VLS_248)!;
{
const __VLS_250 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_251 = __VLS_asFunctionalComponent(__VLS_250, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_252 = __VLS_251({ ...{}, class: ("d-flex justify-content-center border border-1 w-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252)!;
{
const __VLS_254 = ({} as __VLS_IntrinsicElements)["h3"];
const __VLS_255 = __VLS_asFunctionalComponent(__VLS_254, {});
({} as __VLS_IntrinsicElements).h3;
({} as __VLS_IntrinsicElements).h3;
const __VLS_256 = __VLS_255({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_255));
const __VLS_257 = __VLS_pickFunctionalComponentCtx(__VLS_254, __VLS_256)!;
}
}
{
let __VLS_258!: 'Draggable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Draggable : 'draggable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.draggable : (typeof __VLS_resolvedLocalAndGlobalComponents)['draggable'];
const __VLS_259 = __VLS_asFunctionalComponent(__VLS_258, new __VLS_258({ ...{}, modelValue: ((__VLS_ctx.displayedCompletedTask)), itemKey: ("id"), }));
({} as { draggable: typeof __VLS_258; }).draggable;
({} as { draggable: typeof __VLS_258; }).draggable;
const __VLS_260 = __VLS_259({ ...{}, modelValue: ((__VLS_ctx.displayedCompletedTask)), itemKey: ("id"), }, ...__VLS_functionalComponentArgsRest(__VLS_259));
const __VLS_261 = __VLS_pickFunctionalComponentCtx(__VLS_258, __VLS_260)!;
{
const __VLS_262 = ({} as __VLS_IntrinsicElements)["template"];
const __VLS_263 = __VLS_asFunctionalComponent(__VLS_262, {});
({} as __VLS_IntrinsicElements).template;
({} as __VLS_IntrinsicElements).template;
const __VLS_264 = __VLS_263({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_263));
{
const [{ element, index }] = __VLS_getSlotParams((__VLS_261.slots!).item);
{
const __VLS_265 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_266 = __VLS_asFunctionalComponent(__VLS_265, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_267 = __VLS_266({ ...{}, class: ("card col-12 my-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_266));
const __VLS_268 = __VLS_pickFunctionalComponentCtx(__VLS_265, __VLS_267)!;
{
const __VLS_269 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_270 = __VLS_asFunctionalComponent(__VLS_269, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_271 = __VLS_270({ ...{}, class: ("border-bottom d-flex justify-content-between align-items-center bg-dark p-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_270));
const __VLS_272 = __VLS_pickFunctionalComponentCtx(__VLS_269, __VLS_271)!;
{
const __VLS_273 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_274 = __VLS_asFunctionalComponent(__VLS_273, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_275 = __VLS_274({ ...{}, type: ("checkbox"), disabled: (true), class: ("me-2 opacity-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_274));
const __VLS_276 = __VLS_pickFunctionalComponentCtx(__VLS_273, __VLS_275)!;
(element.status);
}
if (__VLS_ctx.editingIndex === index) {
{
const __VLS_277 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_278 = __VLS_asFunctionalComponent(__VLS_277, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_279 = __VLS_278({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_278));
const __VLS_280 = __VLS_pickFunctionalComponentCtx(__VLS_277, __VLS_279)!;
{
const __VLS_281 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_282 = __VLS_asFunctionalComponent(__VLS_281, {});
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_283 = __VLS_282({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_282));
const __VLS_284 = __VLS_pickFunctionalComponentCtx(__VLS_281, __VLS_283)!;
{
const __VLS_285 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_286 = __VLS_asFunctionalComponent(__VLS_285, {});
({} as __VLS_IntrinsicElements).input;
const __VLS_287 = __VLS_286({ ...{}, type: ("text"), class: ("m-0 border-0 fs-5 ps-2 w-100 rounded-pill"), value: ((element.todo)), }, ...__VLS_functionalComponentArgsRest(__VLS_286));
const __VLS_288 = __VLS_pickFunctionalComponentCtx(__VLS_285, __VLS_287)!;
}
}
}
// @ts-ignore
[editingIndex, editingIndex, isEditing, editedDate, formatDate, formatDate, removeTodo, displayedCompletedTask, displayedCompletedTask, editingIndex,];
}
else {
{
const __VLS_289 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_290 = __VLS_asFunctionalComponent(__VLS_289, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_291 = __VLS_290({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_290));
const __VLS_292 = __VLS_pickFunctionalComponentCtx(__VLS_289, __VLS_291)!;
{
const __VLS_293 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_294 = __VLS_asFunctionalComponent(__VLS_293, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_295 = __VLS_294({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_294));
const __VLS_296 = __VLS_pickFunctionalComponentCtx(__VLS_293, __VLS_295)!;
(element.todo);
}
}
}
{
const __VLS_297 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_298 = __VLS_asFunctionalComponent(__VLS_297, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_299 = __VLS_298({
...{}, class: (({
'd-block rounded-pill bg-success p-1': element.status,
'd-none': !element.status,
})),
}, ...__VLS_functionalComponentArgsRest(__VLS_298));
const __VLS_300 = __VLS_pickFunctionalComponentCtx(__VLS_297, __VLS_299)!;
}
{
const __VLS_301 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_302 = __VLS_asFunctionalComponent(__VLS_301, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_303 = __VLS_302({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_302));
const __VLS_304 = __VLS_pickFunctionalComponentCtx(__VLS_301, __VLS_303)!;
{
let __VLS_305!: 'BIconPencilFill' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BIconPencilFill : (typeof __VLS_resolvedLocalAndGlobalComponents)['BIconPencilFill'];
const __VLS_306 = __VLS_asFunctionalComponent(__VLS_305, new __VLS_305({ ...{ onClick: {} as any, }, class: ("m-2 text-white"), }));
({} as { BIconPencilFill: typeof __VLS_305; }).BIconPencilFill;
const __VLS_307 = __VLS_306({ ...{ onClick: {} as any, }, class: ("m-2 text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_306));
const __VLS_308 = __VLS_pickFunctionalComponentCtx(__VLS_305, __VLS_307)!;
({
'opacity-25': __VLS_ctx.editingIndex == index,
'opacitiy-100 cursor-pointer': __VLS_ctx.editingIndex != index,
});
let __VLS_309 = { 'click': __VLS_pickEvent(__VLS_308.emit!, 'click' as const, __VLS_componentProps(__VLS_306, __VLS_307).onClick) };
__VLS_309 = {
click: $event => {
__VLS_ctx.isEditing(index);
}
};
}
}
}
{
const __VLS_310 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_311 = __VLS_asFunctionalComponent(__VLS_310, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_312 = __VLS_311({ ...{}, class: ("card-body"), }, ...__VLS_functionalComponentArgsRest(__VLS_311));
const __VLS_313 = __VLS_pickFunctionalComponentCtx(__VLS_310, __VLS_312)!;
{
const __VLS_314 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_315 = __VLS_asFunctionalComponent(__VLS_314, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_316 = __VLS_315({ ...{ onClick: {} as any, }, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_315));
const __VLS_317 = __VLS_pickFunctionalComponentCtx(__VLS_314, __VLS_316)!;
let __VLS_318 = { 'click': __VLS_pickEvent(__VLS_317.emit!, 'click' as const, __VLS_componentProps(__VLS_315, __VLS_316).onClick) };
__VLS_318 = {
click: (__VLS_ctx.editedDate)
};
{
const __VLS_319 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_320 = __VLS_asFunctionalComponent(__VLS_319, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_321 = __VLS_320({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_320));
const __VLS_322 = __VLS_pickFunctionalComponentCtx(__VLS_319, __VLS_321)!;
(__VLS_ctx.formatDate(element.fromDate));
}
{
const __VLS_323 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_324 = __VLS_asFunctionalComponent(__VLS_323, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_325 = __VLS_324({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_324));
const __VLS_326 = __VLS_pickFunctionalComponentCtx(__VLS_323, __VLS_325)!;
(__VLS_ctx.formatDate(element.toDate));
}
}
}
{
const __VLS_327 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_328 = __VLS_asFunctionalComponent(__VLS_327, {});
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_329 = __VLS_328({ ...{ onClick: {} as any, }, class: ("border-0 rounded-circle p-2 bg-transparent"), }, ...__VLS_functionalComponentArgsRest(__VLS_328));
const __VLS_330 = __VLS_pickFunctionalComponentCtx(__VLS_327, __VLS_329)!;
let __VLS_331 = { 'click': __VLS_pickEvent(__VLS_330.emit!, 'click' as const, __VLS_componentProps(__VLS_328, __VLS_329).onClick) };
__VLS_331 = {
click: $event => {
__VLS_ctx.removeTodo(index);
}
};
{
let __VLS_332!: 'BIconTrash' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.BIconTrash : (typeof __VLS_resolvedLocalAndGlobalComponents)['BIconTrash'];
const __VLS_333 = __VLS_asFunctionalComponent(__VLS_332, new __VLS_332({ ...{}, class: ("fs-3 text-danger"), }));
({} as { BIconTrash: typeof __VLS_332; }).BIconTrash;
const __VLS_334 = __VLS_333({ ...{}, class: ("fs-3 text-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_333));
const __VLS_335 = __VLS_pickFunctionalComponentCtx(__VLS_332, __VLS_334)!;
}
}
}
}
}
}
}
{
const __VLS_336 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_337 = __VLS_asFunctionalComponent(__VLS_336, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_338 = __VLS_337({ ...{}, class: ("task-list col-3 p-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_337));
const __VLS_339 = __VLS_pickFunctionalComponentCtx(__VLS_336, __VLS_338)!;
{
const __VLS_340 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_341 = __VLS_asFunctionalComponent(__VLS_340, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_342 = __VLS_341({ ...{}, class: ("d-flex justify-content-center border border-1 w-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_341));
const __VLS_343 = __VLS_pickFunctionalComponentCtx(__VLS_340, __VLS_342)!;
{
const __VLS_344 = ({} as __VLS_IntrinsicElements)["h3"];
const __VLS_345 = __VLS_asFunctionalComponent(__VLS_344, {});
({} as __VLS_IntrinsicElements).h3;
({} as __VLS_IntrinsicElements).h3;
const __VLS_346 = __VLS_345({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_345));
const __VLS_347 = __VLS_pickFunctionalComponentCtx(__VLS_344, __VLS_346)!;
}
}
(__VLS_ctx.filterCompleted());
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[editingIndex, editingIndex, isEditing, editedDate, formatDate, formatDate, removeTodo, filterCompleted,];
return __VLS_slots;
}
