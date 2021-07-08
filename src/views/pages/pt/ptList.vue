<template>
  <div class="ptList">
      <div class="header">
          <div class="wrap">
            <div class="header_search">
            <div class="title_box">
                <div class="title1">PATENT OPERATION</div>
                <div class="title2_box">
                    <div class="title2_left">专利运营</div>
                    <div class="title2_right">共享创新成果，提升保障优势</div>
                </div>
            </div>
            <div class="search_box">
                <i class="el-icon-search search_icon"></i>
                <input class="search_inp" v-model="keyWords" type="text" placeholder="请输入您要搜索的关键词、专利号、专利名称，具体分类领域等等">
                <div class="search_btn" @click="headleSearchBTN">快速查询</div>
            </div>
            </div>
              <!-- 筛选列表 -->
            <div class="screen" :style="{height: screenHeight + 'px'}"  id="scopde_ref">
                <!-- 行业分类 -->
                <div class="row">
                    <div class="row_left">
                        <div class="row_left_text">{{contentList[0].name}}</div>
                    </div>
                    <div class="row_right">
                        <div class="row_item">
                            <div class="row_right_text" v-for="(itemFrist, indexFrist) in contentList[0].list" :key="indexFrist"
                            :class="{'row_right_active': itemFrist.active}" @click="headleScope(itemFrist); headleScope2()">
                                {{itemFrist.title}}
                            </div>
                        </div>
                        <!-- 三级展开的选项 -->
                        <div class="scoped" v-show="scope.length>0" ref="scoped_ref">
                            <div class="scoped_left">
                                使用范围
                            </div>
                            <div class="scoped_right">
                                <div class="scoped_box">
                                    <!-- :class="{'scoped_height': showMore}" -->
                                    <div class="scoped_all" v-for="(itemS, indexS) in scope" :key="indexS">
                                        <div @click="headleAllScoe(itemS)"
                                        :class="{'scoped_active': contentList[0].list[itemS.category].groupActive}">全部</div>
                                        <div v-for="(itemScoped, indexScoped) in itemS.scopes" :key="indexScoped" class="scoped_items"
                                        :class="{'scoped_cancel': itemScoped.key === '全部取消', 'scoped_active' : itemScoped.active}"
                                        @click="headleScoped(itemScoped,itemS)">
                                            {{itemScoped.value}}{{itemScoped.key}}
                                        </div>
                                    </div>
                                    <!-- <span class="open_btn" @click="headleShowMore" v-if="showMore">展开</span>
                                    <span class="open_btn" @click="headleShowLess" v-else>收起</span> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 专利类型 -->
                <div class="row">
                    <div class="row_left">
                        <div class="row_left_text">{{contentList[1].name}}</div>
                    </div>
                    <div class="row_right">
                        <div class="row_item">
                            <div class="row_right_text" v-for="(itemFrist, indexFrist) in contentList[1].list" :key="indexFrist"
                            :class="{'row_right_active': itemFrist.active}" @click="headleScopePtType(itemFrist);headleScope2()">
                                {{itemFrist.title}}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 法律状态 -->
                <div class="row">
                    <div class="row_left">
                        <div class="row_left_text">{{contentList[2].name}}</div>
                    </div>
                    <div class="row_right">
                        <div class="row_item">
                            <div class="row_right_text" v-for="(itemFrist, indexFrist) in contentList[2].list" :key="indexFrist"
                            :class="{'row_right_active': itemFrist.active}" @click="headleScopeLegal(itemFrist);headleScope2()">
                                {{itemFrist.title}}
                            </div>
                        </div>
                        <!-- 三级展开的选项 -->
                        <div class="legal_scope" v-if="showLegal">
                            <div class="scope_box" v-if="showChecked">
                                <div class="legal_scope_item" v-for="(itemChild, indexChild) in contentList[2].list[1].child" :key="indexChild">
                                    <div :class="{'legal_item_active': itemChild.active}" @click="headleLegalItem(itemChild)">{{itemChild.title}}</div>
                                </div>
                            </div>
                            <div class="scope_box" v-else>
                                <div class="legal_scope_item" v-for="(itemChild, indexChild) in contentList[2].list[2].child" :key="indexChild">
                                    <div :class="{'legal_item_active': itemChild.active}" @click="headleLegalItem(itemChild)">{{itemChild.title}}</div>
                                </div>
                            </div>
                            <div class="lagal_close">
                                <div class="lagal_close_cancel" @click="headleCancelLegal()">全部取消</div>
                                <!-- <div class="lagal_close_btn" @click="headleCloseLegal">
                                    收起
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 价格区间 -->
                <!-- <div class="row">
                    <div class="row_left">
                        <div class="row_left_text">{{contentList[3].name}}</div>
                    </div>
                    <div class="row_right diy_box">
                        <div class="row_item">
                            <div class="row_right_text" v-for="(itemFrist, indexFrist) in contentList[3].list" :key="indexFrist"
                            :class="{'row_right_active': itemFrist.active}" @click="headleScopePrice(itemFrist)">
                                {{itemFrist.title}}
                            </div>
                        </div>
                        <div class="diy_price">
                            <div>自定义</div>
                            <div class="price_min">
                                <svg-icon class-name="renminbi renminbi1" icon-class="renminbi" v-if="showIconRMB1"></svg-icon>
                                <input class="price_section_min" v-model="minPrice" @focus="focusShowIconRMB1" @blur="blurShowIconRMB1"/>
                            </div>
                            <div>至</div>
                            <div>
                                <svg-icon class-name="renminbi renminbi2" icon-class="renminbi" v-if="showIconRMB2"></svg-icon>
                                <input class="price_section_min" v-model="maxPrice" @focus="focusShowIconRMB2" @blur="blurShowIconRMB2"/>
                            </div>
                            <div class="define_btn" style="margin-top:3px" @click="headleSubmit" :class="{'btn_active': priceBtn}">确定</div>
                        </div>
                    </div>
                </div> -->
                <!-- 地址 -->
                <div class="row">
                    <div class="row_left">
                        <div class="row_left_text">{{contentList[4].name}}</div>
                    </div>
                    <div class="row_right add_box">
                        <div class="row_item">
                            <div class="row_right_text" v-for="(itemFrist, indexFrist) in contentList[4].list" :key="indexFrist"
                            :class="{'row_right_active': itemFrist.active}" @click="headleAddress(itemFrist); headleScope2()">
                                {{itemFrist.title}}
                            </div>
                        </div>
                        <div class="diy_address">
                            <div>
                                <input class="address_inp" v-model="addressInp" placeholder="请输入城市名称，多个以空格隔开"/>
                            </div>
                            <div class="define_btn" :class="{'btn_active': addressActive}" @click="headleSubmit">确定</div>
                        </div>
                    </div>
                </div>
                <!-- 其他 -->
                <div class="row">
                    <div class="row_left">
                        <div class="row_left_text" style="padding-top:15px">{{contentList[5].name}}</div>
                    </div>
                    <div class="row_right diy_time" id="diy_time" style="padding-bottom:20px">
                        <div class="time_box">
                            <span>申请日</span>
                            <el-date-picker
                                style="border:1px solid #ccc;padding: 0 10px;height:24px"
                                v-model="patentAppDate"
                                value-format="yyyy-MM-dd"
                                type="daterange"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <div class="time_box">
                            <span>授权公告日</span>
                            <el-date-picker
                                style="border:1px solid #ccc;padding: 0 10px;height:24px"
                                v-model="patentIssuedPubDate"
                                type="daterange"
                                value-format="yyyy-MM-dd"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                        <div class="time_box_btn define_btn" :class="{'btn_active': dateActive}" @click="headleSubmit">确定</div>
                    </div>
                </div>
            </div>
            <!-- 清空 -->
            <div class="last_row">
                <div class="row_left">
                    <div class="row_left_text">筛选条件</div>
                </div>
                <div class="row_right">
                    <div class="clean" @click="headleCleanAll" :class="{'clear_active': clearActive}">
                        清空筛选
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div class="ptlist_con">
          <div class="wrap con2_body" v-if="ptList.length">
            <div class="pt_box" v-for="(item,index) in ptList" :key="index">
                <div class="left" v-if="item.patent">
                    <img class="left_pic" v-if="item.patent.ipType === '发明'" src="@/assets/image/home/inv_pic.png" alt="">
                    <img class="left_pic" v-if="item.patent.ipType === '实用新型'" src="@/assets/image/home/syxx_pic.png" alt="">
                    <img class="left_pic" v-if="item.patent.ipType === '外观设计'" src="@/assets/image/home/appe_pic.png" alt="">
                </div>
                <div class="right" v-if="item.patent">
                    <div class="con2_title_box">
                        <span class="title_txt" @click="linkDetail(item)" v-html="brightenKeyword(item.name)"></span>
                        <span class="title_tip tip_label1" v-if="item.imagePath.indexOf('/a.png') !== -1">人类生活需要</span>
                        <span class="title_tip tip_label2" v-if="item.imagePath.indexOf('/b.png') !== -1">作业运输</span>
                        <span class="title_tip tip_label3" v-if="item.imagePath.indexOf('/c.png') !== -1">化学冶金</span>
                        <span class="title_tip tip_label4" v-if="item.imagePath.indexOf('/d.png') !== -1">纺织造纸</span>
                        <span class="title_tip tip_label5" v-if="item.imagePath.indexOf('/e.png') !== -1">固定建筑物</span>
                        <span class="title_tip tip_label6" v-if="item.imagePath.indexOf('/f.png') !== -1">机械工程、照明、加热、武器爆破</span>
                        <span class="title_tip tip_label7" v-if="item.imagePath.indexOf('/g.png') !== -1">物理</span>
                        <span class="title_tip tip_label8" v-if="item.imagePath.indexOf('/h.png') !== -1">电学</span>
                    </div>
                    <div class="decs">
                        <span class="decs_label">摘要：</span>
                        <span class="decs_txt"  v-html="brightenKeyword(item.patent.description)"></span>
                    </div>
                    <div class="info">
                        <div class="info_box">
                            <span class="info_label">专利号：</span>
                            <span class="info_value" v-html="brightenKeyword(item.patent.appNo)"></span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">主分类号：</span>
                            <span class="info_value" v-html="brightenKeyword(item.patent.fields)" ></span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">申请日：</span>
                            <span class="info_value">{{item.patent.appDate}}</span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">授权公告日：</span>
                            <span class="info_value">{{item.patent.issuedPubDate}}</span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">专利说明书：</span>
                            <span class="info_value" style="cursor: pointer;color: #006DEC;text-decoration-line: underline;" v-if="item.patent.specificationFile" @click="headleInstructions(item)">查看</span>
                        </div>
                    </div>
                    <div class="info">
                        <div class="info_box">
                            <span class="info_label">法律状态：</span>
                            <span class="info_value">
                                <span>{{item.patent.groupingLegalStatus}}</span>
                                <span>({{item.patent.legalStatus}})</span>
                            </span>
                        </div>
                        <div class="info_box">
                            <span class="info_label">申请人地址：</span>
                            <span class="info_value" v-html="brightenKeyword(item.patent.applicantAddress)"></span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="page">
                <!-- 分页 -->
                <div class="pt_pagination">
                    <el-pagination
                    background
                    :page-sizes="[10, 20, 30, 50, 80, 100]"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size= screenList.pager.pageSize
                    prev-text="上一页"
                    next-text="下一页"
                    layout="prev, pager, next, slot, sizes"
                    :total="total">
                    <!-- jumper -->
                    <!-- <span>共 {{totalPage}} 页</span> -->
                    <!-- <el-button>跳转</el-button> -->
                    </el-pagination>
                    <!-- <el-button class="pagination_btn_to">跳转</el-button> -->
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import Pt from '@/api/pt.js'
export default {
    name: 'ptList',
    data () {
        return {
            contentList: [
                {
                    name: '行业分类',
                    type: 'pt',
                    active: false,
                    list: [
                        { title: '全部', active: true, val: '', groupActive: true },
                        { title: 'A.人类生活需要', active: false, type: 'pt', val: 'a', groupActive: false, group: [] },
                        { title: 'B.作业、运输', active: false, type: 'pt', val: 'b', groupActive: false, group: [] },
                        { title: 'C.化学、冶金', active: false, type: 'pt', val: 'c', groupActive: false, group: [] },
                        { title: 'D.纺织、造纸', active: false, type: 'pt', val: 'd', groupActive: false, group: [] },
                        { title: 'E.固定建筑物', active: false, type: 'pt', val: 'e', groupActive: false, group: [] },
                        { title: 'F.机械工程、照明、加热、武器爆破', active: false, type: 'pt', val: 'f', groupActive: false, group: [] },
                        { title: 'G.物理', active: false, type: 'pt', val: 'g', groupActive: false, group: [] },
                        { title: 'H.电学', active: false, type: 'pt', val: 'h', groupActive: false, group: [] }
                    ]
                },
                {
                    name: '专利类型',
                    type: 'patentTypes',
                    active: false,
                    list: [
                        { title: '全部', active: true, val: '' },
                        { title: '发明专利', active: false, type: 'patentTypes', val: '1' },
                        { title: '实用新型', active: false, type: 'patentTypes', val: '2' },
                        { title: '外观设计', active: false, type: 'patentTypes', val: '3' }
                    ]
                },
                {
                    name: '法律状态',
                    type: 'legal',
                    active: false,
                    list: [
                        { title: '全部', type: 'legal', active: true, val: '' },
                        {
                            title: '未下证',
                            active: false,
                            type: 'noncheckd',
                            val: '未下证',
                            child: [
                                { title: '全部', active: true, val: '' },
                                { title: '等年登印费', active: false, type: 'noncheckd', val: '等年登印费' },
                                { title: '视为放弃，等恢复', active: false, type: 'noncheckd', val: '视为放弃，等恢复' }
                            ]
                        },
                        {
                            title: '已下证',
                            active: false,
                            type: 'checkd',
                            val: '已下证',
                            child: [
                                { title: '全部', active: true, type: 'checkd', val: '' },
                                { title: '专利权维持', active: false, type: 'checkd', val: '专利权维持' },
                                { title: '等年费滞纳金', active: false, type: 'checkd', val: '等年费滞纳金' },
                                { title: '未缴年费专利权终止，等恢复', active: false, type: 'checkd', val: '未缴年费专利权终止，等恢复' }
                            ]
                        }
                    ]
                },
                {
                    name: '价格区间',
                    type: 'priceRange',
                    active: false,
                    list: [
                        { title: '全部', active: true, val: '' },
                        { title: '1万以下', active: false, type: 'price', val: '_1000000' },
                        { title: '1万~2万', active: false, type: 'price', val: '1000000_2000000' },
                        { title: '2万~3万', active: false, type: 'price', val: '2000000_3000000' },
                        { title: '3万~4万', active: false, type: 'price', val: '3000000_4000000' },
                        { title: '4万~5万', active: false, type: 'price', val: '4000000_5000000' },
                        { title: '5万以上', active: false, type: 'price', val: '5000000_' }
                    ]
                },
                {
                    name: '申请人地址',
                    type: 'address',
                    active: false,
                    list: [
                        { title: '全部', active: true, val: '' },
                        { title: '宿州', active: false, type: 'address', val: '宿州' },
                        { title: '福州', active: false, type: 'address', val: '福州' },
                        { title: '东莞', active: false, type: 'address', val: '东莞' },
                        { title: '佛山', active: false, type: 'address', val: '佛山' },
                        { title: '广州', active: false, type: 'address', val: '广州' },
                        { title: '深圳', active: false, type: 'address', val: '深圳' },
                        { title: '焦作', active: false, type: 'address', val: '焦作' },
                        { title: '黄冈', active: false, type: 'address', val: '黄冈' },
                        { title: '徐州', active: false, type: 'address', val: '徐州' },
                        { title: '大连', active: false, type: 'address', val: '大连' },
                        { title: '滨州', active: false, type: 'address', val: '滨州' },
                        { title: '东营', active: false, type: 'address', val: '东营' },
                        { title: '上海', active: false, type: 'address', val: '上海' },
                        { title: '杭州', active: false, type: 'address', val: '杭州' },
                        { title: '金华', active: false, type: 'address', val: '金华' },
                        { title: '绍兴', active: false, type: 'address', val: '绍兴' },
                        { title: '台州', active: false, type: 'address', val: '台州' },
                        { title: '嘉兴', active: false, type: 'address', val: '嘉兴' },
                        { title: '温州', active: false, type: 'address', val: '温州' },
                        { title: '丽水', active: false, type: 'address', val: '丽水' },
                        { title: '宁波', active: false, type: 'address', val: '宁波' }
                    ]
                },
                {
                    name: '其他',
                    type: 'time',
                    active: false
                }
            ],
            contentListBackups: [
                {
                    name: '行业分类',
                    type: 'pt',
                    active: false,
                    list: [
                        { title: '全部', active: true, val: '', groupActive: true },
                        { title: 'A.人类生活需要', active: false, type: 'pt', val: 'a', groupActive: false, group: [] },
                        { title: 'B.作业、运输', active: false, type: 'pt', val: 'b', groupActive: false, group: [] },
                        { title: 'C.化学、冶金', active: false, type: 'pt', val: 'c', groupActive: false, group: [] },
                        { title: 'D.纺织、造纸', active: false, type: 'pt', val: 'd', groupActive: false, group: [] },
                        { title: 'E.固定建筑物', active: false, type: 'pt', val: 'e', groupActive: false, group: [] },
                        { title: 'F.机械工程、照明、加热、武器爆破', active: false, type: 'pt', val: 'f', groupActive: false, group: [] },
                        { title: 'G.物理', active: false, type: 'pt', val: 'g', groupActive: false, group: [] },
                        { title: 'H.电学', active: false, type: 'pt', val: 'h', groupActive: false, group: [] }
                    ]
                },
                {
                    name: '专利类型',
                    type: 'patentTypes',
                    active: false,
                    list: [
                        { title: '全部', active: true, val: '' },
                        { title: '发明专利', active: false, type: 'patentTypes', val: '1' },
                        { title: '实用新型', active: false, type: 'patentTypes', val: '2' },
                        { title: '外观设计', active: false, type: 'patentTypes', val: '3' }
                    ]
                },
                {
                    name: '法律状态',
                    type: 'legal',
                    active: false,
                    list: [
                        { title: '全部', type: 'legal', active: true, val: '' },
                        {
                            title: '未下证',
                            active: false,
                            type: 'noncheckd',
                            val: '未下证',
                            child: [
                                { title: '全部', active: true, val: '' },
                                { title: '等年登印费', active: false, type: 'noncheckd', val: '等年登印费' },
                                { title: '视为放弃，等恢复', active: false, type: 'noncheckd', val: '视为放弃，等恢复' }
                            ]
                        },
                        {
                            title: '已下证',
                            active: false,
                            type: 'checkd',
                            val: '已下证',
                            child: [
                                { title: '全部', active: true, type: 'checkd', val: '' },
                                { title: '专利权维持', active: false, type: 'checkd', val: '专利权维持' },
                                { title: '等年费滞纳金', active: false, type: 'checkd', val: '等年费滞纳金' },
                                { title: '未缴年费专利权终止，等恢复', active: false, type: 'checkd', val: '未缴年费专利权终止，等恢复' }
                            ]
                        }
                    ]
                },
                {
                    name: '价格区间',
                    type: 'priceRange',
                    active: false,
                    list: [
                        { title: '全部', active: true, val: '' },
                        { title: '1万以下', active: false, type: 'price', val: '_1000000' },
                        { title: '1万~2万', active: false, type: 'price', val: '1000000_2000000' },
                        { title: '2万~3万', active: false, type: 'price', val: '2000000_3000000' },
                        { title: '3万~4万', active: false, type: 'price', val: '3000000_4000000' },
                        { title: '4万~5万', active: false, type: 'price', val: '4000000_5000000' },
                        { title: '5万以上', active: false, type: 'price', val: '5000000_' }
                    ]
                },
                {
                    name: '申请人地址',
                    type: 'address',
                    active: false,
                    list: [
                        { title: '全部', active: true, val: '' },
                        { title: '宿州', active: false, type: 'address', val: '宿州' },
                        { title: '福州', active: false, type: 'address', val: '福州' },
                        { title: '东莞', active: false, type: 'address', val: '东莞' },
                        { title: '佛山', active: false, type: 'address', val: '佛山' },
                        { title: '广州', active: false, type: 'address', val: '广州' },
                        { title: '深圳', active: false, type: 'address', val: '深圳' },
                        { title: '焦作', active: false, type: 'address', val: '焦作' },
                        { title: '黄冈', active: false, type: 'address', val: '黄冈' },
                        { title: '徐州', active: false, type: 'address', val: '徐州' },
                        { title: '大连', active: false, type: 'address', val: '大连' },
                        { title: '滨州', active: false, type: 'address', val: '滨州' },
                        { title: '东营', active: false, type: 'address', val: '东营' },
                        { title: '上海', active: false, type: 'address', val: '上海' },
                        { title: '杭州', active: false, type: 'address', val: '杭州' },
                        { title: '金华', active: false, type: 'address', val: '金华' },
                        { title: '绍兴', active: false, type: 'address', val: '绍兴' },
                        { title: '台州', active: false, type: 'address', val: '台州' },
                        { title: '嘉兴', active: false, type: 'address', val: '嘉兴' },
                        { title: '温州', active: false, type: 'address', val: '温州' },
                        { title: '丽水', active: false, type: 'address', val: '丽水' },
                        { title: '宁波', active: false, type: 'address', val: '宁波' }
                    ]
                },
                {
                    name: '其他',
                    type: 'time',
                    active: false
                }
            ],
            screenList: {
                categories: ['p'], // 商品分类 p:专利  t：商标
                patentSources: [], // 专利来源
                patentTypes: [], // 专利类型
                patentLegalStatuses: [], // 法律状态
                patentIndustries: [], // A,B,C,D...分类
                priceRange: '', // 价格范围
                keyword: '', // 关键字
                orderBy: 'DEFAULT', // 排序方式
                pager: {
                    pageIndex: 1, // 页数
                    pageSize: 10 // 每页条数
                },
                isOccupy: '',
                occupyPrices: [],
                patentAppDateFrom: '', // 申请日
                patentAppDateTo: '', // 申请日
                patentIssuedPubDateFrom: '', // 授权日
                patentIssuedPubDateTo: '', // 授权日
                filterName: [], // 下拉分类
                name: '',
                patentFields: '',
                description: '',
                patentAppNo: '',
                applicantAddresses: []
            },
            screenListBackups: {
                categories: ['p'], // 商品分类 p:专利  t：商标
                patentSources: [], // 专利来源
                patentTypes: [], // 专利类型
                patentLegalStatuses: [], // 法律状态
                patentIndustries: [], // A,B,C,D...分类
                priceRange: '', // 价格范围
                keyword: '', // 关键字
                orderBy: 'DEFAULT', // 排序方式
                pager: {
                    pageIndex: 1, // 页数
                    pageSize: 10 // 每页条数
                },
                isOccupy: '',
                occupyPrices: [],
                patentAppDateFrom: '', // 申请日
                patentAppDateTo: '', // 申请日
                patentIssuedPubDateFrom: '', // 授权日
                patentIssuedPubDateTo: '', // 授权日
                filterName: [], // 下拉分类
                nam: '',
                patentFields: '',
                description: '',
                patentAppNo: '',
                applicantAddresses: []
            },
            keyWords: '',
            patentAppDate: '',
            patentIssuedPubDate: '',
            ptList: [],
            showChecked: false,
            showLegal: false,
            loading: false,
            currentPage: 0,
            total: 0,
            totalPage: 0,
            showIconRMB1: true,
            showIconRMB2: true,
            minPrice: '',
            maxPrice: '',
            addressInp: '',
            showNav: false,
            scope: [],
            FieldsList: [],
            showMore: true,
            searchShopping: false,
            searchKeywordText: '',
            screenHeight: 300,
            scopdeHeight: 0
        }
    },
    watch: {
        screenList: {
            handler (newValue) {
                if (newValue.patentIndustries.length === 0) {
                    this.contentList[0].list[0].active = true
                }
            },
            deep: true
            // immediate: true
        }
    },
    computed: {
        priceBtn: function () {
            return this.minPrice || this.maxPrice
        },
        addressActive: function () {
            return this.addressInp
        },
        dateActive: function () {
            return this.patentAppDate || this.patentIssuedPubDate
        },
        clearActive: function () {
            return this.screenList.patentIndustries.length || this.screenList.patentTypes.length || this.screenList.patentLegalStatuses.length || this.screenList.applicantAddresses.length || this.patentAppDate || this.patentIssuedPubDate || this.minPrice || this.maxPrice || this.screenList.priceRange
        }
    },
    created () {
        if (this.$route.query.keyword) {
            this.searchBtn(this.$route)
        } else {
            this.headleSearch()
        }
    },
    mounted () {
        this.$nextTick(function () {
            window.addEventListener('scroll', this.handleScroll)
        })
    },
    methods: {
        headleSearchBTN () {
            this.searchShopping = true
            this.headleCleanAll()
            this.screenList.keyword = this.keyWords
            this.searchKeywordText = this.keyWords
            this.headleSearch()
        },
        brightenKeyword (str) {
            let keyword = this.keyWords
            // eslint-disable-next-line no-useless-escape
            keyword = '(' + keyword.replace(/([\+\.\*\|\?\-\(\[\^\$])/g, '\\$1').replace(/\s+/g, '|') + ')'// 把匹配关键字中的正则符转义
            const patt = new RegExp(keyword, 'igm')
            const str2 = str.replace(patt, '<font color="#FF2E30">$1</font>')
            return str2
        },
        // 联系客服
        gotoService () {
        },
        // 确定
        headleSubmit () {
            this.searchShopping = false
            // 价格
            // if (this.maxPrice && this.minPrice) {
            //     this.screenList.priceRange = this.minPrice + '00_' + this.maxPrice + '00'
            // } else if (this.minPrice) {
            //     this.screenList.priceRange = this.minPrice + '00_'
            // } else if (this.maxPrice) {
            //     this.screenList.priceRange = '_' + this.maxPrice + '00'
            // } else {
            //     this.screenList.priceRange = ''
            // }
            // if (this.maxPrice || this.minPrice) {
            //     this.contentList[3].list.map(e => {
            //         e.active = false
            //     })
            // } else {
            //     this.contentList[3].list.map(e => {
            //         e.active = false
            //     })
            //     this.contentList[3].list[0].active = true
            // }
            // 地址
            const addressList = this.addressInp.split(' ')
            if (addressList) {
                for (let i = 0; i < addressList.length; i++) {
                    if (addressList[i] === '') {
                        addressList.splice(i, 1)
                    }
                }
            }
            if (addressList && addressList.length > 0) {
                this.contentList[4].list.map(e => {
                    e.active = false
                })
                this.screenList.applicantAddresses = addressList
            } else {
                this.contentList[4].list.map(e => {
                    e.active = false
                })
                this.contentList[4].list[0].active = true
                this.screenList.applicantAddresses = []
            }
            // 时间
            if (this.patentAppDate && this.patentAppDate.length > 0) {
                this.screenList.patentAppDateTo = this.patentAppDate[1]
                this.screenList.patentAppDateFrom = this.patentAppDate[0]
            } else {
                this.screenList.patentAppDateTo = ''
                this.screenList.patentAppDateFrom = ''
            }
            if (this.patentIssuedPubDate && this.patentIssuedPubDate.length > 0) {
                this.screenList.patentIssuedPubDateFrom = this.patentIssuedPubDate[1]
                this.screenList.patentIssuedPubDateTo = this.patentIssuedPubDate[0]
            } else {
                this.screenList.patentIssuedPubDateFrom = ''
                this.screenList.patentIssuedPubDateTo = ''
            }
            this.headleSearch()
        },
        // 点击搜索
        searchBtn (newRouter) {
            const seatchType = newRouter.query.searchType || ''
            if (newRouter.query.keyword) {
                newRouter.query.keyword = newRouter.query.keyword.replace(/,/g, ' ')
                this.searchKeywordText = newRouter.query.keyword
                this.keyWords = newRouter.query.keyword
            }
            if (seatchType === 'keyword') {
                this.screenList.keyword = newRouter.query.keyword || ''
                this.headleSearch()
            }
        },
        // 筛选请求
        headleSearch (currentPage) {
            this.screenList.pager.pageIndex = currentPage || 1
            this.loading = true
            for (let i = 0; i < this.screenList.patentIndustries.length; i++) {
                if (this.screenList.patentIndustries[i] === '') {
                    this.screenList.patentIndustries.splice(i, 1)
                    i = i - 1
                }
            }
            Pt.search(this.screenList).then(response => {
                const { code, result, message, pageUtil } = response
                if (code === 200) {
                    result.map(e => {
                        e.checked = false
                        e.showDes = false
                        e.showAddress = false
                    })
                    this.totalPage = pageUtil.totalPage
                    this.total = pageUtil.totalRow
                    this.ptList = result
                    this.loading = false
                } else {
                    this.$message({
                        type: 'error',
                        message: message
                    })
                }
            })
        },
        headleScope2 () {
            this.searchShopping = false
        },
        // 获取行业分类items
        headleScope (item) {
            const that = this
            if (item.title === '全部') {
                that.scope.length = 0
                for (let i = 1; i < that.contentList[0].list.length; i++) {
                    that.contentList[0].list[i].active = false
                    // that.contentList[0].list[i].groupActive = true
                    // that.contentList[0].list[i].group = []
                }
                that.contentList[0].list[0].active = true
                that.screenList.patentIndustries = []
                that.FieldsList = []
                that.headleSearch()
                if (this.scopdeHeight > 0) {
                    this.screenHeight = this.screenHeight - this.scopdeHeight
                    this.scopdeHeight = 0
                }
            } else {
                // 商标类别
                that.contentList[0].list[0].active = false
                const classifications = [item.val]
                Pt.ptScope({ classifications: classifications }).then(response => {
                    const { code, message, result } = response
                    if (code === 200) {
                        if (result) {
                            if (result[0].category === '1') {
                                result[0].val = 'a'
                            }
                            if (result[0].category === '2') {
                                result[0].val = 'b'
                            }
                            if (result[0].category === '3') {
                                result[0].val = 'c'
                            }
                            if (result[0].category === '4') {
                                result[0].val = 'd'
                            }
                            if (result[0].category === '5') {
                                result[0].val = 'e'
                            }
                            if (result[0].category === '6') {
                                result[0].val = 'f'
                            }
                            if (result[0].category === '7') {
                                result[0].val = 'g'
                            }
                            if (result[0].category === '8') {
                                result[0].val = 'h'
                            }
                        }
                        const tempScope = response.result[0]
                        for (let i = 0; i < this.contentList[0].list.length; i++) {
                            if (this.contentList[0].list[i].val === tempScope.val && item.group.length === 0) {
                                this.contentList[0].list[i].groupActive = true
                                this.contentList[0].list[i].active = true
                                // 加入到查询条件中
                                this.screenList.patentIndustries.push(tempScope.val)
                                this.screenList.patentIndustries = [...new Set(this.screenList.patentIndustries)]
                                setTimeout(() => {
                                    this.headleSearch()
                                }, 100)
                            }
                        }
                        response.result[0].scopes.push({ key: '全部取消', value: '' }) // 添加全部取消的按钮
                        that.scope = response.result
                        this.$nextTick(function () {
                            // DOM 现在更新了
                            // `this` 绑定到当前实例
                            if (this.scopdeHeight > 0) {
                                this.screenHeight = this.screenHeight - this.scopdeHeight
                            }
                            this.scopdeHeight = this.$refs.scoped_ref.offsetHeight
                            this.screenHeight = this.screenHeight + this.scopdeHeight
                        })
                        that.changScopeColor()
                    }
                })
            }
        },
        // 点击下拉框的全部
        headleAllScoe (itemScope) {
            for (let i = 0; i < this.contentList[0].list.length; i++) {
                if (this.contentList[0].list[i].val === itemScope.val) {
                    if (this.contentList[0].list[i].groupActive) {
                        this.contentList[0].list[i].groupActive = false
                        this.contentList[0].list[i].active = false
                        this.contentList[0].list[i].group = []
                        // 从查询条件中删除
                        this.removeObjWithArr(this.screenList.patentIndustries, itemScope.val)
                        this.removeObjWithArr(this.screenList.patentIndustries, itemScope.val)
                    } else {
                        this.contentList[0].list[i].groupActive = true
                        this.contentList[0].list[i].active = true
                        // 加入到查询条件中
                        this.screenList.patentIndustries.push(itemScope.val)
                    }
                }
            }
            this.headleSearch()
            for (let i = 0; i < itemScope.scopes.length; i++) {
                for (let j = 0; j < this.FieldsList.length; j++) {
                    if (this.FieldsList[j] === itemScope.scopes[i].value) {
                        itemScope.scopes[i].active = false
                        this.removeObjWithArr(this.FieldsList, this.FieldsList[j])
                        this.$forceUpdate()
                    }
                }
            }
            this.screenList.patentFields = this.FieldsList.join(' ')
        },
        // 点击下拉框里的选项
        headleScoped (item, itemScope) {
            if (item.key === '全部取消') {
                this.headleAllScoe(itemScope)
                this.scope.length = 0
                // 去掉那个全部按钮的颜色
                for (let i = 0; i < this.contentList[0].list.length; i++) {
                    if (this.contentList[0].list[i].val === itemScope.val) {
                        this.contentList[0].list[i].groupActive = false
                        this.contentList[0].list[i].active = false
                        this.contentList[0].list[i].group = []
                    }
                }
                this.removeObjWithArr(this.screenList.patentIndustries, itemScope.val)
                this.removeObjWithArr(this.screenList.patentIndustries, itemScope.val)
                this.screenHeight = this.screenHeight - this.scopdeHeight
                this.scopdeHeight = 0
            } else {
                if (!item.active) {
                    for (let i = 0; i < this.contentList[0].list.length; i++) {
                        if (this.contentList[0].list[i].val === itemScope.val) {
                            this.contentList[0].list[i].group.push(item)
                            if (this.contentList[0].list[i].group.length > 0) {
                                this.contentList[0].list[i].active = true
                            }
                            break
                        }
                    }
                } else {
                    for (let i = 0; i < this.contentList[0].list.length; i++) {
                        if (this.contentList[0].list[i].val === itemScope.val) {
                            for (let j = 0; j < this.contentList[0].list[i].group.length; j++) {
                                if (this.contentList[0].list[i].group[j].value === item.value) {
                                    this.contentList[0].list[i].group.splice(j, 1)
                                }
                            }
                            if (this.contentList[0].list[i].group.length === 0) {
                                this.contentList[0].list[i].active = false
                                this.removeObjWithArr(this.screenList.patentIndustries, itemScope.val)
                            }
                            break
                        }
                    }
                }
                if (this.FieldsList.indexOf(item.value) !== -1) {
                    for (let i = 0; i < this.scope[0].scopes.length; i++) {
                        for (let j = 0; j < this.FieldsList.length; j++) {
                            if (this.scope[0].scopes[i].value === this.FieldsList[j]) {
                                this.scope[0].scopes[i].active = false
                            }
                        }
                    }
                    this.removeObjWithArr(this.FieldsList, item.value)
                } else {
                    this.FieldsList.push(item.value)
                }
                // 去掉全部按钮的颜色
                for (let i = 0; i < this.contentList[0].list.length; i++) {
                    if (this.contentList[0].list[i].val === itemScope.val) {
                        if (this.contentList[0].list[i].group.length === this.scope[0].scopes.length - 1) {
                            this.contentList[0].list[i].groupActive = true
                        } else {
                            this.contentList[0].list[i].groupActive = false
                        }
                    }
                }
                this.screenList.patentIndustries = [...this.screenList.patentIndustries]
                this.screenList.patentIndustries = [...new Set(this.screenList.patentIndustries)]
                this.screenList.patentFields = this.FieldsList.join(' ')
                this.headleSearch()
                this.changScopeColor()
            }
        },
        // 改变下拉列表颜色
        changScopeColor () {
            for (let i = 0; i < this.scope[0].scopes.length; i++) {
                for (let j = 0; j < this.FieldsList.length; j++) {
                    if (this.scope[0].scopes[i].value === this.FieldsList[j]) {
                        this.scope[0].scopes[i].active = true
                    }
                }
            }
            this.$forceUpdate()
        },
        // 点击展开
        headleShowMore () {
            this.showMore = false
        },
        // 点击收起
        headleShowLess () {
            this.showMore = true
        },
        // 获取专利类型 items
        headleScopePtType (item) {
            const that = this
            if (item.title === '全部') {
                that.contentList[1].list.map(e => {
                    e.active = false
                })
                that.contentList[1].list[0].active = true
                that.screenList.patentTypes = []
            } else {
                that.contentList[1].list[0].active = false
                item.active = !item.active
                if (that.screenList.patentTypes.indexOf(item.val) !== -1) {
                    const indexS = that.screenList.patentTypes.indexOf(item.val)
                    that.screenList.patentTypes.splice(indexS, 1)
                } else {
                    that.screenList.patentTypes.push(item.val)
                }
                if (that.screenList.patentTypes.length === 0) {
                    that.contentList[1].list[0].active = true
                }
            }
            this.headleSearch()
        },
        // 获取法律状态 ites
        headleScopeLegal (item) {
            const that = this
            that.contentList[2].list.map(e => {
                e.active = false
            })
            item.active = true
            if (item.title === '全部') {
                if (that.showLegal) {
                    this.screenHeight = this.screenHeight - 58
                }
                that.showLegal = false
                that.contentList[2].list[0].active = true
                that.screenList.patentLegalStatuses = []
            } else {
                if (!that.showLegal) {
                    this.screenHeight = this.screenHeight + 58
                }
                that.showLegal = true
                if (item.title === '未下证') {
                    that.showChecked = true
                    that.screenList.patentLegalStatuses = ['等年登印费', '视为放弃，等恢复']
                } else {
                    that.showChecked = false
                    that.screenList.patentLegalStatuses = ['专利权维持', '等年费滞纳金', '未缴年费专利权终止，等恢复']
                }
                that.screenList.patentLegalStatuses = Array.from(new Set(that.screenList.patentLegalStatuses))
            }
            that.headleSearch()
        },
        // 法律状态下拉选项
        headleLegalItem (item) {
            item.active = !item.active
            if (this.showChecked) {
                if (item.title === '全部') {
                    for (let i = 1; i < this.contentList[2].list[1].child.length; i++) {
                        this.contentList[2].list[1].child[i].active = false
                    }
                    if (item.active) {
                        this.screenList.patentLegalStatuses = ['等年登印费', '视为放弃，等恢复']
                    } else {
                        this.screenList.patentLegalStatuses = []
                    }
                } else {
                    this.contentList[2].list[1].child[0].active = false
                    this.screenList.patentLegalStatuses = []
                    for (let i = 1; i < this.contentList[2].list[1].child.length; i++) {
                        if (this.contentList[2].list[1].child[i].active) {
                            this.screenList.patentLegalStatuses.push(this.contentList[2].list[1].child[i].val)
                        } else {
                            this.removeObjWithArr(this.screenList.patentLegalStatuses, this.contentList[2].list[1].child[i].val)
                        }
                    }
                }

                if (this.contentList[2].list[1].child.findIndex(target => target.active === true) === -1) {
                    this.contentList[2].list[1].active = false
                } else {
                    this.contentList[2].list[1].active = true
                }
            } else {
                if (item.title === '全部') {
                    for (let i = 1; i < this.contentList[2].list[2].child.length; i++) {
                        this.contentList[2].list[2].child[i].active = false
                    }
                    if (item.active) {
                        this.screenList.patentLegalStatuses = ['专利权维持', '等年费滞纳金', '未缴年费专利权终止，等恢复']
                    } else {
                        this.screenList.patentLegalStatuses = []
                    }
                } else {
                    this.contentList[2].list[2].child[0].active = false
                    this.screenList.patentLegalStatuses = []
                    for (let i = 1; i < this.contentList[2].list[2].child.length; i++) {
                        if (this.contentList[2].list[2].child[i].active) {
                            this.screenList.patentLegalStatuses.push(this.contentList[2].list[2].child[i].val)
                        } else {
                            this.removeObjWithArr(this.screenList.patentLegalStatuses, this.contentList[2].list[2].child[i].val)
                        }
                    }
                }

                if (this.contentList[2].list[2].child.findIndex(target => target.active === true) === -1) {
                    this.contentList[2].list[2].active = false
                } else {
                    this.contentList[2].list[2].active = true
                }
            }
            if (this.screenList.patentLegalStatuses.length === 0) {
                this.contentList[2].list[0].active = true
            } else {
                this.contentList[2].list[0].active = false
            }
            this.headleSearch()
        },
        // 法律状态的全部取消
        headleCancelLegal () {
            this.screenHeight = this.screenHeight - 58
            if (this.showChecked) {
                this.contentList[2].list[1].active = false
                this.contentList[2].list[1].child.map(e => {
                    e.active = false
                })
                this.contentList[2].list[1].child[0].active = true
                this.showLegal = false
                this.removeObjWithArr(this.screenList.patentLegalStatuses, '等年登印费')
                this.removeObjWithArr(this.screenList.patentLegalStatuses, '视为放弃，等恢复')
            } else {
                this.contentList[2].list[2].active = false
                this.contentList[2].list[2].child.map(e => {
                    e.active = false
                })
                this.contentList[2].list[2].child[0].active = true
                this.showLegal = false
                this.removeObjWithArr(this.screenList.patentLegalStatuses, '专利权维持')
                this.removeObjWithArr(this.screenList.patentLegalStatuses, '等年费滞纳金')
                this.removeObjWithArr(this.screenList.patentLegalStatuses, '未缴年费专利权终止，等恢复')
            }
            this.contentList[2].list[0].active = true
            this.headleSearch()
        },
        // 收起法律状态
        headleCloseLegal () {
            this.showLegal = false
            this.screenHeight = this.screenHeight - 58
        },
        // 获取价格区间的items
        headleScopePrice (item) {
            const that = this
            that.contentList[3].list.map(e => {
                e.active = false
            })
            item.active = true
            this.screenList.priceRange = item.val
            this.headleSearch()
        },
        // 获取申请人地址
        headleAddress (item) {
            const that = this
            if (item.title === '全部') {
                that.contentList[4].list.map(e => {
                    e.active = false
                })
                that.contentList[4].list[0].active = true
                that.screenList.applicantAddresses = []
            } else {
                that.contentList[4].list[0].active = false
                item.active = !item.active
                if (that.screenList.applicantAddresses.indexOf(item.val) !== -1) {
                    const indexS = that.screenList.applicantAddresses.indexOf(item.val)
                    that.screenList.applicantAddresses.splice(indexS, 1)
                } else {
                    that.screenList.applicantAddresses.push(item.val)
                }
                if (that.screenList.applicantAddresses.length === 0) {
                    that.contentList[4].list[0].active = true
                }
            }
            this.headleSearch()
        },
        linkDetail (item) {
            // this.$router.push({ path: '/pt/detail?id=' + item.id })
            const newPage = this.$router.resolve({ path: '/pt/detail?id=' + item.id })
            window.open(newPage.href, '_blank')
        },
        // 下载专利说明书
        headleInstructions (item) {
            if (item.patent.specificationFile) {
                window.open(item.patent.specificationFile)
            } else {
                this.$message({
                    type: 'error',
                    message: '本专利暂无说明书'
                })
            }
        },
        // // 鼠标移入和移除
        // headleShowDes (item) {
        //     item.showDes = true
        // },
        // headlNonShowDes (item) {
        //     item.showDes = false
        // },
        // // 鼠标移入和移除
        // headleShowAddress (item) {
        //     item.showAddress = true
        // },
        // headlNonShowAddress (item) {
        //     item.showAddress = false
        // },
        // 点击清空筛选
        headleCleanAll () {
            this.screenList = JSON.parse(JSON.stringify(this.screenListBackups))
            this.contentList = JSON.parse(JSON.stringify(this.contentListBackups))
            this.FieldsList = []
            this.scope = []
            this.currentPage = 0
            this.showLegal = false
            this.minPrice = this.maxPrice = ''
            this.addressInp = ''
            this.patentAppDate = this.patentIssuedPubDate = ''
            if (this.scopdeHeight > 0) {
                this.screenHeight = this.screenHeight - this.scopdeHeight
                this.scopdeHeight = 0
            }
            if (!this.searchShopping) {
                this.headleSearch()
            }
            this.$forceUpdate()
        },
        // 分页
        handleSizeChange (val) {
            this.screenList.pager.pageSize = val
            this.headleSearch()
        },
        handleCurrentChange (val) {
            this.screenList.pager.pageIndex = val
            this.currentPage = val
            this.headleSearch(val)
        },
        // 价格符号的设置
        focusShowIconRMB1 () {
            this.showIconRMB1 = false
        },
        blurShowIconRMB1 () {
            if (this.minPrice) {
                this.showIconRMB1 = false
            } else {
                this.showIconRMB1 = true
            }
        },
        focusShowIconRMB2 () {
            this.showIconRMB2 = false
        },
        blurShowIconRMB2 () {
            if (this.maxPrice) {
                this.showIconRMB2 = false
            } else {
                this.showIconRMB2 = true
            }
        },
        // 返回对象在数组中的下标
        getIndexWithArr (_arr, _obj) {
            var len = _arr.length
            for (var i = 0; i < len; i++) {
                // eslint-disable-next-line no-undef
                if (this.isObjectValueEqual(_arr[i], _obj)) {
                    return i
                }
            }
            return -1
        },
        // 判断对象是否相等
        isObjectValueEqual (a, b) {
            if (typeof (a) !== 'object' && typeof (b) !== 'object') {
                if (a === b) {
                    return true
                } else {
                    return false
                }
            }
            var aProps = Object.getOwnPropertyNames(a)
            var bProps = Object.getOwnPropertyNames(b)

            if (aProps.length !== bProps.length) {
                return false
            }

            for (var i = 0; i < aProps.length; i++) {
                var propName = aProps[i]

                if (a[propName] !== b[propName]) {
                    return false
                }
            }

            return true
        },
        // 删除指定对象
        removeObjWithArr (_arr, _obj) {
            var length = _arr.length
            for (let i = 0; i < length; i++) {
                if (this.isObjectValueEqual(_arr[i], _obj)) {
                    if (i === 0) {
                        _arr.shift() // 删除并返回数组的第一个元素
                        return
                    } else if (i === length - 1) {
                        _arr.pop() // 删除并返回数组的最后一个元素
                        return
                    } else {
                        _arr.splice(i, 1) // 删除下标为i的元素
                        return
                    }
                }
            }
        },
        handleScroll () {
            const that = this
            const scrollY = document.documentElement.scrollTop
            if (scrollY > 200) {
                that.showNav = true
            } else {
                that.showNav = false
            }
        },
        sharePicture (list) {
            const that = this
            const arr = []
            list.forEach((e, index) => {
                arr.push({
                    category: 'p',
                    sort: index + 1,
                    valueId: e
                })
            })
        }
    },
    beforeDestroy () {
        document.removeEventListener('scroll', this.handleScroll, true)
    }
}
</script>

<style lang='scss' scoped>
.ptList{
    .header{
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding-top: 35px;
        background: linear-gradient(180deg, #D4161A 0%, rgba(212, 22, 26, 0) 100%);
        padding-bottom: 40px;
        .wrap{
            .header_search{
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;
                .title_box{
                    .title1{
                        color: #fff;
                        opacity: .4;
                        font-size: 22px;
                        margin-bottom: 15px;
                    }
                    .title2_box{
                        display: flex;
                        align-items: flex-end;
                        color: #fff;
                        .title2_left{
                            font-size: 24px;
                        }
                        .title2_right{
                            margin-left: 10px;
                            border-left: 1px solid #fff;
                            padding-left: 10px;
                            font-size: 14px;
                        }
                    }
                }
                .search_box{
                    display: flex;
                    align-items: center;
                    color: #fff;
                    height: 46px;
                    line-height: 46px;
                    position: relative;
                    .search_icon{
                        position: absolute;
                        left: 14px;
                        top: 15px;
                    }
                    .search_inp{
                        width: 505px;
                        padding: 16px 42px;
                        background-color: rgba(255,255,255, .15);
                        color: #fff;
                        font-size: 14px;
                        border-radius: 2px 0 0 2px;
                    }
                    .search_btn{
                        width: 140px;
                        text-align: center;
                        background-color: #fff;
                        color: $mainColor;
                        cursor: pointer;
                        font-size: 16px;
                        border-radius: 0px 2px 2px 0;
                    }
                    ::-webkit-input-placeholder {
                        color: #fff;
                        opacity: .7;
                    }
                    ::-ms-input-placeholder {
                        color: #fff;
                        opacity: .7;
                    }
                    :-moz-placeholder {
                        color: #fff;
                        opacity: .7;
                    }
                }
            }
            .screen{
                width: 1200px;
                background-color: #fff;
                overflow: hidden;
                font-size: 12px;
                .row{
                    display: flex;
                    .row_left{
                        box-sizing: border-box;
                        width: 100px;
                        background-color: #F7F9FF;
                        padding: 6px 0 0 0;
                        color: #464646;
                        border-right: 1px solid #E8E5F1;
                        .row_left_text{
                            padding: 11px 0px 11px 0px;
                            text-align: center;
                        }
                    }
                    .row_right{
                        box-sizing: border-box;
                        width: 1100px;
                        padding: 11px 0 0 0;
                        border-bottom: 1px solid #f4f3f6;
                        .row_item{
                            display: flex;
                            flex-wrap: wrap;
                            .row_right_text{
                                // width: 8.6%;
                                margin-left: 16px;
                                box-sizing: border-box;
                                line-height: 28px;
                                border: 1px solid #fff;
                                padding: 0 7px;
                                cursor: pointer;
                                text-align: center;
                                border-radius: 4px;
                                margin-bottom: 8px;
                            }
                            .row_right_active{
                                color: $fColor;
                            }
                        }
                        // 法律状态的下拉选择
                        .legal_scope{
                            box-sizing: border-box;
                            background-color: #F4F4F4;
                            margin:0 20px 20px 20px;
                            line-height: 38px;
                            height: 38px;
                            border-radius: 4px;
                            display: flex;
                            justify-content: space-between;
                            padding-right: 30px;
                            .scope_box{
                                display: flex;
                                .legal_scope_item{
                                    cursor: pointer;
                                    margin: 0 20px;
                                    .legal_item_active{
                                        color: $fColor;
                                    }
                                }
                            }
                            .lagal_close{
                                display: flex;
                                .lagal_close_cancel{
                                    padding: 0 10px;
                                    margin: auto 0;
                                    margin-right: 20px;
                                    border: 1px solid #006DEC;
                                    color: #006DEC;
                                    border-radius: 4px;
                                    text-align: center;
                                    height: 24px;
                                    line-height: 24px;
                                    cursor: pointer;
                                }
                                .lagal_close_btn{
                                    border-radius: 4px;
                                    border: 1px solid #bbb;
                                    height: 24px;
                                    margin: auto 0;
                                    line-height: 24px;
                                    padding: 0 10px;
                                    cursor: pointer;
                                }
                            }
                        }
                        .row1_right_text{
                            padding: 0 10px;
                            margin-left: 22px;
                            box-sizing: border-box;
                            line-height: 28px;
                            border: 1px solid #ffffff;
                            cursor: pointer;
                            text-align: center;
                            border-radius: 4px;
                            margin-bottom: 8px;
                        }
                        .scoped{
                            display: flex;
                            padding: 15px 19px 15px 18px;
                            .scoped_left{
                                color: $fColor;
                                padding: 15px 15px 8px 0;
                            }
                            .scoped_right{
                                .scoped_box{
                                    position: relative;
                                    width: 990px;
                                    box-sizing: border-box;
                                    background-color: #F4F4F4;
                                    width: 990px;
                                    padding: 8px 12px;
                                    border-radius: 2px;
                                    .open_btn{
                                        font-size: 12px;
                                        position: absolute;
                                        right: 10px;
                                        top: 14px;
                                        padding: 2px 8px 1px 8px;
                                        border-radius: 4px;
                                        border: 1px solid $secondaryTextColor;
                                        cursor: pointer;
                                    }
                                    .scoped_height{
                                        height: 30px;
                                        overflow: hidden;
                                    }
                                    .scoped_all{
                                        display: flex;
                                        flex-wrap: wrap;
                                        padding: 0 40px 0 0;
                                        align-items: center;
                                        .scoped_cancel{
                                            line-height: 20px;
                                            padding: 2px 8px;
                                            border: 1px solid $fColor;
                                            color: $fColor;
                                            border-radius: 4px;
                                            text-align: center;
                                        }
                                        .scoped_active{
                                            color: $fColor;
                                        }
                                        > div {
                                            margin-right: 16px;
                                            line-height: 30px;
                                            // margin-bottom: 8px;
                                            cursor: pointer;
                                            word-wrap: break-word;
                                            word-break:keep-all;
                                            // &:hover{
                                            //     color: $fColor;
                                            // }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .diy_box{
                        display: flex;
                        // background-color: #f5f5f5;
                        .diy_price{
                            display: flex;
                            line-height: 28px;
                            margin-left: 40px;
                            width: 380px;
                            position: relative;
                            .renminbi1, .renminbi2{
                                    position: absolute;
                                    top: 10px;
                                    font-size: 10px;
                                    color: #606266;
                                }
                                .renminbi1{
                                    left: 58px;
                                }
                                .renminbi2{
                                    left: 190px;
                                }
                            .price_section_min{
                                width: 86px;
                                height: 20px;
                                border: 1px solid $inputBorderColor;
                                border-radius: 4px;
                                margin:0  10px;
                                padding-left: 8px;
                                outline: none;
                            }
                            .price_section_max{
                                width: 86px;
                                height: 20px;
                                border: 1px solid $inputBorderColor;
                                border-radius: 4px;
                                margin:0  10px;
                                padding-left: 8px;
                            }
                        }
                    }
                    .add_box{
                        display: flex;
                        .diy_address{
                            display: flex;
                            margin-right: 20px;
                            margin-top: 5px;
                            .define_btn{
                                height: 24px;
                            }
                        }
                        .address_inp{
                            margin-right: 10px;
                            font-size: 12px;
                            width: 220px;
                            height: 20px;
                            line-height: 20px;
                            border: 1px solid $inputBorderColor;
                            border-radius:4px;
                            padding-left: 8px;
                            outline: none; // 去除选中状态边框
                            background-color: rgba(0, 0, 0, 0);// 透明背景
                        }
                    }
                    .diy_time{
                        padding-left: 20px;
                        display: flex;
                        align-items: center;
                        .time_box{
                            margin-right: 30px;
                            margin-top: 5px;
                            display: flex;
                            align-items: center;
                            > span{
                                margin-right: 8px;
                            }
                        }
                        .time_box_btn{
                            margin: 7px 0 1px 0;
                        }
                    }
                    .define_btn{
                        width: 40px;
                        height: 24px;
                        line-height: 24px;
                        text-align: center;
                        background: #EAEAEA;
                        color: #999;
                        cursor: pointer;
                        border-radius: 2px;
                    }
                    .btn_active{
                        background-color: $fColor;
                        color: #fff;
                    }
                }
            }
            .last_row{
                margin-top: 10px;
                font-size: 12px;
                display: flex;
                background-color: #fff;
                width: 1200px;
                height: 48px;
                line-height: 48px;
                .row_left{
                    width: 100px;
                    text-align: center;
                }
                .row_right{
                    display: flex;
                    align-items: center;
                    height: 48px;
                    margin-left: 20px;
                    .clean{
                        color: #BEBEBE;
                        width: 68px;
                        height: 22px;
                        border: 1px solid #BEBEBE;
                        cursor: pointer;
                        border-radius: 2px;
                        font-size: 12px;
                        text-align: center;
                        line-height: 24px;
                        &.clear_active{
                            cursor: pointer;
                            color: #333;
                        }
                    }
                }
            }
        }
    }
    .ptlist_con{
        .con2_body{
            margin-top: 10px;
            .pt_box{
                padding: 20px;
                border: 1px solid #E0E0E0;
                margin-bottom: 20px;
                display: flex;
                .left{
                    margin-right: 20px;
                    .left_pic{
                        width: 130px;
                        height: 130px;
                        display: block;
                    }
                }
                .right{
                    .con2_title_box{
                        margin-top: 5px;
                        margin-bottom: 25px;
                        display: flex;
                        .title_txt{
                            font-size: 16px;
                            font-weight: bold;
                            margin-right: 10px;
                            display: inline-block;
                            max-width: 700px;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            cursor: pointer;
                        }
                        .title_tip{
                            padding: 2px 4px;
                            color: $mainColor;
                            border: 1px solid $mainColor;
                            font-size: 12px;
                        }
                        .tip_label2{
                            color: #F97515;
                            border: 1px solid #F97515;
                        }
                        .tip_label2{
                            color: #F97515;
                            border: 1px solid #F97515;
                        }
                        .tip_label3{
                            color: #6F32F0;
                            border: 1px solid #6F32F0;
                        }
                        .tip_label4{
                            color: #00A3FF;
                            border: 1px solid #00A3FF;
                        }
                        .tip_label5{
                            color: #325C20;
                            border: 1px solid #325C20;
                        }
                        .tip_label6{
                            color: #f915ed;
                            border: 1px solid #f915ed;
                        }
                        .tip_label7{
                            color: #67bebe;
                            border: 1px solid #67bebe;
                        }
                        .tip_label8{
                            color: #00e284;
                            border: 1px solid #00e284;
                        }
                    }
                    .decs{
                        margin-bottom: 10px;
                        font-size: 12px;
                        display: flex;
                        .decs_label{
                            color: #999;
                            margin-right: 10px;
                        }
                        .decs_txt{
                            width: 670px;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                        }
                    }
                    .info{
                        display: flex;
                        font-size: 12px;
                        line-height: 18px;
                        .info_box{
                            margin-bottom: 10px;
                            margin-right: 30px;
                            display: flex;
                            .info_label{
                                color: #999;
                            }
                            .info_value{
                                color: #333;
                            }
                        }
                    }
                }
                &:hover{
                    background: rgba(249, 76, 21, 0.1);
                }
            }
        }
        .page{
            padding: 30px 0 30px 0;
            .pt_pagination{
                display: flex;
                justify-content: center;
                .pagination_btn_to{
                    height: 30px;
                    width: 80px;
                    color: $textColor;
                    margin-left: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>
<style lang="scss">
.ptList{
    .wrap{
        .el-loading-spinner{
            top: 40px;
        }
        .screen{
            .row{
                #diy_time{
                    .el-date-editor{
                        border: 1px solid #DCDFE6;
                        width: 250px;
                        height: 24px;
                        padding: 0 10px;
                    }
                    .el-range-separator{
                        line-height: 24px;
                    }
                    .el-date-editor .el-range__icon{
                        line-height: 24px;
                    }
                    .el-date-editor .el-range__close-icon{
                        line-height: 24px;
                    }
                }
            }
        }
    }
}
.el-tooltip__popper.is-dark{
    background: #6C6C6C;
    width: 400px;
}
</style>
