/* eslint-disable no-new, react/jsx-indent, react/no-danger, react/jsx-indent-props */
import Barrier from './components/Barrier.jsx';
import PendingPromise from './utils/PendingPromise';
import ChartTypes from './components/ChartTypes.jsx';
import ChartMode from './components/ChartMode.jsx';
import StudyLegend from './components/StudyLegend.jsx';
import Comparison from './components/Comparison.jsx';
import Views from './components/Views.jsx';
import CrosshairToggle from './components/CrosshairToggle.jsx';
import Timeperiod from './components/Timeperiod.jsx';
import ChartSize from './components/ChartSize.jsx';
import DrawTools from './components/DrawTools.jsx';
import ChartSetting from './components/ChartSetting.jsx';
import Share from './components/Share.jsx';
import SmartChart from './components/SmartChart.jsx';
import ComparisonList from './components/ComparisonList.jsx';
import ChartTitle from './components/ChartTitle.jsx';
import AssetInformation from './components/AssetInformation.jsx';
import FastMarker from './components/FastMarker.jsx';
import RawMarker from './components/RawMarker.jsx';
import { createObjectFromLocalStorage } from './utils';
import { logEvent, LogCategories, LogActions } from './utils/ga';

function setSmartChartsPublicPath(path) {
    __webpack_public_path__ = path; // eslint-disable-line
}

const Marker = FastMarker;

export {
    AssetInformation,
    Barrier,
    ChartSetting,
    ChartSize,
    ChartTitle,
    ChartTypes,
    ChartMode,
    Comparison,
    ComparisonList,
    createObjectFromLocalStorage,
    CrosshairToggle,
    DrawTools,
    Marker,
    PendingPromise,
    setSmartChartsPublicPath,
    Share,
    SmartChart,
    StudyLegend,
    Timeperiod,
    Views,
    logEvent,
    LogCategories,
    LogActions,
};

export default {
    AssetInformation,
    Barrier,
    ChartSetting,
    ChartSize,
    ChartTitle,
    ChartTypes,
    ChartMode,
    Comparison,
    ComparisonList,
    createObjectFromLocalStorage,
    CrosshairToggle,
    DrawTools,
    FastMarker,
    Marker: FastMarker,
    PendingPromise,
    RawMarker,
    setSmartChartsPublicPath,
    Share,
    SmartChart,
    StudyLegend,
    Timeperiod,
    Views,
    logEvent,
    LogCategories,
    LogActions,
};
