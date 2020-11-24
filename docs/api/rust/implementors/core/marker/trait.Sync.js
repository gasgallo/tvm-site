(function() {var implementors = {};
implementors["tvm"] = [{"text":"impl Sync for ConstIntBoundNode","synthetic":true,"types":[]},{"text":"impl !Sync for ConstIntBound","synthetic":true,"types":[]},{"text":"impl Sync for BaseAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for Attrs","synthetic":true,"types":[]},{"text":"impl !Sync for DiagnosticNode","synthetic":true,"types":[]},{"text":"impl !Sync for Diagnostic","synthetic":true,"types":[]},{"text":"impl !Sync for DiagnosticBuilder","synthetic":true,"types":[]},{"text":"impl Sync for DiagnosticRendererNode","synthetic":true,"types":[]},{"text":"impl !Sync for DiagnosticRenderer","synthetic":true,"types":[]},{"text":"impl !Sync for DiagnosticContextNode","synthetic":true,"types":[]},{"text":"impl !Sync for DiagnosticContext","synthetic":true,"types":[]},{"text":"impl Sync for DiagnosticLevel","synthetic":true,"types":[]},{"text":"impl Sync for BaseExprNode","synthetic":true,"types":[]},{"text":"impl !Sync for BaseExpr","synthetic":true,"types":[]},{"text":"impl Sync for PrimExprNode","synthetic":true,"types":[]},{"text":"impl !Sync for PrimExpr","synthetic":true,"types":[]},{"text":"impl !Sync for GlobalVarNode","synthetic":true,"types":[]},{"text":"impl !Sync for GlobalVar","synthetic":true,"types":[]},{"text":"impl !Sync for BaseFuncNode","synthetic":true,"types":[]},{"text":"impl !Sync for BaseFunc","synthetic":true,"types":[]},{"text":"impl !Sync for IRModuleNode","synthetic":true,"types":[]},{"text":"impl !Sync for IRModule","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl !Sync for OpNode","synthetic":true,"types":[]},{"text":"impl !Sync for Op","synthetic":true,"types":[]},{"text":"impl !Sync for ExprNode","synthetic":true,"types":[]},{"text":"impl !Sync for Expr","synthetic":true,"types":[]},{"text":"impl !Sync for IdNode","synthetic":true,"types":[]},{"text":"impl !Sync for Id","synthetic":true,"types":[]},{"text":"impl !Sync for ConstantNode","synthetic":true,"types":[]},{"text":"impl !Sync for Constant","synthetic":true,"types":[]},{"text":"impl !Sync for TupleNode","synthetic":true,"types":[]},{"text":"impl !Sync for Tuple","synthetic":true,"types":[]},{"text":"impl !Sync for VarNode","synthetic":true,"types":[]},{"text":"impl !Sync for Var","synthetic":true,"types":[]},{"text":"impl !Sync for CallNode","synthetic":true,"types":[]},{"text":"impl !Sync for Call","synthetic":true,"types":[]},{"text":"impl !Sync for LetNode","synthetic":true,"types":[]},{"text":"impl !Sync for Let","synthetic":true,"types":[]},{"text":"impl !Sync for IfNode","synthetic":true,"types":[]},{"text":"impl !Sync for If","synthetic":true,"types":[]},{"text":"impl !Sync for TupleGetItemNode","synthetic":true,"types":[]},{"text":"impl !Sync for TupleGetItem","synthetic":true,"types":[]},{"text":"impl !Sync for RefCreateNode","synthetic":true,"types":[]},{"text":"impl !Sync for RefCreate","synthetic":true,"types":[]},{"text":"impl !Sync for RefReadNode","synthetic":true,"types":[]},{"text":"impl !Sync for RefRead","synthetic":true,"types":[]},{"text":"impl !Sync for RefWriteNode","synthetic":true,"types":[]},{"text":"impl !Sync for RefWrite","synthetic":true,"types":[]},{"text":"impl !Sync for ConstructorNode","synthetic":true,"types":[]},{"text":"impl !Sync for Constructor","synthetic":true,"types":[]},{"text":"impl !Sync for PatternNode","synthetic":true,"types":[]},{"text":"impl !Sync for Pattern","synthetic":true,"types":[]},{"text":"impl !Sync for PatternWildcardNode","synthetic":true,"types":[]},{"text":"impl !Sync for PatternWildcard","synthetic":true,"types":[]},{"text":"impl !Sync for PatternVarNode","synthetic":true,"types":[]},{"text":"impl !Sync for PatternVar","synthetic":true,"types":[]},{"text":"impl !Sync for PatternConstructorNode","synthetic":true,"types":[]},{"text":"impl !Sync for PatternConstructor","synthetic":true,"types":[]},{"text":"impl !Sync for PatternTupleNode","synthetic":true,"types":[]},{"text":"impl !Sync for PatternTuple","synthetic":true,"types":[]},{"text":"impl !Sync for ClauseNode","synthetic":true,"types":[]},{"text":"impl !Sync for Clause","synthetic":true,"types":[]},{"text":"impl !Sync for MatchNode","synthetic":true,"types":[]},{"text":"impl !Sync for Match","synthetic":true,"types":[]},{"text":"impl !Sync for FunctionNode","synthetic":true,"types":[]},{"text":"impl !Sync for Function","synthetic":true,"types":[]},{"text":"impl !Sync for Conv2DAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for Conv2DAttrs","synthetic":true,"types":[]},{"text":"impl Sync for BiasAddAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for BiasAddAttrs","synthetic":true,"types":[]},{"text":"impl !Sync for DenseAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for DenseAttrs","synthetic":true,"types":[]},{"text":"impl !Sync for GlobalPool2DAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for GlobalPool2DAttrs","synthetic":true,"types":[]},{"text":"impl !Sync for MaxPool2DAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for MaxPool2DAttrs","synthetic":true,"types":[]},{"text":"impl Sync for SoftmaxAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for SoftmaxAttrs","synthetic":true,"types":[]},{"text":"impl Sync for BatchNormAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for BatchNormAttrs","synthetic":true,"types":[]},{"text":"impl Sync for ExpandDimsAttrsNode","synthetic":true,"types":[]},{"text":"impl !Sync for ExpandDimsAttrs","synthetic":true,"types":[]},{"text":"impl !Sync for SourceNode","synthetic":true,"types":[]},{"text":"impl !Sync for Source","synthetic":true,"types":[]},{"text":"impl !Sync for SourceMapNode","synthetic":true,"types":[]},{"text":"impl !Sync for SourceMap","synthetic":true,"types":[]},{"text":"impl !Sync for SourceNameNode","synthetic":true,"types":[]},{"text":"impl !Sync for SourceName","synthetic":true,"types":[]},{"text":"impl !Sync for SpanNode","synthetic":true,"types":[]},{"text":"impl !Sync for Span","synthetic":true,"types":[]},{"text":"impl Sync for IntImmNode","synthetic":true,"types":[]},{"text":"impl !Sync for IntImm","synthetic":true,"types":[]},{"text":"impl !Sync for VarNode","synthetic":true,"types":[]},{"text":"impl !Sync for Var","synthetic":true,"types":[]},{"text":"impl !Sync for AddNode","synthetic":true,"types":[]},{"text":"impl !Sync for Add","synthetic":true,"types":[]},{"text":"impl !Sync for SubNode","synthetic":true,"types":[]},{"text":"impl !Sync for Sub","synthetic":true,"types":[]},{"text":"impl !Sync for MulNode","synthetic":true,"types":[]},{"text":"impl !Sync for Mul","synthetic":true,"types":[]},{"text":"impl !Sync for DivNode","synthetic":true,"types":[]},{"text":"impl !Sync for Div","synthetic":true,"types":[]},{"text":"impl !Sync for ModNode","synthetic":true,"types":[]},{"text":"impl !Sync for Mod","synthetic":true,"types":[]},{"text":"impl !Sync for FloorDivNode","synthetic":true,"types":[]},{"text":"impl !Sync for FloorDiv","synthetic":true,"types":[]},{"text":"impl !Sync for FloorModNode","synthetic":true,"types":[]},{"text":"impl !Sync for FloorMod","synthetic":true,"types":[]},{"text":"impl !Sync for MinNode","synthetic":true,"types":[]},{"text":"impl !Sync for Min","synthetic":true,"types":[]},{"text":"impl !Sync for MaxNode","synthetic":true,"types":[]},{"text":"impl !Sync for Max","synthetic":true,"types":[]},{"text":"impl !Sync for CastNode","synthetic":true,"types":[]},{"text":"impl !Sync for Cast","synthetic":true,"types":[]},{"text":"impl !Sync for RampNode","synthetic":true,"types":[]},{"text":"impl !Sync for Ramp","synthetic":true,"types":[]},{"text":"impl !Sync for SelectNode","synthetic":true,"types":[]},{"text":"impl !Sync for Select","synthetic":true,"types":[]},{"text":"impl !Sync for EqNode","synthetic":true,"types":[]},{"text":"impl !Sync for Eq","synthetic":true,"types":[]},{"text":"impl !Sync for NeNode","synthetic":true,"types":[]},{"text":"impl !Sync for Ne","synthetic":true,"types":[]},{"text":"impl !Sync for LtNode","synthetic":true,"types":[]},{"text":"impl !Sync for Lt","synthetic":true,"types":[]},{"text":"impl !Sync for LeNode","synthetic":true,"types":[]},{"text":"impl !Sync for Le","synthetic":true,"types":[]},{"text":"impl !Sync for GtNode","synthetic":true,"types":[]},{"text":"impl !Sync for Gt","synthetic":true,"types":[]},{"text":"impl !Sync for GeNode","synthetic":true,"types":[]},{"text":"impl !Sync for Ge","synthetic":true,"types":[]},{"text":"impl !Sync for AndNode","synthetic":true,"types":[]},{"text":"impl !Sync for And","synthetic":true,"types":[]},{"text":"impl !Sync for OrNode","synthetic":true,"types":[]},{"text":"impl !Sync for Or","synthetic":true,"types":[]},{"text":"impl !Sync for NotNode","synthetic":true,"types":[]},{"text":"impl !Sync for Not","synthetic":true,"types":[]},{"text":"impl !Sync for LetNode","synthetic":true,"types":[]},{"text":"impl !Sync for Let","synthetic":true,"types":[]},{"text":"impl !Sync for TypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for Type","synthetic":true,"types":[]},{"text":"impl !Sync for PrimTypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for PrimType","synthetic":true,"types":[]},{"text":"impl !Sync for PointerTypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for PointerType","synthetic":true,"types":[]},{"text":"impl !Sync for TypeVarNode","synthetic":true,"types":[]},{"text":"impl !Sync for TypeVar","synthetic":true,"types":[]},{"text":"impl !Sync for GlobalTypeVarNode","synthetic":true,"types":[]},{"text":"impl !Sync for GlobalTypeVar","synthetic":true,"types":[]},{"text":"impl !Sync for TupleTypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for TupleType","synthetic":true,"types":[]},{"text":"impl !Sync for TypeConstraintNode","synthetic":true,"types":[]},{"text":"impl !Sync for TypeConstraint","synthetic":true,"types":[]},{"text":"impl !Sync for FuncTypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for FuncType","synthetic":true,"types":[]},{"text":"impl !Sync for IncompleteTypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for IncompleteType","synthetic":true,"types":[]},{"text":"impl !Sync for RelayRefTypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for RefType","synthetic":true,"types":[]},{"text":"impl !Sync for BaseTensorTypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for BaseTensorType","synthetic":true,"types":[]},{"text":"impl !Sync for TensorTypeNode","synthetic":true,"types":[]},{"text":"impl !Sync for TensorType","synthetic":true,"types":[]},{"text":"impl !Sync for TypeDataNode","synthetic":true,"types":[]},{"text":"impl !Sync for TypeData","synthetic":true,"types":[]},{"text":"impl Sync for TypeKind","synthetic":true,"types":[]},{"text":"impl !Sync for GraphRt","synthetic":true,"types":[]},{"text":"impl !Sync for PassInfoNode","synthetic":true,"types":[]},{"text":"impl !Sync for PassInfo","synthetic":true,"types":[]}];
implementors["tvm_graph_rt"] = [{"text":"impl&lt;'a&gt; !Sync for Tensor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Graph","synthetic":true,"types":[]},{"text":"impl Sync for Entry","synthetic":true,"types":[]},{"text":"impl Sync for Node","synthetic":true,"types":[]},{"text":"impl&lt;'m, 't&gt; !Sync for GraphExecutor&lt;'m, 't&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for DsoModule&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for SystemLibModule","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for Storage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for FunctionNotFound","synthetic":true,"types":[]},{"text":"impl !Sync for InvalidPointer","synthetic":true,"types":[]},{"text":"impl Sync for GraphFormatError","synthetic":true,"types":[]},{"text":"impl Sync for ArrayError","synthetic":true,"types":[]}];
implementors["tvm_rt"] = [{"text":"impl Sync for Object","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for ObjectPtr&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for ObjectRef","synthetic":true,"types":[]},{"text":"impl !Sync for StringObj","synthetic":true,"types":[]},{"text":"impl !Sync for String","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for Array&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for IntoIter&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Sync for FunctionNotFoundError","synthetic":true,"types":[]},{"text":"impl Sync for TypeMismatchError","synthetic":true,"types":[]},{"text":"impl Sync for NDArrayError","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; !Sync for Map&lt;K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; !Sync for IntoIter&lt;K, V&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Module","synthetic":true,"types":[]},{"text":"impl !Sync for NDArrayContainer","synthetic":true,"types":[]},{"text":"impl !Sync for NDArray","synthetic":true,"types":[]},{"text":"impl Sync for Function","synthetic":false,"types":[]}];
implementors["tvm_sys"] = [{"text":"impl Sync for DLContext","synthetic":true,"types":[]},{"text":"impl Sync for DLDataType","synthetic":true,"types":[]},{"text":"impl !Sync for DLTensor","synthetic":true,"types":[]},{"text":"impl !Sync for DLManagedTensor","synthetic":true,"types":[]},{"text":"impl !Sync for TVMByteArray","synthetic":true,"types":[]},{"text":"impl !Sync for TVMParallelGroupEnv","synthetic":true,"types":[]},{"text":"impl !Sync for TVMValue","synthetic":true,"types":[]},{"text":"impl !Sync for ByteArray","synthetic":true,"types":[]},{"text":"impl Sync for Context","synthetic":true,"types":[]},{"text":"impl Sync for UnsupportedDeviceError","synthetic":true,"types":[]},{"text":"impl Sync for DeviceType","synthetic":true,"types":[]},{"text":"impl Sync for DataType","synthetic":true,"types":[]},{"text":"impl Sync for ParseDataTypeError","synthetic":true,"types":[]},{"text":"impl Sync for ValueDowncastError","synthetic":true,"types":[]},{"text":"impl Sync for FuncCallError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Sync for ArgValue&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for RetValue","synthetic":true,"types":[]},{"text":"impl Sync for UnsupportedDeviceError","synthetic":true,"types":[]}];
implementors["tyck"] = [{"text":"impl Sync for Opt","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()